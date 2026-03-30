const neo4j = require('neo4j-driver');
const CypherQueryTemplateFormService = require('../services/form/CypherQueryTemplateFormService');


class Neo4jModel {

  constructor(driver) {
    this.driver = driver;
  }

  serializeValue(value) {
    if (neo4j.isInt(value)) {
      return value.inSafeRange() ? value.toNumber() : value.toString();
    }

    if (Array.isArray(value)) {
      return value.map((item) => this.serializeValue(item));
    }

    if (value && typeof value === 'object') {
      if (typeof value.identity?.toInt === 'function' && Array.isArray(value.labels)) {
        return {
          id: value.identity.toInt(),
          labels: Array.from(value.labels),
          properties: this.serializeValue(value.properties)
        };
      }

      if (
        typeof value.identity?.toInt === 'function' &&
        typeof value.start?.toInt === 'function' &&
        typeof value.end?.toInt === 'function'
      ) {
        return {
          id: value.identity.toInt(),
          type: value.type,
          start: value.start.toInt(),
          end: value.end.toInt(),
          properties: this.serializeValue(value.properties)
        };
      }

      return Object.fromEntries(
        Object.entries(value).map(([key, entryValue]) => [key, this.serializeValue(entryValue)])
      );
    }

    return value;
  }

  serializeResult(result) {
    return result.records.map((record) => {
      const serializedRecord = {};

      record.keys.forEach((key) => {
        serializedRecord[key] = this.serializeValue(record.get(key));
      });

      return serializedRecord;
    });
  }

  getCounters(resultSummary) {
    if (!resultSummary?.counters?.updates) {
      return {};
    }

    return Object.entries(resultSummary.counters.updates()).reduce((acc, [key, value]) => {
      acc[key] = value;
      return acc;
    }, {});
  }

  mapNode(node) {
    return {
      identity: node.identity.toInt(),
      labels: Array.from(node.labels),
      properties: Object.entries(node.properties).map(([key, value]) => ({
        name: key,
        value
      }))
    };
  }

  mapRelationship(rel) {
    return {
      identity: rel.identity.toInt(),
      start: rel.start.toInt(),
      end: rel.end.toInt(),
      type: rel.type,
      properties: Object.entries(rel.properties).map(([key, value]) => ({
        name: key,
        value
      }))
    };
  }

  async getDefaultNodes() {
    const session = this.driver.session();
    try {
      const defaultQueryTemplate = await CypherQueryTemplateFormService.getDefault();
      const query = defaultQueryTemplate?.cypher_query_template_obj?.node_query;
      const result = await session.run(query);
      return result.records.map(r => this.mapNode(r.get('n')));
    } finally {
      await session.close();
    }
  }

  async getDefaultRelationships() {
    const session = this.driver.session();
    try {
      const defaultQueryTemplate = await CypherQueryTemplateFormService.getDefault();
      const query = defaultQueryTemplate?.cypher_query_template_obj?.relathionship_query;
      const result = await session.run(query);
      return result.records.map(r => this.mapRelationship(r.get('r')));
    } finally {
      await session.close();
    }
  }

  async getNodesByNavigation(id, userId) {
    const session = this.driver.session();
    try {
      const defaultQueryTemplate = await CypherQueryTemplateFormService.getById({
         id: id,
         ctx: {
            userId: userId
            }
      });
      const query = defaultQueryTemplate?.cypher_query_template_obj?.node_query;
      const result = await session.run(query);
      return result.records.map(r => this.mapNode(r.get('n')));
    } finally {
      await session.close();
    }
  }

  async getRelationshipsByNavigation(id, userId) {
    const session = this.driver.session();
    try {
      const defaultQueryTemplate = await CypherQueryTemplateFormService.getById({
         id: id,
         ctx: {
            userId: userId
            }
      });
      const query = defaultQueryTemplate?.cypher_query_template_obj?.relathionship_query;
      const result = await session.run(query);
      return result.records.map(r => this.mapRelationship(r.get('r')));
    } finally {
      await session.close();
    }
  }

  async getNodeById(id) {
    const session = this.driver.session();
    try {
      const result = await session.run(
        'MATCH (n) WHERE id(n) = $id RETURN n',
        { id: neo4j.int(id) }
      );
      if (!result.records.length) return null;
      return this.mapNode(result.records[0].get('n'));
    } finally {
      await session.close();
    }
  }

  async createNode({ labels = [], properties = [] }) {
    const session = this.driver.session();

    const props = {};
    properties.forEach(p => (props[p.name] = p.value));

    const labelStr = labels.length ? ':' + labels.join(':') : '';

    try {
      const result = await session.run(
        `CREATE (n${labelStr} $props) RETURN n`,
        { props }
      );
      return this.mapNode(result.records[0].get('n'));
    } finally {
      await session.close();
    }
  }
  
