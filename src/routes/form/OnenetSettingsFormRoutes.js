const express = require('express');
const router = express.Router();
const OnenetSettingsFormController = require('../../controllers/form/OnenetSettingsFormController');

router.get('/:id', OnenetSettingsFormController.getById);
router.post('/', OnenetSettingsFormController.create);
router.put('/', OnenetSettingsFormController.update);
router.delete('/:id', OnenetSettingsFormController.remove);

module.exports  = router;