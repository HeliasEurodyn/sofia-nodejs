const express = require('express');
const router = express.Router();
const ScenarioCypherQueriesThisListController = require('../../controllers/list/ScenarioCypherQueriesThisListController');

router.post('/', ScenarioCypherQueriesThisListController.getList);

module.exports  = router;