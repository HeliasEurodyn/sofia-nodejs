const asyncHandler = require('../../helpers/asyncHandler');
const OnenetRolesListService = require('../../services/list/OnenetRolesListService');

module.exports = {

   getList: asyncHandler(async (req, res) => {
      const results = await OnenetRolesListService.getList({
         data: req.body,
         ctx: {
            userId: req.user?.id || ''
            }
      });

      res.json(results);
   })

};