const asyncHandler = require('../../helpers/asyncHandler');
const MarketsSelectorListService = require('../../services/list/MarketsSelectorListService');

module.exports = {

   getList: asyncHandler(async (req, res) => {
      const results = await MarketsSelectorListService.getList({
         data: req.body,
         ctx: {
            userId: req.user?.id || ''
            }
      });

      res.json(results);
   })

};