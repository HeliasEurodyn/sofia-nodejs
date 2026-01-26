const express = require('express');
const router = express.Router();
const ClusterFormController = require('../../controllers/form/ClusterFormController');

router.get('/:id', ClusterFormController.getById);
router.post('/', ClusterFormController.create);
router.put('/', ClusterFormController.update);
router.delete('/:id', ClusterFormController.remove);

module.exports  = router;