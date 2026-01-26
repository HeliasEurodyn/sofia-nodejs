const express = require('express');
const router = express.Router();
const DataCatalogueServicesSelectorListController = require('../../controllers/list/DataCatalogueServicesSelectorListController');

router.post('/', DataCatalogueServicesSelectorListController.getList);
router.get('/sqlgf_1/', DataCatalogueServicesSelectorListController.getSqlgf1List);

module.exports  = router;