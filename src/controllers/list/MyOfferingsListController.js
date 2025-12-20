const asyncHandler = require('../../helpers/asyncHandler');
const MyOfferingsListService = require('../../services/list/MyOfferingsListService');

module.exports = {

   getList: asyncHandler(async (req, res) => {
      const results = await MyOfferingsListService.getList(req.body);
      res.json(results);
   })

};