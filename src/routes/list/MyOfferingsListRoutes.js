const express = require('express');
const router = express.Router();
const MyOfferingsListController = require('../../controllers/list/MyOfferingsListController');

router.post('/', MyOfferingsListController.getList);

module.exports  = router;