const express = require('express');
const router = express.Router();
const UsersSysadminListController = require('../../controllers/list/UsersSysadminListController');

router.get('/', UsersSysadminListController.getList);
router.get('/gf_name/', UsersSysadminListController.getGfNameList);

module.exports  = router;