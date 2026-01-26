const express = require('express');
const router = express.Router();
const UserWeFormingFormController = require('../../controllers/form/UserWeFormingFormController');

router.get('/:id', UserWeFormingFormController.getById);
router.post('/', UserWeFormingFormController.create);
router.put('/', UserWeFormingFormController.update);
router.delete('/:id', UserWeFormingFormController.remove);
router.get('/country/:id', UserWeFormingFormController.getcountryById);

module.exports  = router;