const express = require('express');
const router = express.Router();
const MessagesReceivedFormController = require('../../controllers/form/MessagesReceivedFormController');

router.get('/:id', MessagesReceivedFormController.getById);
router.post('/', MessagesReceivedFormController.create);
router.put('/', MessagesReceivedFormController.update);
router.delete('/:id', MessagesReceivedFormController.remove);

module.exports  = router;