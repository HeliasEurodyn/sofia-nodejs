const express = require('express');
const router = express.Router();
const DataCatalogueCategoryFormController = require('../../controllers/form/DataCatalogueCategoryFormController');

router.get('/:id', DataCatalogueCategoryFormController.getById);
router.post('/', DataCatalogueCategoryFormController.create);
router.put('/', DataCatalogueCategoryFormController.update);
router.delete('/:id', DataCatalogueCategoryFormController.remove);

module.exports  = router;