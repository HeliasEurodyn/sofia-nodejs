const asyncHandler = require('../../helpers/asyncHandler');
const DataCatalogueServicesApiListService = require('../../services/list/DataCatalogueServicesApiListService');

module.exports = {

   getList: asyncHandler(async (req, res) => {
      const results = await DataCatalogueServicesApiListService.getList({
         data: req.body,
         ctx: {
            userId: req.user?.id || ''
            }
      });

      res.json(results);
   }),

   getCategoryGroupList: asyncHandler(async (req, res) => {
      const results = await DataCatalogueServicesApiListService.getCategoryGroupList({
         data: req.body,
         ctx: {
            userId: req.user?.id || ''
            }
      });

      res.json(results);
   })

};