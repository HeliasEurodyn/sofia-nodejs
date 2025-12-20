const express = require('express');
const router = express.Router();
const FindOfferingsGalleryListController = require('../../controllers/list/FindOfferingsGalleryListController');

router.get('/', FindOfferingsGalleryListController.getList);
router.get('/sqlgf_3/', FindOfferingsGalleryListController.getSqlgf3List);
router.get('/sqlgf_2/', FindOfferingsGalleryListController.getSqlgf2List);
router.get('/gf_title/', FindOfferingsGalleryListController.getGfTitleList);

module.exports  = router;