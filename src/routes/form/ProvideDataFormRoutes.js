const express = require('express');
const router = express.Router();
const ProvideDataFormController = require('../../controllers/form/ProvideDataFormController');

router.get('/:id', ProvideDataFormController.getById);
router.post('/', ProvideDataFormController.create);
router.put('/', ProvideDataFormController.update);
router.delete('/:id', ProvideDataFormController.remove);

module.exports  = router;