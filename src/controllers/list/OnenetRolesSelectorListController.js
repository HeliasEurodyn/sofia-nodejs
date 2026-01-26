const asyncHandler = require('../../helpers/asyncHandler');
const OnenetRolesSelectorListService = require('../../services/list/OnenetRolesSelectorListService');

module.exports = {

   getList: asyncHandler(async (req, res) => {
      const results = await OnenetRolesSelectorListService.getList({
         data: req.body,
         ctx: {
            userId: req.user?.id || ''
            }
      });

      res.json(results);
   })

};