const express = require('express');
const router = express.Router();
const ScenarioCypherQueriesListController = require('../../controllers/list/ScenarioCypherQueriesListController');

router.post('/', ScenarioCypherQueriesListController.getList);

module.exports  = router;