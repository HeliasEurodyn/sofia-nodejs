const express = require('express');
const router = express.Router();
const OnenetRolesListController = require('../../controllers/list/OnenetRolesListController');

router.get('/', OnenetRolesListController.getList);

module.exports  = router;