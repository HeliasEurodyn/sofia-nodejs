const asyncHandler = require('../../helpers/asyncHandler');
const WizardsListService = require('../../services/list/WizardsListService');

module.exports = {

   getList: asyncHandler(async (req, res) => {
      const results = await WizardsListService.getList({
         data: req.body,
         ctx: {
            userId: req.user?.id || ''
            }
      });

      res.json(results);
   })

};