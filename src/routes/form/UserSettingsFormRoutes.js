const express = require('express');
const router = express.Router();
const UserSettingsFormController = require('../../controllers/form/UserSettingsFormController');

router.get('/:id', UserSettingsFormController.getById);
/*router.post('/', UserSettingsFormController.create);*/
router.put('/', UserSettingsFormController.update);
/*router.delete('/:id', UserSettingsFormController.remove);*/

module.exports  = router;