const asyncHandler = require('../../helpers/asyncHandler');
const ScenarioCypherQueriesListService = require('../../services/list/ScenarioCypherQueriesListService');

module.exports = {

   getList: asyncHandler(async (req, res) => {
      const results = await ScenarioCypherQueriesListService.getList({
         data: req.body,
         ctx: {
            userId: req.user?.id || ''
            }
      });

      res.json(results);
   })

};