const asyncHandler = require('../../helpers/asyncHandler');
const GraphTemplateListService = require('../../services/list/GraphTemplateListService');

module.exports = {

   getList: asyncHandler(async (req, res) => {
      const results = await GraphTemplateListService.getList({
         data: req.body,
         ctx: {
            userId: req.user?.id || ''
            }
      });

      res.json(results);
   })

};