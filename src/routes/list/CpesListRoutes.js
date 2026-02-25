const express = require('express');
const router = express.Router();
const CpesListController = require('../../controllers/list/CpesListController');

router.post('/', CpesListController.getList);

module.exports  = router;