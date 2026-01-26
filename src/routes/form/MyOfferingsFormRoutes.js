const express = require('express');
const router = express.Router();
const MyOfferingsFormController = require('../../controllers/form/MyOfferingsFormController');

router.get('/:id', MyOfferingsFormController.getById);
router.post('/', MyOfferingsFormController.create);
router.put('/', MyOfferingsFormController.update);
router.delete('/:id', MyOfferingsFormController.remove);
router.get('/service_app_view/:id', MyOfferingsFormController.getservice_app_viewById);

module.exports  = router;