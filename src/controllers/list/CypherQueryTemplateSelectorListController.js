const asyncHandler = require('../../helpers/asyncHandler');
const CypherQueryTemplateSelectorListService = require('../../services/list/CypherQueryTemplateSelectorListService');

module.exports = {

   getList: asyncHandler(async (req, res) => {
      const results = await CypherQueryTemplateSelectorListService.getList({
         data: req.body,
         ctx: {
            userId: req.user?.id || ''
            }
      });

      res.json(results);
   })

};