const neo4j = require('neo4j-driver');
const driver = require('../neo4j');

class Neo4jRepository {

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

  async getAllNodes() {
    const session = driver.session();
    try {
      const result = await session.run('MATCH (n) RETURN n');
      return result.records.map(r => mapNode(r.get('n')));
    } finally {
      await session.close();
    }
  }

  async getNodeById(id) {
    const session = driver.session();
    try {
      const result = await session.run(
        'MATCH (n) WHERE id(n) = $id RETURN n',
        { id: neo4j.int(id) }
      );
      if (!result.records.length) return null;
      return mapNode(result.records[0].get('n'));
    } finally {
      await session.close();
    }
  }

  async createNode({ labels = [], properties = [] }) {
    const session = driver.session();

    const props = {};
    properties.forEach(p => (props[p.name] = p.value));

    const labelStr = labels.length ? ':' + labels.join(':') : '';

    try {
      const result = await session.run(
        `CREATE (n${labelStr} $props) RETURN n`,
        { props }
      );
      return mapNode(result.records[0].get('n'));
    } finally {
      await session.close();
    }
  }

  async deleteNodeById(id) {
    const session = driver.session();
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

  async getAllRelationships() {
    const session = driver.session();
    try {
      const result = await session.run('MATCH ()-[r]->() RETURN r');
      return result.records.map(r => mapRelationship(r.get('r')));
    } finally {
      await session.close();
    }
  }

  async putNodePositions(nodePositions) {
    if (!Array.isArray(nodePositions) || nodePositions.length === 0) {
      return;
    }

    const session = driver.session();

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

  const session = driver.session();

  try {
      const result = await session.run(query);

      return result.records.map(record => {
        const obj = {};
        record.keys.forEach(key => {
          const value = record.get(key);

          if (value?.identity) {
            // Node or Relationship
            obj[key] = value.properties
              ? {
                  id: value.identity.toInt(),
                  labels: value.labels,
                  properties: value.properties
                }
              : {
                  id: value.identity.toInt(),
                  type: value.type,
                  start: value.start.toInt(),
                  end: value.end.toInt(),
                  properties: value.properties
                };
          } else {
            obj[key] = value;
          }
        });
        return obj;
      });
    } finally {
      await session.close();
    }
  }

}

module.exports = Neo4jRepository;
