const express = require('express');
const router = express.Router();
const CpesSelectorListController = require('../../controllers/list/CpesSelectorListController');

router.post('/', CpesSelectorListController.getList);

module.exports  = router;