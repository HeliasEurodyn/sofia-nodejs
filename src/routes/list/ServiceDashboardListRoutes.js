const express = require('express');
const router = express.Router();
const ServiceDashboardListController = require('../../controllers/list/ServiceDashboardListController');

router.post('/', ServiceDashboardListController.getList);

module.exports  = router;