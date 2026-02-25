const asyncHandler = require('../../helpers/asyncHandler');
const CpesListService = require('../../services/list/CpesListService');

module.exports = {

   getList: asyncHandler(async (req, res) => {
      const results = await CpesListService.getList({
         data: req.body,
         ctx: {
            userId: req.user?.id || ''
            }
      });

      res.json(results);
   })

};