const asyncHandler = require('../../helpers/asyncHandler');
const DataCatalogueCategorySelectorListService = require('../../services/list/DataCatalogueCategorySelectorListService');

module.exports = {

   getList: asyncHandler(async (req, res) => {
      const results = await DataCatalogueCategorySelectorListService.getList(req.body);
      res.json(results);
   })

};