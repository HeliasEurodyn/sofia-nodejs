const express = require('express');
const router = express.Router();
const ProvideDataApiFormController = require('../../controllers/form/ProvideDataApiFormController');

router.get('/:id', ProvideDataApiFormController.getById);
router.post('/', ProvideDataApiFormController.create);
router.put('/', ProvideDataApiFormController.update);
router.delete('/:id', ProvideDataApiFormController.remove);

module.exports  = router;