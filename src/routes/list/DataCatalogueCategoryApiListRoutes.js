const express = require('express');
const router = express.Router();
const DataCatalogueCategoryApiListController = require('../../controllers/list/DataCatalogueCategoryApiListController');

router.get('/', DataCatalogueCategoryApiListController.getList);

module.exports  = router;