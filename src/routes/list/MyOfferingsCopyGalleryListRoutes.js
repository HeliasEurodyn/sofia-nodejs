const express = require('express');
const router = express.Router();
const MyOfferingsCopyGalleryListController = require('../../controllers/list/MyOfferingsCopyGalleryListController');

router.post('/', MyOfferingsCopyGalleryListController.getList);
router.get('/sqlgf_1/', MyOfferingsCopyGalleryListController.getSqlgf1List);
router.get('/sqlgf_2/', MyOfferingsCopyGalleryListController.getSqlgf2List);
router.get('/gf_title/', MyOfferingsCopyGalleryListController.getGfTitleList);

module.exports  = router;