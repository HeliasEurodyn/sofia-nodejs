const express = require('express');
const router = express.Router();
const ServiceSelectorListController = require('../../controllers/list/ServiceSelectorListController');

router.get('/', ServiceSelectorListController.getList);

module.exports  = router;