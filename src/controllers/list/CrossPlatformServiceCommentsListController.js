const asyncHandler = require('../../helpers/asyncHandler');
const CrossPlatformServiceCommentsListService = require('../../services/list/CrossPlatformServiceCommentsListService');

module.exports = {

   getList: asyncHandler(async (req, res) => {
      const results = await CrossPlatformServiceCommentsListService.getList({
         data: req.body,
         ctx: {
            userId: req.user?.id || ''
            }
      });

      res.json(results);
   })

};