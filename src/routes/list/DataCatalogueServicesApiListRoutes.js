const express = require('express');
const router = express.Router();
const DataCatalogueServicesApiListController = require('../../controllers/list/DataCatalogueServicesApiListController');

router.post('/', DataCatalogueServicesApiListController.getList);
router.get('/category_group/', DataCatalogueServicesApiListController.getCategoryGroupList);

module.exports  = router;