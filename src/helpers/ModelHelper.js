const crypto = require('crypto');

/* ---------------------------------------------------------
 * Type conversion
 * --------------------------------------------------------- */
function convertValue(raw, type) {
  if (raw === null || raw === undefined) return null;

  switch (type) {
    case 'datetime': {
      const d = new Date(raw);
      return isNaN(d.getTime()) ? null : d;
    }
    case 'bit':
    case 'boolean':
      return raw ? 1 : 0;
    case 'int':
    case 'bigint':
      return raw !== '' && raw !== null ? Number(raw) : null;
    case 'double':
      return raw !== '' && raw !== null ? parseFloat(raw) : null;
    case 'varchar':
    case 'text':
    case 'password':
    case 'uuid':
      return raw !== null && raw !== undefined ? raw.toString() : null;
    case 'longblob':
      return Buffer.isBuffer(raw) ? raw : Buffer.from(raw);
    default:
      return raw;
  }
}

/* ---------------------------------------------------------
 * Helpers for schemas
 * --------------------------------------------------------- */
// function extractKeyFields(tableSchema) {
//   const keys = [];

//   for (const [field, config] of Object.entries(tableSchema)) {
//     if (config.primary || config.isSaveStatement) keys.push(field);
//   }

//   return keys;
// }

function extractPrimaryFields(schema) {
  return Object.entries(schema)
    .filter(([_, c]) => c.primary)
    .map(([f]) => f);
}

function extractScopeFields(schema) {
  return Object.entries(schema)
    .filter(([_, c]) => c.isSaveStatement)
    .map(([f]) => f);
}

function sanitizeForInsert(tableSchema, data) {
  const result = {};

  for (const [field, config] of Object.entries(tableSchema)) {
    if (!config.insert) continue;
    if (config.autoIncrement) continue;

    if (data[field] === undefined) continue;

    result[field] = convertValue(data[field], config.type);
  }

  return result;
}

function sanitizeForUpdate(tableSchema, data) {
  const update = {};
  const where = {};

  for (const [field, config] of Object.entries(tableSchema)) {
    if (data[field] === undefined) continue;

    const val = convertValue(data[field], config.type);

    if (config.primary || config.isSaveStatement) {
      where[field] = val;
      continue;
    }

    if (config.update && !config.autoIncrement) {
      update[field] = val;
    }
  }

  return { update, where };
}

/* ---------------------------------------------------------
 * INSERT builder
 * --------------------------------------------------------- */
function buildInsertQuery(table, sanitized) {
  const fields = Object.keys(sanitized);

  if (!fields.length) {
    throw new Error(`ModelHelper: no insertable fields for table ${table}`);
  }

  const placeholders = fields.map(f => `:${f}`).join(', ');

  const sql = `
    INSERT INTO \`${table}\`
    (${fields.map(f => `\`${f}\``).join(', ')})
    VALUES (${placeholders})
  `;

  return { sql, params: sanitized };
}

/* ---------------------------------------------------------
 * UPDATE builder
 * --------------------------------------------------------- */
function buildUpdateQuery(table, update, where) {
  const updateFields = Object.keys(update);
  const whereFields = Object.keys(where);

  if (!updateFields.length) {
    throw new Error(`ModelHelper: no updatable fields for table ${table}`);
  }
  if (!whereFields.length) {
    throw new Error(`ModelHelper: update requires WHERE keys for table ${table}`);
  }

  const setSql = updateFields.map(f => `\`${f}\` = :${f}`).join(', ');
  const whereSql = whereFields.map(f => `\`${f}\` = :w_${f}`).join(' AND ');

  const sql = `
    UPDATE \`${table}\`
    SET ${setSql}
    WHERE ${whereSql}
  `;

  const params = {
    ...update,
    ...Object.fromEntries(whereFields.map(f => [`w_${f}`, where[f]]))
  };

  return { sql, params };
}

/* ---------------------------------------------------------
 * Determine if we should INSERT
 * --------------------------------------------------------- */
function shouldInsert(tableSchema, data) {
  const keyFields = extractPrimaryFields(tableSchema);

  for (const field of keyFields) {
    const value = data[field];
    if (value === undefined || value === null || value === '') {
      return true;
    }
  }

  return false;
}

/* ---------------------------------------------------------
 * DELETE ... WHERE (keys...) NOT IN (...)
 * --------------------------------------------------------- */
