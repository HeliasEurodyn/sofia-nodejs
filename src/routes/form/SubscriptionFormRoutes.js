const express = require('express');
const router = express.Router();
const SubscriptionFormController = require('../../controllers/form/SubscriptionFormController');

router.get('/:id', SubscriptionFormController.getById);
router.post('/', SubscriptionFormController.create);
router.put('/', SubscriptionFormController.update);
router.delete('/:id', SubscriptionFormController.remove);
router.get('/offering_app_view/:id', SubscriptionFormController.getoffering_app_viewById);

module.exports  = router;