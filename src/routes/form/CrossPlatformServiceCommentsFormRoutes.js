const express = require('express');
const router = express.Router();
const CrossPlatformServiceCommentsFormController = require('../../controllers/form/CrossPlatformServiceCommentsFormController');

router.get('/:id', CrossPlatformServiceCommentsFormController.getById);
router.post('/', CrossPlatformServiceCommentsFormController.create);
router.put('/', CrossPlatformServiceCommentsFormController.update);
router.delete('/:id', CrossPlatformServiceCommentsFormController.remove);

module.exports  = router;