const express = require('express');
const router = express.Router();
const CloudConnectorSettingsListController = require('../../controllers/list/CloudConnectorSettingsListController');

router.get('/', CloudConnectorSettingsListController.getList);

module.exports  = router;