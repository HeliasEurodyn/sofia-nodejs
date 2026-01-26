const asyncHandler = require('../../helpers/asyncHandler');
const CrossPlatformServiceCommentsUserListService = require('../../services/list/CrossPlatformServiceCommentsUserListService');

module.exports = {

   getList: asyncHandler(async (req, res) => {
      const results = await CrossPlatformServiceCommentsUserListService.getList({
         data: req.body,
         ctx: {
            userId: req.user?.id || ''
            }
      });

      res.json(results);
   })

};