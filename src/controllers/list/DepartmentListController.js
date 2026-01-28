const asyncHandler = require('../../helpers/asyncHandler');
const DepartmentListService = require('../../services/list/DepartmentListService');

module.exports = {

   getList: asyncHandler(async (req, res) => {
      const results = await DepartmentListService.getList({
         data: req.body,
         ctx: {
            userId: req.user?.id || ''
            }
      });

      res.json(results);
   })

};