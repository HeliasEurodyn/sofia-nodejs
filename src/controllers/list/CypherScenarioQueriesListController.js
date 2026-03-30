const asyncHandler = require('../../helpers/asyncHandler');
const CypherScenarioQueriesListService = require('../../services/list/CypherScenarioQueriesListService');

module.exports = {

   getList: asyncHandler(async (req, res) => {
      const results = await CypherScenarioQueriesListService.getList({
         data: req.body,
         ctx: {
            userId: req.user?.id || ''
            }
      });

      res.json(results);
   })

};