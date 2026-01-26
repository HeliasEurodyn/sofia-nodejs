const express = require('express');
const router = express.Router();
const DataCatalogueServiceFormController = require('../../controllers/form/DataCatalogueServiceFormController');

router.get('/:id', DataCatalogueServiceFormController.getById);
router.post('/', DataCatalogueServiceFormController.create);
router.put('/', DataCatalogueServiceFormController.update);
router.delete('/:id', DataCatalogueServiceFormController.remove);

module.exports  = router;