function buildDeleteNotInQuery(table, primaryFields, scopeFields, dataArray) {

  if (!primaryFields.length) {
    throw new Error("deleteMissing requires primary fields");
  }

  if (!Array.isArray(dataArray) || dataArray.length === 0) {
    throw new Error("deleteMissing requires at least one element");
  }

  const params = {};

  // primary ids
  const ids = dataArray.map((row, idx) => {
    const paramName = `p_${idx}`;
    params[paramName] = row[primaryFields[0]]; // assume 1 PK (id)
    return `:${paramName}`;
  });

  // scope filters (π.χ. scenario_id)
  const scopeConditions = scopeFields.map(f => `\`${f}\` = :scope_${f}`);

  for (const f of scopeFields) {
    params[`scope_${f}`] = dataArray[0][f];
  }

  const sql = `
    DELETE FROM \`${table}\`
    WHERE ${scopeConditions.join(' AND ')}
    AND \`${primaryFields[0]}\` NOT IN (${ids.join(', ')})
  `;

  return { sql, params };
}

/* ---------------------------------------------------------
 * WHERE builder (listFields + filters)
 * --------------------------------------------------------- */
function buildWhereClause(listFields, filters = {}) {
  const conditions = [];
  const params = [];

  for (const [filterKey, filterValue] of Object.entries(filters)) {
    const fieldConfig = listFields[filterKey];
    if (!fieldConfig) continue;
    if (!fieldConfig.db_table || !fieldConfig.db_field) continue;
    if (filterValue === undefined || filterValue === null || filterValue === '') continue;

    const operator = (fieldConfig.filterOperator || '=').toLowerCase();
    let value = convertValue(filterValue, fieldConfig.type);

    let sqlOperator = operator;
    let sqlValue = value;

    if (operator === 'like') {
      sqlOperator = 'LIKE';
      sqlValue = `%${value}%`;
    }

    conditions.push(
      `\`${fieldConfig.db_table}\`.\`${fieldConfig.db_field}\` ${sqlOperator} ?`
    );

    params.push(sqlValue);
  }

  if (!conditions.length) {
    return { whereSql: '', params: [] };
  }

  return {
    whereSql: 'WHERE ' + conditions.join(' AND '),
    params
  };
}

function buildOrderByClause(listFields, filters = {}) {
  const sortCode = filters['sel-sort-code'];
  const sortOrder = filters['sel-sort-order'];

  if (!sortCode || !sortOrder) return '';

  const fieldConfig = listFields[sortCode];
  if (!fieldConfig) return '';
  if (!fieldConfig.db_table || !fieldConfig.db_field) return '';

  const direction = sortOrder.toLowerCase();
  if (direction !== 'asc' && direction !== 'desc') return '';

  return `ORDER BY \`${fieldConfig.db_table}\`.\`${fieldConfig.db_field}\` ${direction.toUpperCase()}`;
}


/* ---------------------------------------------------------
 * ModelHelper main class
 * --------------------------------------------------------- */
class ModelHelper {

  static buildWhere(listFields, filters) {
    return buildWhereClause(listFields, filters);
  }

  static buildOrderBy(listFields, filters) {
    return buildOrderByClause(listFields, filters);
  }

  static async insert(conn, table, schema, data) {
    const sanitized = sanitizeForInsert(schema, data);
    const { sql, params } = buildInsertQuery(table, sanitized);
    const [res] = await conn.query(sql, params);
    return res;
  }

  static async update(conn, table, schema, data) {
    const { update, where } = sanitizeForUpdate(schema, data);
    const { sql, params } = buildUpdateQuery(table, update, where);
    const [res] = await conn.query(sql, params);
    return res;
  }

  static async insertOrUpdate(conn, table, schema, data) {
    if (shouldInsert(schema, data)) {
      return this.insert(conn, table, schema, data);
    }
    return this.update(conn, table, schema, data);
  }

  static async shouldInsert(tableSchema, data) {
    const keyFields = extractPrimaryFields(tableSchema);

    for (const field of keyFields) {
      const value = data[field];
      if (value === undefined || value === null || value === '') {
        return true;
      }
  }

  return false;
}

  static async deleteMissing(conn, table, schema, rows) {
    const primaryFields = extractPrimaryFields(schema);
    const scopeFields = extractScopeFields(schema);

    if (!primaryFields.length) {
      throw new Error("deleteMissing requires primary keys");
    }

    const { sql, params } = buildDeleteNotInQuery(table, primaryFields, scopeFields, rows);
    const [res] = await conn.query(sql, params);
    return res;
  }
}

module.exports = ModelHelper;
