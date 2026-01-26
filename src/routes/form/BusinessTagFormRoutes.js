const express = require('express');
const router = express.Router();
const BusinessTagFormController = require('../../controllers/form/BusinessTagFormController');

router.get('/:id', BusinessTagFormController.getById);
router.post('/', BusinessTagFormController.create);
router.put('/', BusinessTagFormController.update);
router.delete('/:id', BusinessTagFormController.remove);

module.exports  = router;