const express = require('express');
const router = express.Router();
const MessagesFormController = require('../../controllers/form/MessagesFormController');

router.get('/:id', MessagesFormController.getById);
router.post('/', MessagesFormController.create);
router.put('/', MessagesFormController.update);
router.delete('/:id', MessagesFormController.remove);

module.exports  = router;