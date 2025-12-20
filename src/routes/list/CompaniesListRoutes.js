const express = require('express');
const router = express.Router();
const CompaniesListController = require('../../controllers/list/CompaniesListController');

router.get('/', CompaniesListController.getList);

module.exports  = router;