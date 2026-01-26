const express = require('express');
const router = express.Router();
const MySubscriptionFormController = require('../../controllers/form/MySubscriptionFormController');

router.get('/:id', MySubscriptionFormController.getById);
router.post('/', MySubscriptionFormController.create);
router.put('/', MySubscriptionFormController.update);
router.delete('/:id', MySubscriptionFormController.remove);

module.exports  = router;