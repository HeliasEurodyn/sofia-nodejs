const asyncHandler = require('../../helpers/asyncHandler');
const CpesSelectorListService = require('../../services/list/CpesSelectorListService');

module.exports = {

   getList: asyncHandler(async (req, res) => {
      const results = await CpesSelectorListService.getList({
         data: req.body,
         ctx: {
            userId: req.user?.id || ''
            }
      });

      res.json(results);
   })

};