const express = require('express');
const router = express.Router();
const ScenariosListController = require('../../controllers/list/ScenariosListController');

router.post('/', ScenariosListController.getList);

module.exports  = router;