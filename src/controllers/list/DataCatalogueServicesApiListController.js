const asyncHandler = require('../../helpers/asyncHandler');
const DataCatalogueServicesApiListService = require('../../services/list/DataCatalogueServicesApiListService');

module.exports = {

   getList: asyncHandler(async (req, res) => {
      const results = await DataCatalogueServicesApiListService.getList(req.body);
      res.json(results);
   }),

   getCategoryGroupList: asyncHandler(async (req, res) => {
      const results = await DataCatalogueServicesApiListService.getCategoryGroupList(req.body);
      res.json(results);
   })

};