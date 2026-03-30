const express = require('express');
const router = express.Router();
const CpeFormController = require('../../controllers/form/CpeFormController');

router.get('/:id', CpeFormController.getById);
router.post('/', CpeFormController.create);
router.put('/', CpeFormController.update);
router.delete('/:id', CpeFormController.remove);

module.exports  = router;