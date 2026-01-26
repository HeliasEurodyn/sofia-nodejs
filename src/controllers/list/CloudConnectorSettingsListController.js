const asyncHandler = require('../../helpers/asyncHandler');
const CloudConnectorSettingsListService = require('../../services/list/CloudConnectorSettingsListService');

module.exports = {

   getList: asyncHandler(async (req, res) => {
      const results = await CloudConnectorSettingsListService.getList({
         data: req.body,
         ctx: {
            userId: req.user?.id || ''
            }
      });

      res.json(results);
   })

};