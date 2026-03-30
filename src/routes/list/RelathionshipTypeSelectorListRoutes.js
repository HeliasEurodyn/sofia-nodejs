const express = require('express');
const router = express.Router();
const RelathionshipTypeSelectorListController = require('../../controllers/list/RelathionshipTypeSelectorListController');

router.post('/', RelathionshipTypeSelectorListController.getList);

module.exports  = router;