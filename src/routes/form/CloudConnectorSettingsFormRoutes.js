const express = require('express');
const router = express.Router();
const CloudConnectorSettingsFormController = require('../../controllers/form/CloudConnectorSettingsFormController');

router.get('/:id', CloudConnectorSettingsFormController.getById);
router.post('/', CloudConnectorSettingsFormController.create);
router.put('/', CloudConnectorSettingsFormController.update);
router.delete('/:id', CloudConnectorSettingsFormController.remove);

module.exports  = router;