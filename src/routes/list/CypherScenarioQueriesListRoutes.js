const express = require('express');
const router = express.Router();
const CypherScenarioQueriesListController = require('../../controllers/list/CypherScenarioQueriesListController');

router.post('/', CypherScenarioQueriesListController.getList);

module.exports  = router;