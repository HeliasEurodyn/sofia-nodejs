const express = require('express');
const router = express.Router();
const UsersListController = require('../../controllers/list/UsersListController');

router.get('/', UsersListController.getList);

module.exports  = router;