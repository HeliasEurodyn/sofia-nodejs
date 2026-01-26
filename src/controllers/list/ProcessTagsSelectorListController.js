const asyncHandler = require('../../helpers/asyncHandler');
const ProcessTagsSelectorListService = require('../../services/list/ProcessTagsSelectorListService');

module.exports = {

   getList: asyncHandler(async (req, res) => {
      const results = await ProcessTagsSelectorListService.getList({
         data: req.body,
         ctx: {
            userId: req.user?.id || ''
            }
      });

      res.json(results);
   })

};