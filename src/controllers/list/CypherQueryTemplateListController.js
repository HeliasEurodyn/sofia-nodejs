const asyncHandler = require('../../helpers/asyncHandler');
const CypherQueryTemplateListService = require('../../services/list/CypherQueryTemplateListService');

module.exports = {

   getList: asyncHandler(async (req, res) => {
      const results = await CypherQueryTemplateListService.getList({
         data: req.body,
         ctx: {
            userId: req.user?.id || ''
            }
      });

      res.json(results);
   })

};