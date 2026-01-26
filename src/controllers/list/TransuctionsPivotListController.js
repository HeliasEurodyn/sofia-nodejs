const asyncHandler = require('../../helpers/asyncHandler');
const TransuctionsPivotListService = require('../../services/list/TransuctionsPivotListService');

module.exports = {

   getList: asyncHandler(async (req, res) => {
      const results = await TransuctionsPivotListService.getList({
         data: req.body,
         ctx: {
            userId: req.user?.id || ''
            }
      });

      res.json(results);
   }),

   getGfProviderList: asyncHandler(async (req, res) => {
      const results = await TransuctionsPivotListService.getGfProviderList({
         data: req.body,
         ctx: {
            userId: req.user?.id || ''
            }
      });

      res.json(results);
   }),

   getGfOfferingTitleList: asyncHandler(async (req, res) => {
      const results = await TransuctionsPivotListService.getGfOfferingTitleList({
         data: req.body,
         ctx: {
            userId: req.user?.id || ''
            }
      });

      res.json(results);
   })

};