const express = require('express');
const router = express.Router();
const ServiceListController = require('../../controllers/list/ServiceListController');

router.get('/', ServiceListController.getList);

module.exports  = router;