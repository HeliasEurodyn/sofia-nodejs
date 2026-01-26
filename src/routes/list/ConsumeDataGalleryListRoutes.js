const express = require('express');
const router = express.Router();
const ConsumeDataGalleryListController = require('../../controllers/list/ConsumeDataGalleryListController');

router.post('/', ConsumeDataGalleryListController.getList);
router.get('/lg_provider/', ConsumeDataGalleryListController.getLgProviderList);
router.get('/gf_service_offering_title/', ConsumeDataGalleryListController.getGfServiceOfferingTitleList);
router.get('/gf_type_html/', ConsumeDataGalleryListController.getGfTypeHtmlList);

module.exports  = router;