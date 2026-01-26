const asyncHandler = require('../../helpers/asyncHandler');
const ServiceDashboardListService = require('../../services/list/ServiceDashboardListService');

module.exports = {

   getList: asyncHandler(async (req, res) => {
      const results = await ServiceDashboardListService.getList({
         data: req.body,
         ctx: {
            userId: req.user?.id || ''
            }
      });

      res.json(results);
   })

};