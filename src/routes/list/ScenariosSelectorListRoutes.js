const express = require('express');
const router = express.Router();
const ScenariosSelectorListController = require('../../controllers/list/ScenariosSelectorListController');

router.post('/', ScenariosSelectorListController.getList);

module.exports  = router;