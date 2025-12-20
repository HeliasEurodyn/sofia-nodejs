const asyncHandler = require('../../helpers/asyncHandler');
const MessagesReceivedListService = require('../../services/list/MessagesReceivedListService');

module.exports = {

   getList: asyncHandler(async (req, res) => {
      const results = await MessagesReceivedListService.getList(req.body);
      res.json(results);
   })

};