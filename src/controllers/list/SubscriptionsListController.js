const asyncHandler = require('../../helpers/asyncHandler');
const SubscriptionsListService = require('../../services/list/SubscriptionsListService');

module.exports = {

   getList: asyncHandler(async (req, res) => {
      const results = await SubscriptionsListService.getList({
         data: req.body,
         ctx: {
            userId: req.user?.id || ''
            }
      });

      res.json(results);
   })

};