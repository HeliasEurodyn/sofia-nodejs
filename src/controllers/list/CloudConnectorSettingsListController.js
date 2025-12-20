const asyncHandler = require('../../helpers/asyncHandler');
const CloudConnectorSettingsListService = require('../../services/list/CloudConnectorSettingsListService');

module.exports = {

   getList: asyncHandler(async (req, res) => {
      const results = await CloudConnectorSettingsListService.getList(req.body);
      res.json(results);
   })

};