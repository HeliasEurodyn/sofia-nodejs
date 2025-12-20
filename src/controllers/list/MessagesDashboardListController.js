const asyncHandler = require('../../helpers/asyncHandler');
const MessagesDashboardListService = require('../../services/list/MessagesDashboardListService');

module.exports = {

   getList: asyncHandler(async (req, res) => {
      const results = await MessagesDashboardListService.getList(req.body);
      res.json(results);
   })

};