const asyncHandler = require('../../helpers/asyncHandler');
const MessagesReceivedListService = require('../../services/list/MessagesReceivedListService');

module.exports = {

   getList: asyncHandler(async (req, res) => {
      const results = await MessagesReceivedListService.getList({
         data: req.body,
         ctx: {
            userId: req.user?.id || ''
            }
      });

      res.json(results);
   })

};