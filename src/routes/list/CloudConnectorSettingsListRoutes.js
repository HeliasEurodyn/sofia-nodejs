const express = require('express');
const router = express.Router();
const CloudConnectorSettingsListController = require('../../controllers/list/CloudConnectorSettingsListController');

router.post('/', CloudConnectorSettingsListController.getList);

module.exports  = router;