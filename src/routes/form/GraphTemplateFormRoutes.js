const express = require('express');
const router = express.Router();
const GraphTemplateFormController = require('../../controllers/form/GraphTemplateFormController');

router.get('/:id', GraphTemplateFormController.getById);
router.post('/', GraphTemplateFormController.create);
router.put('/', GraphTemplateFormController.update);
router.delete('/:id', GraphTemplateFormController.remove);

module.exports  = router;