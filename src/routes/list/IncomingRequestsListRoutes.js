const express = require('express');
const router = express.Router();
const IncomingRequestsListController = require('../../controllers/list/IncomingRequestsListController');

router.get('/', IncomingRequestsListController.getList);

module.exports  = router;