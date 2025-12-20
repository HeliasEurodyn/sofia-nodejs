const express = require('express');
const router = express.Router();
const ServiceCatalogueListController = require('../../controllers/list/ServiceCatalogueListController');

router.get('/', ServiceCatalogueListController.getList);
router.get('/sqlgf_2/', ServiceCatalogueListController.getSqlgf2List);
router.get('/sqlgf_3/', ServiceCatalogueListController.getSqlgf3List);

module.exports  = router;