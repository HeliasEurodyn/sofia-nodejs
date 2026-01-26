const express = require('express');
const router = express.Router();
const MessageReceivedDashboardListController = require('../../controllers/list/MessageReceivedDashboardListController');

router.post('/', MessageReceivedDashboardListController.getList);

module.exports  = router;