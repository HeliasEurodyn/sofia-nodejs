const asyncHandler = require('../../helpers/asyncHandler');
const UsersSelectorListService = require('../../services/list/UsersSelectorListService');

module.exports = {

   getList: asyncHandler(async (req, res) => {
      const results = await UsersSelectorListService.getList({
         data: req.body,
         ctx: {
            userId: req.user?.id || ''
            }
      });

      res.json(results);
   }),

   getGfNameList: asyncHandler(async (req, res) => {
      const results = await UsersSelectorListService.getGfNameList({
         data: req.body,
         ctx: {
            userId: req.user?.id || ''
            }
      });

      res.json(results);
   })

};