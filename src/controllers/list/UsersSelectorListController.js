const asyncHandler = require('../../helpers/asyncHandler');
const UsersSelectorListService = require('../../services/list/UsersSelectorListService');

module.exports = {

   getList: asyncHandler(async (req, res) => {
      const results = await UsersSelectorListService.getList(req.body);
      res.json(results);
   }),

   getGfNameList: asyncHandler(async (req, res) => {
      const results = await UsersSelectorListService.getGfNameList(req.body);
      res.json(results);
   })

};