const express = require('express');
const router = express.Router();
const UsersApiListController = require('../../controllers/list/UsersApiListController');

router.post('/', UsersApiListController.getList);
router.get('/company_name_grouping/', UsersApiListController.getCompanyNameGroupingList);

module.exports  = router;