const asyncHandler = require('../../helpers/asyncHandler');
const CategoriesListService = require('../../services/list/CategoriesListService');

module.exports = {

   getList: asyncHandler(async (req, res) => {
      const results = await CategoriesListService.getList({
         data: req.body,
         ctx: {
            userId: req.user?.id || ''
            }
      });

      res.json(results);
   })

};