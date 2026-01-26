const express = require('express');
const router = express.Router();
const ServiceSelectorListController = require('../../controllers/list/ServiceSelectorListController');

router.post('/', ServiceSelectorListController.getList);

module.exports  = router;