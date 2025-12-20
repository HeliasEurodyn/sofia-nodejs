const express = require('express');
const router = express.Router();
const CloudConnectorSettingsSelectorListController = require('../../controllers/list/CloudConnectorSettingsSelectorListController');

router.get('/', CloudConnectorSettingsSelectorListController.getList);

module.exports  = router;