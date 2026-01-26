const asyncHandler = require('../../helpers/asyncHandler');
const MessageReceivedDashboardListService = require('../../services/list/MessageReceivedDashboardListService');

module.exports = {

   getList: asyncHandler(async (req, res) => {
      const results = await MessageReceivedDashboardListService.getList({
         data: req.body,
         ctx: {
            userId: req.user?.id || ''
            }
      });

      res.json(results);
   })

};