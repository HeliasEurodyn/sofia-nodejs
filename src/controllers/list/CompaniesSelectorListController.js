const asyncHandler = require('../../helpers/asyncHandler');
const CompaniesSelectorListService = require('../../services/list/CompaniesSelectorListService');

module.exports = {

   getList: asyncHandler(async (req, res) => {
      const results = await CompaniesSelectorListService.getList({
         data: req.body,
         ctx: {
            userId: req.user?.id || ''
            }
      });

      res.json(results);
   })

};