const express = require('express');
const router = express.Router();
const IncomingRequestsListController = require('../../controllers/list/IncomingRequestsListController');

router.post('/', IncomingRequestsListController.getList);

module.exports  = router;