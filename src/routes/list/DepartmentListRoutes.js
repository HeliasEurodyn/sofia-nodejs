const express = require('express');
const router = express.Router();
const DepartmentListController = require('../../controllers/list/DepartmentListController');

router.post('/', DepartmentListController.getList);

module.exports  = router;