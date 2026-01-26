const asyncHandler = require('../../helpers/asyncHandler');
const UsersSysadminListService = require('../../services/list/UsersSysadminListService');

module.exports = {

   getList: asyncHandler(async (req, res) => {
      const results = await UsersSysadminListService.getList({
         data: req.body,
         ctx: {
            userId: req.user?.id || ''
            }
      });

      res.json(results);
   }),

   getGfNameList: asyncHandler(async (req, res) => {
      const results = await UsersSysadminListService.getGfNameList({
         data: req.body,
         ctx: {
            userId: req.user?.id || ''
            }
      });

      res.json(results);
   })

};