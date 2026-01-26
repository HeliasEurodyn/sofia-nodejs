const express = require('express');
const router = express.Router();
const OnenetRolesSelectorListController = require('../../controllers/list/OnenetRolesSelectorListController');

router.post('/', OnenetRolesSelectorListController.getList);

module.exports  = router;