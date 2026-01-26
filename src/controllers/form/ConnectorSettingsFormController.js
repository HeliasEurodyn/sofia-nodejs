const asyncHandler = require('../../helpers/asyncHandler');
const ConnectorSettingsFormService = require('../../services/form/ConnectorSettingsFormService');

module.exports = {

   getById: asyncHandler(async (req, res) => {
      const results = await ConnectorSettingsFormService.getById({
         id: req.params.id,
         ctx: {
            userId: req.user?.id || ''
            }
      });

      res.json(results);
   }),

   create: asyncHandler(async (req, res) => {
      const results = await ConnectorSettingsFormService.create({
         data: req.body,
         ctx: {
            userId: req.user?.id || ''
            }
      });

      res.json(results);
   }),

   update: asyncHandler(async (req, res) => {
      const results = await ConnectorSettingsFormService.update({
         data: req.body,
         ctx: {
            userId: req.user?.id || ''
            }
      });

      res.json(results);
   }),

   remove: asyncHandler(async (req, res) => {
      const results = await ConnectorSettingsFormService.remove({
         id: req.params.id,
         ctx: {
            userId: req.user?.id || ''
            }
      });

      res.json(results);
   }),

   getcloud_connector_settingsById: asyncHandler(async (req, res) => {
      const results = await ConnectorSettingsFormService.getcloud_connector_settingsById({
         id: req.params.id,
         ctx: {
            userId: req.user?.id || ''
            }
      });

      res.json(results);
   }),

};