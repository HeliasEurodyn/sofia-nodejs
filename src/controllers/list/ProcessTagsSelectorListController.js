const asyncHandler = require('../../helpers/asyncHandler');
const ProcessTagsSelectorListService = require('../../services/list/ProcessTagsSelectorListService');

module.exports = {

   getList: asyncHandler(async (req, res) => {
      const results = await ProcessTagsSelectorListService.getList(req.body);
      res.json(results);
   })

};