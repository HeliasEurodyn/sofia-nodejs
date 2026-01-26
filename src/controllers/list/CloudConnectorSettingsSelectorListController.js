const asyncHandler = require('../../helpers/asyncHandler');
const CloudConnectorSettingsSelectorListService = require('../../services/list/CloudConnectorSettingsSelectorListService');

module.exports = {

   getList: asyncHandler(async (req, res) => {
      const results = await CloudConnectorSettingsSelectorListService.getList({
         data: req.body,
         ctx: {
            userId: req.user?.id || ''
            }
      });

      res.json(results);
   })

};