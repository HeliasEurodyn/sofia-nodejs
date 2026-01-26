const asyncHandler = require('../../helpers/asyncHandler');
const MyOfferingsListService = require('../../services/list/MyOfferingsListService');

module.exports = {

   getList: asyncHandler(async (req, res) => {
      const results = await MyOfferingsListService.getList({
         data: req.body,
         ctx: {
            userId: req.user?.id || ''
            }
      });

      res.json(results);
   })

};