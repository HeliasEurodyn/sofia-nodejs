const Neo4jModel = require('../models/neo4jModel');

class Neo4jService {
  constructor(driver) {
    this.model = new Neo4jModel(driver);
  }

  getAllNodes() {
    return this.model.getAllNodes();
  }

  getNodeById(id) {
    return this.model.getNodeById(id);
  }

  createNode(dto) {
    return this.model.createNode(dto);
  }

  deleteNodeById(id) {
    return this.model.deleteNodeById(id);
  }

  getAllRelationships() {
    return this.model.getAllRelationships();
  }

  putNodePositions(nodePositions) {
    return this.model.putNodePositions(nodePositions);
  }

  runQuery(query) {
    return this.model.runQuery(query);
  }

}

module.exports = Neo4jService;
