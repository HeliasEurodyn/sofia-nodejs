const express = require('express');
const router = express.Router();
const Sample1FormController = require('../../controllers/form/Sample1FormController');

router.get('/:id', Sample1FormController.getById);
router.post('/', Sample1FormController.create);
router.put('/', Sample1FormController.update);
router.delete('/:id', Sample1FormController.remove);

module.exports  = router;