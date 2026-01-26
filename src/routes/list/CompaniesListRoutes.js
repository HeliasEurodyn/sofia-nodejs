const express = require('express');
const router = express.Router();
const CompaniesListController = require('../../controllers/list/CompaniesListController');

router.post('/', CompaniesListController.getList);

module.exports  = router;