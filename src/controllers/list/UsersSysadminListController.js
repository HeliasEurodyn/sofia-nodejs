const asyncHandler = require('../../helpers/asyncHandler');
const UsersSysadminListService = require('../../services/list/UsersSysadminListService');

module.exports = {

   getList: asyncHandler(async (req, res) => {
      const results = await UsersSysadminListService.getList(req.body);
      res.json(results);
   }),

   getGfNameList: asyncHandler(async (req, res) => {
      const results = await UsersSysadminListService.getGfNameList(req.body);
      res.json(results);
   })

};