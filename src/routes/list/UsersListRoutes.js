const express = require('express');
const router = express.Router();
const UsersListController = require('../../controllers/list/UsersListController');

router.post('/', UsersListController.getList);

module.exports  = router;