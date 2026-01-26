const express = require('express');
const router = express.Router();
const MarketFormController = require('../../controllers/form/MarketFormController');

router.get('/:id', MarketFormController.getById);
router.post('/', MarketFormController.create);
router.put('/', MarketFormController.update);
router.delete('/:id', MarketFormController.remove);

module.exports  = router;