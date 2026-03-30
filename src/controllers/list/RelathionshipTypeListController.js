const asyncHandler = require('../../helpers/asyncHandler');
const RelathionshipTypeListService = require('../../services/list/RelathionshipTypeListService');

module.exports = {

   getList: asyncHandler(async (req, res) => {
      const results = await RelathionshipTypeListService.getList({
         data: req.body,
         ctx: {
            userId: req.user?.id || ''
            }
      });

      res.json(results);
   })

};