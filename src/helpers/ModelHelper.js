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
function extractKeyFields(tableSchema) {
  const keys = [];

  for (const [field, config] of Object.entries(tableSchema)) {
    if (config.primary || config.isSaveStatement) keys.push(field);
  }

  return keys;
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
  const keyFields = extractKeyFields(tableSchema);

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
function buildDeleteNotInQuery(table, keyFields, dataArray) {
  if (!keyFields.length) {
    throw new Error("deleteMissing requires keyFields");
  }

  if (!Array.isArray(dataArray) || dataArray.length === 0) {
    throw new Error("deleteMissing requires at least one element in data[]");
  }

  const params = {};
  const tuples = dataArray.map((row, idx) => {
    const placeholders = keyFields.map(field => {
      const paramName = `p_${idx}_${field}`;
      params[paramName] = row[field];
      return `:${paramName}`;
    });

    return `(${placeholders.join(', ')})`;
  });

  const keyListSql = keyFields.map(f => `\`${f}\``).join(', ');

  const sql = `
    DELETE FROM \`${table}\`
    WHERE (${keyListSql}) NOT IN (
      ${tuples.join(', ')}
    )
  `;

  return { sql, params };
}

/* ---------------------------------------------------------
 * WHERE builder (listFields + filters)
 * --------------------------------------------------------- */
function buildWhereClause(listFields, filters = {}) {
  const conditions = [];
  const params = {};

  for (const [filterKey, filterValue] of Object.entries(filters)) {
    const fieldConfig = listFields[filterKey];
    if (!fieldConfig) continue; // αγνόησε άγνωστα φίλτρα
    if (!fieldConfig.db_table || !fieldConfig.db_field) continue;
    if (filterValue === undefined || filterValue === null || filterValue === '') continue;

    const paramName = `f_${filterKey}`;
    const value = convertValue(filterValue, fieldConfig.type);

    // basic equality – μπορείς εύκολα να το επεκτείνεις
    conditions.push(
      `\`${fieldConfig.db_table}\`.\`${fieldConfig.db_field}\` = :${paramName}`
    );

    params[paramName] = value;
  }

  if (!conditions.length) {
    return { whereSql: '1=1', params: {} };
  }

  return {
    whereSql: conditions.join(' AND '),
    params
  };
}

/* ---------------------------------------------------------
 * ModelHelper main class
 * --------------------------------------------------------- */
class ModelHelper {

  static buildWhere(listFields, filters) {
    return buildWhereClause(listFields, filters);
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

  static async deleteMissing(conn, table, schema, rows) {
    const keyFields = extractKeyFields(schema);

    if (!keyFields.length) {
      throw new Error("deleteMissing requires primary/isSaveStatement keys");
    }

    const { sql, params } = buildDeleteNotInQuery(table, keyFields, rows);
    const [res] = await conn.query(sql, params);
    return res;
  }
}

module.exports = ModelHelper;
