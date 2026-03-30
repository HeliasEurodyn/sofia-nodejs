const asyncHandler = require('../../helpers/asyncHandler');
const OpenvasReportSelectorListService = require('../../services/list/OpenvasReportSelectorListService');

module.exports = {

   getList: asyncHandler(async (req, res) => {
      const results = await OpenvasReportSelectorListService.getList({
         data: req.body,
         ctx: {
            userId: req.user?.id || ''
            }
      });

      res.json(results);
   })

};