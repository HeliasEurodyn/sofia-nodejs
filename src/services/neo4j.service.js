const Neo4jRepository = require('../models/neo4j.repository');

class Neo4jService {
  constructor() {
    this.repo = new Neo4jRepository();
  }

  getAllNodes() {
    return this.repo.getAllNodes();
  }

  getNodeById(id) {
    return this.repo.getNodeById(id);
  }

  createNode(dto) {
    return this.repo.createNode(dto);
  }

  deleteNodeById(id) {
    return this.repo.deleteNodeById(id);
  }

  getAllRelationships() {
    return this.repo.getAllRelationships();
  }

  putNodePositions(nodePositions) {
    return this.repo.putNodePositions(nodePositions);
  }

  runQuery(query) {
    return this.repo.runQuery(query);
  }

}

module.exports = Neo4jService;
