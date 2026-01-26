const express = require('express');
const router = express.Router();
const IncomingRequestFormController = require('../../controllers/form/IncomingRequestFormController');

router.get('/:id', IncomingRequestFormController.getById);
router.post('/', IncomingRequestFormController.create);
router.put('/', IncomingRequestFormController.update);
router.delete('/:id', IncomingRequestFormController.remove);

module.exports  = router;