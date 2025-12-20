const express = require('express');
const router = express.Router();
const MessagesDashboardListController = require('../../controllers/list/MessagesDashboardListController');

router.get('/', MessagesDashboardListController.getList);

module.exports  = router;