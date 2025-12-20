const asyncHandler = require('../../helpers/asyncHandler');
const BusinessTagSelectorListService = require('../../services/list/BusinessTagSelectorListService');

module.exports = {

   getList: asyncHandler(async (req, res) => {
      const results = await BusinessTagSelectorListService.getList(req.body);
      res.json(results);
   })

};