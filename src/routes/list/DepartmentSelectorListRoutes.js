const express = require('express');
const router = express.Router();
const DepartmentSelectorListController = require('../../controllers/list/DepartmentSelectorListController');

router.post('/', DepartmentSelectorListController.getList);

module.exports  = router;