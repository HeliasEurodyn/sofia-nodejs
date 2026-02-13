const express = require('express');
const Neo4jService = require('../services/neo4jService');
const neo4jContext = require('../middleware/neo4jContext'); // ← MISSING
const { authenticate } = require('../middleware/authenticate');

const router = express.Router();
// const service = new Neo4jService();

router.use(authenticate); 
router.use(neo4jContext);


router.get('/', async (req, res, next) => {
  try {
    const service = new Neo4jService(req.neo4jDriver);
    const [nodes, relationships] = await Promise.all([
      service.getAllNodes(),
      service.getAllRelationships()
    ]);
    res.json({ nodes, relationships });
  } catch (e) {
    next(e);
  }
});

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

router.post('/node', async (req, res, next) => {
  try {

    const service = new Neo4jService(req.neo4jDriver);

    const node = await service.createNode(req.body);
    res.json(node);
  } catch (e) {
    next(e);
  }
});

router.delete('/node/:id', async (req, res, next) => {
  try {

    const service = new Neo4jService(req.neo4jDriver);

    await service.deleteNodeById(req.params.id);
    res.json({ message: 'Node deleted successfully.' });
  } catch (e) {
    next(e);
  }
});

router.put('/nodes/positions', async (req, res, next) => {
  try {
    const service = new Neo4jService(req.neo4jDriver);
    await service.putNodePositions(req.body);
    res.sendStatus(204); // ίδιο semantics με Spring void
  } catch (e) {
    next(e);
  }
});

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

module.exports = router;
