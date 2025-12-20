const express = require('express');
const router = express.Router();
const MySubscriptionsGalleryListController = require('../../controllers/list/MySubscriptionsGalleryListController');

router.get('/', MySubscriptionsGalleryListController.getList);

module.exports  = router;