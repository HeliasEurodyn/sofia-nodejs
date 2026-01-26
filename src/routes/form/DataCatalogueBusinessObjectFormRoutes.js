const express = require('express');
const router = express.Router();
const DataCatalogueBusinessObjectFormController = require('../../controllers/form/DataCatalogueBusinessObjectFormController');

router.get('/:id', DataCatalogueBusinessObjectFormController.getById);
router.post('/', DataCatalogueBusinessObjectFormController.create);
router.put('/', DataCatalogueBusinessObjectFormController.update);
router.delete('/:id', DataCatalogueBusinessObjectFormController.remove);

module.exports  = router;