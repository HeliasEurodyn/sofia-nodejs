const asyncHandler = require('../../helpers/asyncHandler');
const GraphTemplateSelectorListService = require('../../services/list/GraphTemplateSelectorListService');

module.exports = {

   getList: asyncHandler(async (req, res) => {
      const results = await GraphTemplateSelectorListService.getList({
         data: req.body,
         ctx: {
            userId: req.user?.id || ''
            }
      });

      res.json(results);
   })

};