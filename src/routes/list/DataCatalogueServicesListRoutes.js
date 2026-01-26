const express = require('express');
const router = express.Router();
const DataCatalogueServicesListController = require('../../controllers/list/DataCatalogueServicesListController');

router.post('/', DataCatalogueServicesListController.getList);
router.get('/sqlgf_1/', DataCatalogueServicesListController.getSqlgf1List);

module.exports  = router;