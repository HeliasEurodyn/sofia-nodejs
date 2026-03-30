const express = require('express');
const scenarioController = require('../controllers/scenarioController');
const { authenticate } = require('../middleware/authenticate');
const neo4jContext = require('../middleware/neo4jContext');

const router = express.Router();

router.post('/resolve', scenarioController.resolve);
router.post('/:id/execute', authenticate, neo4jContext, scenarioController.execute);

module.exports = router;
