const express = require('express');
const router = express.Router();
const RelathionshipTypeListController = require('../../controllers/list/RelathionshipTypeListController');

router.post('/', RelathionshipTypeListController.getList);

module.exports  = router;