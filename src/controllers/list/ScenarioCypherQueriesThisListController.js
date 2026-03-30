const asyncHandler = require('../../helpers/asyncHandler');
const ScenarioCypherQueriesThisListService = require('../../services/list/ScenarioCypherQueriesThisListService');

module.exports = {

   getList: asyncHandler(async (req, res) => {
      const results = await ScenarioCypherQueriesThisListService.getList({
         data: req.body,
         ctx: {
            userId: req.user?.id || ''
            }
      });

      res.json(results);
   })

};