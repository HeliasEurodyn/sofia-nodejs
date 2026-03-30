const asyncHandler = require('../../helpers/asyncHandler');
const DepartmentSelectorListService = require('../../services/list/DepartmentSelectorListService');

module.exports = {

   getList: asyncHandler(async (req, res) => {
      const results = await DepartmentSelectorListService.getList({
         data: req.body,
         ctx: {
            userId: req.user?.id || ''
            }
      });

      res.json(results);
   })

};