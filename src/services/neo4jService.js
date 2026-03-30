const Neo4jModel = require('../models/neo4jModel');

class Neo4jService {
  constructor(driver) {
    this.model = new Neo4jModel(driver);
  }

  executeQueries(queries) {
    return this.model.executeQueries(queries);
  }

  getDefaultNodes() {
    return this.model.getDefaultNodes();
  }

  getDefaultRelationships() {
    return this.model.getDefaultRelationships();
  }

  getNodesByNavigation(req) {
    return this.model.getNodesByNavigation(req.params.id, req.user?.id || '');
  }

  getRelationshipsByNavigation(req) {
    return this.model.getRelationshipsByNavigation(req.params.id, req.user?.id || '');
  }

  getNodeById(id) {
    return this.model.getNodeById(id);
  }

  createNode(dto) {
    return this.model.createNode(dto);
  }

  updateNode(dto, id) {
    return this.model.updateNode(dto, id);
  }


  deleteNodeById(id) {
    return this.model.deleteNodeById(id);
  }

  putNodePositions(nodePositions) {
    return this.model.putNodePositions(nodePositions);
  }

  runQuery(query) {
    return this.model.runQuery(query);
  }

  getRelationshipById(id) {
    return this.model.getRelationshipById(id);
  }

  createRelationship(dto) {
    return this.model.createRelationship(dto);
  }

  updateRelationship(id, dto) {
    return this.model.updateRelationship(id, dto);
  }

  deleteRelationshipById(id) {
    return this.model.deleteRelationshipById(id);
  }

}

module.exports = Neo4jService;
