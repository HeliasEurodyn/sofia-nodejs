const express = require('express');
const router = express.Router();
const ClustersListController = require('../../controllers/list/ClustersListController');

router.get('/', ClustersListController.getList);

module.exports  = router;