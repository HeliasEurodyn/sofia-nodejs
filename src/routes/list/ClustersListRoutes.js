const express = require('express');
const router = express.Router();
const ClustersListController = require('../../controllers/list/ClustersListController');

router.post('/', ClustersListController.getList);

module.exports  = router;