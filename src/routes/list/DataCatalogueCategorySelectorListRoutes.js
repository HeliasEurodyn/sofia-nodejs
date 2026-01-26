const express = require('express');
const router = express.Router();
const DataCatalogueCategorySelectorListController = require('../../controllers/list/DataCatalogueCategorySelectorListController');

router.post('/', DataCatalogueCategorySelectorListController.getList);

module.exports  = router;