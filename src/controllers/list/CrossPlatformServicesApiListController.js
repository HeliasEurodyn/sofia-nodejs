const asyncHandler = require('../../helpers/asyncHandler');
const CrossPlatformServicesApiListService = require('../../services/list/CrossPlatformServicesApiListService');

module.exports = {

   getList: asyncHandler(async (req, res) => {
      const results = await CrossPlatformServicesApiListService.getList({
         data: req.body,
         ctx: {
            userId: req.user?.id || ''
            }
      });

      res.json(results);
   }),

   getCategoryGroupList: asyncHandler(async (req, res) => {
      const results = await CrossPlatformServicesApiListService.getCategoryGroupList({
         data: req.body,
         ctx: {
            userId: req.user?.id || ''
            }
      });

      res.json(results);
   }),

   getServiceGroupList: asyncHandler(async (req, res) => {
      const results = await CrossPlatformServicesApiListService.getServiceGroupList({
         data: req.body,
         ctx: {
            userId: req.user?.id || ''
            }
      });

      res.json(results);
   })

};