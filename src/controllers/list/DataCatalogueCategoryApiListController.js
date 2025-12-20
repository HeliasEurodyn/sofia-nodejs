const asyncHandler = require('../../helpers/asyncHandler');
const DataCatalogueCategoryApiListService = require('../../services/list/DataCatalogueCategoryApiListService');

module.exports = {

   getList: asyncHandler(async (req, res) => {
      const results = await DataCatalogueCategoryApiListService.getList(req.body);
      res.json(results);
   })

};