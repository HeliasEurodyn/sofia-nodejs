const express = require('express');
const router = express.Router();
const ConnectorSettingsFormController = require('../../controllers/form/ConnectorSettingsFormController');

router.get('/:id', ConnectorSettingsFormController.getById);
router.post('/', ConnectorSettingsFormController.create);
router.put('/', ConnectorSettingsFormController.update);
router.delete('/:id', ConnectorSettingsFormController.remove);
router.get('/cloud_connector_settings/:id', ConnectorSettingsFormController.getcloud_connector_settingsById);

module.exports  = router;