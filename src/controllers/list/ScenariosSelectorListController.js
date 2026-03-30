const asyncHandler = require('../../helpers/asyncHandler');
const ScenariosSelectorListService = require('../../services/list/ScenariosSelectorListService');

module.exports = {

   getList: asyncHandler(async (req, res) => {
      const results = await ScenariosSelectorListService.getList({
         data: req.body,
         ctx: {
            userId: req.user?.id || ''
            }
      });

      res.json(results);
   })

};