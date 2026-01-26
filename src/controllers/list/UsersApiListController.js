const asyncHandler = require('../../helpers/asyncHandler');
const UsersApiListService = require('../../services/list/UsersApiListService');

module.exports = {

   getList: asyncHandler(async (req, res) => {
      const results = await UsersApiListService.getList({
         data: req.body,
         ctx: {
            userId: req.user?.id || ''
            }
      });

      res.json(results);
   }),

   getCompanyNameGroupingList: asyncHandler(async (req, res) => {
      const results = await UsersApiListService.getCompanyNameGroupingList({
         data: req.body,
         ctx: {
            userId: req.user?.id || ''
            }
      });

      res.json(results);
   })

};