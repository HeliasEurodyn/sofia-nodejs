const asyncHandler = require('../../helpers/asyncHandler');
const CategoriesListService = require('../../services/list/CategoriesListService');

module.exports = {

   getList: asyncHandler(async (req, res) => {
      const results = await CategoriesListService.getList(req.body);
      res.json(results);
   })

};