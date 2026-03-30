const asyncHandler = require('../../helpers/asyncHandler');
const RelathionshipTypeSelectorListService = require('../../services/list/RelathionshipTypeSelectorListService');

module.exports = {

   getList: asyncHandler(async (req, res) => {
      const results = await RelathionshipTypeSelectorListService.getList({
         data: req.body,
         ctx: {
            userId: req.user?.id || ''
            }
      });

      res.json(results);
   })

};