const asyncHandler = require('../../helpers/asyncHandler');
const MarketsListService = require('../../services/list/MarketsListService');

module.exports = {

   getList: asyncHandler(async (req, res) => {
      const results = await MarketsListService.getList(req.body);
      res.json(results);
   })

};