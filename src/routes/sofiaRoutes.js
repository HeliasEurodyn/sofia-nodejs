const express = require('express');
const router = express.Router();
const sofiaController = require('../controllers/sofiaController');

router.get('/', sofiaController.getAll);
router.get('/:id', sofiaController.getOne);
router.post('/', sofiaController.create);
router.put('/:id', sofiaController.update);
router.delete('/:id', sofiaController.remove);

module.exports = router;