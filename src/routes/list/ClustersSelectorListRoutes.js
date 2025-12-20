const express = require('express');
const router = express.Router();
const ClustersSelectorListController = require('../../controllers/list/ClustersSelectorListController');

router.get('/', ClustersSelectorListController.getList);

module.exports  = router;