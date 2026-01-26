const asyncHandler = require('../../helpers/asyncHandler');
const ServiceListService = require('../../services/list/ServiceListService');

module.exports = {

   getList: asyncHandler(async (req, res) => {
      const results = await ServiceListService.getList({
         data: req.body,
         ctx: {
            userId: req.user?.id || ''
            }
      });

      res.json(results);
   })

};