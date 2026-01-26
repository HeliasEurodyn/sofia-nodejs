const asyncHandler = require('../../helpers/asyncHandler');
const MySubscriptionsGalleryListService = require('../../services/list/MySubscriptionsGalleryListService');

module.exports = {

   getList: asyncHandler(async (req, res) => {
      const results = await MySubscriptionsGalleryListService.getList({
         data: req.body,
         ctx: {
            userId: req.user?.id || ''
            }
      });

      res.json(results);
   })

};