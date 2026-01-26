const express = require('express');
const router = express.Router();
const UsersSysadminListController = require('../../controllers/list/UsersSysadminListController');

router.post('/', UsersSysadminListController.getList);
router.get('/gf_name/', UsersSysadminListController.getGfNameList);

module.exports  = router;