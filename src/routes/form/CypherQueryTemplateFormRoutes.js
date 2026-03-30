const express = require('express');
const router = express.Router();
const CypherQueryTemplateFormController = require('../../controllers/form/CypherQueryTemplateFormController');

router.get('/:id', CypherQueryTemplateFormController.getById);
router.post('/', CypherQueryTemplateFormController.create);
router.put('/', CypherQueryTemplateFormController.update);
router.delete('/:id', CypherQueryTemplateFormController.remove);

module.exports  = router;