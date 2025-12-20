const asyncHandler = require('../../helpers/asyncHandler');
const BusinessTagsListService = require('../../services/list/BusinessTagsListService');

module.exports = {

   getList: asyncHandler(async (req, res) => {
      const results = await BusinessTagsListService.getList(req.body);
      res.json(results);
   })

};