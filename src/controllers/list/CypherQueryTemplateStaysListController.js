const asyncHandler = require('../../helpers/asyncHandler');
const CypherQueryTemplateStaysListService = require('../../services/list/CypherQueryTemplateStaysListService');

module.exports = {

   getList: asyncHandler(async (req, res) => {
      const results = await CypherQueryTemplateStaysListService.getList({
         data: req.body,
         ctx: {
            userId: req.user?.id || ''
            }
      });

      res.json(results);
   })

};