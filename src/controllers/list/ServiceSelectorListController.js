const asyncHandler = require('../../helpers/asyncHandler');
const ServiceSelectorListService = require('../../services/list/ServiceSelectorListService');

module.exports = {

   getList: asyncHandler(async (req, res) => {
      const results = await ServiceSelectorListService.getList({
         data: req.body,
         ctx: {
            userId: req.user?.id || ''
            }
      });

      res.json(results);
   })

};