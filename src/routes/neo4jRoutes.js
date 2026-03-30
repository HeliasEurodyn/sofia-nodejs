const express = require('express');
const Neo4jService = require('../services/neo4jService');
const neo4jContext = require('../middleware/neo4jContext'); // ← MISSING
const { authenticate } = require('../middleware/authenticate');

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Neo4j
 *   description: Neo4j graph operations
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     GraphNode:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *         labels:
 *           type: array
 *           items:
 *             type: string
 *         properties:
 *           type: object
 *     GraphRelationship:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *         type:
 *           type: string
 *         startNode:
 *           type: string
 *         endNode:
 *           type: string
 *         properties:
 *           type: object
 *     CypherQuery:
 *       type: object
 *       required:
 *         - query
 *       properties:
 *         query:
 *           type: string
 */

router.use(authenticate); 
router.use(neo4jContext);

/**
 * @swagger
 * /api/neo4j:
 *   get:
 *     summary: Get all nodes and relationships
 *     tags: [Neo4j]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Graph data
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 nodes:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/GraphNode'
 *                 relationships:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/GraphRelationship'
 *       401:
 *         description: Unauthorized
 */

router.get('/', async (req, res, next) => {
  try {
    const service = new Neo4jService(req.neo4jDriver);
    const [nodes, relationships] = await Promise.all([
      service.getDefaultNodes(),
      service.getDefaultRelationships()
    ]);
    res.json({ nodes, relationships });
  } catch (e) {
    next(e);
  }
});

router.get('/navigation/:id', async (req, res, next) => {
  try {
    const service = new Neo4jService(req.neo4jDriver);
    const [nodes, relationships] = await Promise.all([
      service.getNodesByNavigation(req),
      service.getRelationshipsByNavigation(req)
    ]);
    res.json({ nodes, relationships });
  } catch (e) {
    next(e);
  }
});

/**
 * @swagger
 * /api/neo4j/node/{id}:
 *   get:
 *     summary: Get node by ID
 *     tags: [Neo4j]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Node found
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/GraphNode'
 *       404:
 *         description: Node not found
 */

router.get('/node/:id', async (req, res, next) => {
  try {
    const service = new Neo4jService(req.neo4jDriver);

    const node = await service.getNodeById(req.params.id);
    if (!node) return res.sendStatus(404);
    res.json(node);
  } catch (e) {
    next(e);
  }
});

/**
 * @swagger
 * /api/neo4j/node:
 *   post:
 *     summary: Create new node
 *     tags: [Neo4j]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *     responses:
 *       200:
 *         description: Node created
 */

router.post('/node', async (req, res, next) => {
  try {

    const service = new Neo4jService(req.neo4jDriver);

    const node = await service.createNode(req.body);
    res.json(node);
  } catch (e) {
    next(e);
  }
});

router.put('/node/:id', async (req, res, next) => {
  try {

    const service = new Neo4jService(req.neo4jDriver);

    const node = await service.updateNode(req.body, req.params.id);
    res.json(node);
  } catch (e) {
    next(e);
  }
});

/**
 * @swagger
 * /api/neo4j/node/{id}:
 *   delete:
 *     summary: Delete node by ID
 *     tags: [Neo4j]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Node deleted
 */

router.delete('/node/:id', async (req, res, next) => {
  try {

    const service = new Neo4jService(req.neo4jDriver);

    await service.deleteNodeById(req.params.id);
    res.json({ message: 'Node deleted successfully.' });
  } catch (e) {
    next(e);
  }
});

/**
 * @swagger
 * /api/neo4j/nodes/positions:
 *   put:
 *     summary: Update multiple node positions
 *     tags: [Neo4j]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: array
 *             items:
 *               type: object
 *     responses:
 *       204:
 *         description: Positions updated
 */

router.put('/nodes/positions', async (req, res, next) => {
  try {
    const service = new Neo4jService(req.neo4jDriver);
    await service.putNodePositions(req.body);
    res.sendStatus(204); // ίδιο semantics με Spring void
  } catch (e) {
    next(e);
  }
});

/**
 * @swagger
 * /api/neo4j/query:
 *   post:
 *     summary: Execute custom Cypher query
 *     tags: [Neo4j]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CypherQuery'
 *     responses:
 *       200:
 *         description: Query result
 *       400:
 *         description: Invalid query
 */
router.post('/query', async (req, res, next) => {
  try {
    const service = new Neo4jService(req.neo4jDriver);
     const { query } = req.body;

    if (!query || typeof query !== 'string') {
      return res.status(400).json({ message: 'Query is required' });
    }
    const result = await service.runQuery(query);
    res.json(result);
  } catch (e) {
    next(e);
  }
});

router.get('/relationships', async (req, res, next) => {
  try {
    const service = new Neo4jService(req.neo4jDriver);
    const relationships = await service.getAllRelationships();
    res.json(relationships);
  } catch (e) {
    next(e);
  }
});

router.get('/relationship/:id', async (req, res, next) => {
  try {
    const service = new Neo4jService(req.neo4jDriver);
    const rel = await service.getRelationshipById(req.params.id);

    if (!rel) return res.sendStatus(404);

    res.json(rel);
  } catch (e) {
    next(e);
  }
});

router.post('/relationship', async (req, res, next) => {
  try {
    const service = new Neo4jService(req.neo4jDriver);
    const rel = await service.createRelationship(req.body);
    res.json(rel);
  } catch (e) {
    next(e);
  }
});

router.put('/relationship/:id', async (req, res, next) => {
  try {
    const service = new Neo4jService(req.neo4jDriver);
    const rel = await service.updateRelationship(req.params.id, req.body);

    if (!rel) return res.sendStatus(404);

    res.json(rel);
  } catch (e) {
    next(e);
  }
});

router.delete('/relationship/:id', async (req, res, next) => {
  try {
    const service = new Neo4jService(req.neo4jDriver);
    await service.deleteRelationshipById(req.params.id);

    res.json({ message: 'Relationship deleted successfully.' });
  } catch (e) {
    next(e);
  }
});

module.exports = router;
