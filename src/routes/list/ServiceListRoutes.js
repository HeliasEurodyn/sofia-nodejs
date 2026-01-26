const express = require('express');
const router = express.Router();
const ServiceListController = require('../../controllers/list/ServiceListController');

router.post('/', ServiceListController.getList);

module.exports  = router;