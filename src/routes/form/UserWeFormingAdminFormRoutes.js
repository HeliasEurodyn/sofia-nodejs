const express = require('express');
const router = express.Router();
const UserWeFormingAdminFormController = require('../../controllers/form/UserWeFormingAdminFormController');

router.get('/:id', UserWeFormingAdminFormController.getById);
router.post('/', UserWeFormingAdminFormController.create);
router.put('/', UserWeFormingAdminFormController.update);
router.delete('/:id', UserWeFormingAdminFormController.remove);
router.get('/country/:id', UserWeFormingAdminFormController.getcountryById);
router.get('/cloud_connector_settings/:id', UserWeFormingAdminFormController.getcloud_connector_settingsById);

module.exports  = router;