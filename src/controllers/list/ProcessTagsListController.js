const asyncHandler = require('../../helpers/asyncHandler');
const ProcessTagsListService = require('../../services/list/ProcessTagsListService');

module.exports = {

   getList: asyncHandler(async (req, res) => {
      const results = await ProcessTagsListService.getList(req.body);
      res.json(results);
   })

};