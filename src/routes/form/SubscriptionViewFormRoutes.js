const express = require('express');
const router = express.Router();
const SubscriptionViewFormController = require('../../controllers/form/SubscriptionViewFormController');

router.get('/:id', SubscriptionViewFormController.getById);
router.post('/', SubscriptionViewFormController.create);
router.put('/', SubscriptionViewFormController.update);
router.delete('/:id', SubscriptionViewFormController.remove);
router.get('/offering_app_view/:id', SubscriptionViewFormController.getoffering_app_viewById);

module.exports  = router;