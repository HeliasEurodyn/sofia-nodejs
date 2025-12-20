const express = require('express');
const router = express.Router();
const ServiceDashboardListController = require('../../controllers/list/ServiceDashboardListController');

router.get('/', ServiceDashboardListController.getList);

module.exports  = router;