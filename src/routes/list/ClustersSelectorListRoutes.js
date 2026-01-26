const express = require('express');
const router = express.Router();
const ClustersSelectorListController = require('../../controllers/list/ClustersSelectorListController');

router.post('/', ClustersSelectorListController.getList);

module.exports  = router;