  async updateNode({ labels = [], properties = [] }, id) {
    const session = this.driver.session();

    const props = {};
    properties.forEach(p => {
      props[p.name] = p.value;
    });

    const labelStr = labels.length ? ':' + labels.join(':') : '';

    try {
      const result = await session.run(
        `
        MATCH (n)
        WHERE id(n) = $id
        SET n += $props
        ${labels.length ? `SET n${labelStr}` : ''}
        RETURN n
        `,
        {
          id: neo4j.int(id),
          props
        }
      );

      if (!result.records.length) return null;

      return this.mapNode(result.records[0].get('n'));
    } finally {
      await session.close();
    }
  }

  async deleteNodeById(id) {
    const session = this.driver.session();
    try {
      const result = await session.run(
        'MATCH (n) WHERE id(n) = $id DELETE n RETURN count(n) AS cnt',
        { id: neo4j.int(id) }
      );
      return result.records[0].get('cnt').toInt();
    } finally {
      await session.close();
    }
  }

  async putNodePositions(nodePositions) {
    if (!Array.isArray(nodePositions) || nodePositions.length === 0) {
      return;
    }

    const session = this.driver.session();

    const query = `
      UNWIND $nodes AS node
      MATCH (n)
      WHERE id(n) = node.id
      SET
        n.ngsocPosX = node.ngsocPosX,
        n.ngsocPosY = node.ngsocPosY
    `;

    const params = {
      nodes: nodePositions.map(n => ({
        id: neo4j.int(n.identity),
        ngsocPosX: n.ngsocPosX,
        ngsocPosY: n.ngsocPosY
      }))
    };

    try {
      await session.run(query, params);
    } finally {
      await session.close();
    }
  }

  async runQuery(query) {

  const session = this.driver.session();

  try {
      const result = await session.run(query);

      return this.serializeResult(result);
    } finally {
      await session.close();
    }
  }

  async executeQueries(queries = []) {
    if (!Array.isArray(queries) || queries.length === 0) {
      return [];
    }

    const session = this.driver.session();
    const tx = session.beginTransaction();

    try {
      const executedSteps = [];

      for (const step of queries) {
        const statements = Array.isArray(step.statements) && step.statements.length > 0
          ? step.statements
          : [step.query];

        const statementResults = [];
        const aggregatedCounters = {};
        let totalRecordCount = 0;

        for (let statementIndex = 0; statementIndex < statements.length; statementIndex += 1) {
          const statement = statements[statementIndex];
          const result = await tx.run(statement);
          const counters = this.getCounters(result.summary);
          const records = this.serializeResult(result);

          totalRecordCount += records.length;
          Object.entries(counters).forEach(([key, value]) => {
            aggregatedCounters[key] = (aggregatedCounters[key] || 0) + value;
          });

          statementResults.push({
            index: statementIndex + 1,
            query: statement,
            record_count: records.length,
            counters,
            records
          });
        }

        executedSteps.push({
          id: step.id,
          name: step.name,
          sort_order: step.sort_order,
          query: step.query,
          statement_count: statementResults.length,
          record_count: totalRecordCount,
          counters: aggregatedCounters,
          records: statementResults.length > 0
            ? statementResults[statementResults.length - 1].records
            : [],
          statements: statementResults
        });
      }

      await tx.commit();

      return executedSteps;
    } catch (error) {
      await tx.rollback();
      throw error;
    } finally {
      await session.close();
    }
  }

  async getRelationshipById(id) {
    const session = this.driver.session();

    try {
      const result = await session.run(
        'MATCH ()-[r]->() WHERE id(r)=$id RETURN r',
        { id: neo4j.int(id) }
      );

      if (!result.records.length) return null;

      return this.mapRelationship(result.records[0].get('r'));
    } finally {
      await session.close();
    }
  }

  async createRelationship({ start, end, type, properties = [] }) {
    const session = this.driver.session();

    const props = {};
    properties.forEach(p => (props[p.name] = p.value));

    try {
      const result = await session.run(
        `
        MATCH (n1),(n2)
        WHERE id(n1)=$start AND id(n2)=$end
        CREATE (n1)-[r:${type} $props]->(n2)
        RETURN r
        `,
        {
          start: neo4j.int(start),
          end: neo4j.int(end),
          props
        }
      );

      return this.mapRelationship(result.records[0].get('r'));
    } finally {
      await session.close();
    }
  }

  async updateRelationship(id, { properties = [] }) {
    const session = this.driver.session();

    const props = {};
    properties.forEach(p => (props[p.name] = p.value));

    try {
      const result = await session.run(
        `
        MATCH ()-[r]->()
        WHERE id(r)=$id
        SET r = $props
        RETURN r
        `,
        {
          id: neo4j.int(id),
          props
        }
      );

      if (!result.records.length) return null;

      return this.mapRelationship(result.records[0].get('r'));
    } finally {
      await session.close();
    }
  }

  async deleteRelationshipById(id) {
    const session = this.driver.session();

    try {
      const result = await session.run(
        'MATCH ()-[r]->() WHERE id(r)=$id DELETE r RETURN count(r) AS cnt',
        { id: neo4j.int(id) }
      );

      return result.records[0].get('cnt').toInt();
    } finally {
      await session.close();
    }
  }

}



module.exports = Neo4jModel;
