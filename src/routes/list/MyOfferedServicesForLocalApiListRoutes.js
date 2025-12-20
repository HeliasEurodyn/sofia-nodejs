const express = require('express');
const router = express.Router();
const MyOfferedServicesForLocalApiListController = require('../../controllers/list/MyOfferedServicesForLocalApiListController');

router.get('/', MyOfferedServicesForLocalApiListController.getList);

module.exports  = router;