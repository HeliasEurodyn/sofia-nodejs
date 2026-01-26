const express = require('express');
const router = express.Router();
const OfferedServiceFormController = require('../../controllers/form/OfferedServiceFormController');

router.get('/:id', OfferedServiceFormController.getById);
router.post('/', OfferedServiceFormController.create);
router.put('/', OfferedServiceFormController.update);
router.delete('/:id', OfferedServiceFormController.remove);

module.exports  = router;