const asyncHandler = require('../../helpers/asyncHandler');
const CrossPlatformServiceCommentsUserListService = require('../../services/list/CrossPlatformServiceCommentsUserListService');

module.exports = {

   getList: asyncHandler(async (req, res) => {
      const results = await CrossPlatformServiceCommentsUserListService.getList(req.body);
      res.json(results);
   })

};