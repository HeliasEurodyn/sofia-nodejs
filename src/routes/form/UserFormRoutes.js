const express = require('express');
const router = express.Router();
const UserFormController = require('../../controllers/form/UserFormController');

router.get('/:id', UserFormController.getById);
router.post('/', UserFormController.create);
router.put('/', UserFormController.update);
router.delete('/:id', UserFormController.remove);
router.get('/onenet_role/:id', UserFormController.getonenet_roleById);
router.get('/country/:id', UserFormController.getcountryById);

module.exports  = router;