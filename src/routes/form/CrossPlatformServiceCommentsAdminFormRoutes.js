const express = require('express');
const router = express.Router();
const CrossPlatformServiceCommentsAdminFormController = require('../../controllers/form/CrossPlatformServiceCommentsAdminFormController');

router.get('/:id', CrossPlatformServiceCommentsAdminFormController.getById);
router.post('/', CrossPlatformServiceCommentsAdminFormController.create);
router.put('/', CrossPlatformServiceCommentsAdminFormController.update);
router.delete('/:id', CrossPlatformServiceCommentsAdminFormController.remove);

module.exports  = router;