const asyncHandler = require('../../helpers/asyncHandler');
const UsersApiListService = require('../../services/list/UsersApiListService');

module.exports = {

   getList: asyncHandler(async (req, res) => {
      const results = await UsersApiListService.getList(req.body);
      res.json(results);
   }),

   getCompanyNameGroupingList: asyncHandler(async (req, res) => {
      const results = await UsersApiListService.getCompanyNameGroupingList(req.body);
      res.json(results);
   })

};