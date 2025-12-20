const asyncHandler = require('../../helpers/asyncHandler');
const MySubscriptionsGalleryListService = require('../../services/list/MySubscriptionsGalleryListService');

module.exports = {

   getList: asyncHandler(async (req, res) => {
      const results = await MySubscriptionsGalleryListService.getList(req.body);
      res.json(results);
   })

};