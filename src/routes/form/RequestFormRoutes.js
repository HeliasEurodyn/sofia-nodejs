const express = require('express');
const router = express.Router();
const RequestFormController = require('../../controllers/form/RequestFormController');

router.get('/:id', RequestFormController.getById);
router.post('/', RequestFormController.create);
router.put('/', RequestFormController.update);
router.delete('/:id', RequestFormController.remove);

module.exports  = router;