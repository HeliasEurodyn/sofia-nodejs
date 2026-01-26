const asyncHandler = require('../../helpers/asyncHandler');
const UserWeFormingAdminFormService = require('../../services/form/UserWeFormingAdminFormService');

module.exports = {

   getById: asyncHandler(async (req, res) => {
      const results = await UserWeFormingAdminFormService.getById({
         id: req.params.id,
         ctx: {
            userId: req.user?.id || ''
            }
      });

      res.json(results);
   }),

   create: asyncHandler(async (req, res) => {
      const results = await UserWeFormingAdminFormService.create({
         data: req.body,
         ctx: {
            userId: req.user?.id || ''
            }
      });

      res.json(results);
   }),

   update: asyncHandler(async (req, res) => {
      const results = await UserWeFormingAdminFormService.update({
         data: req.body,
         ctx: {
            userId: req.user?.id || ''
            }
      });

      res.json(results);
   }),

   remove: asyncHandler(async (req, res) => {
      const results = await UserWeFormingAdminFormService.remove({
         id: req.params.id,
         ctx: {
            userId: req.user?.id || ''
            }
      });

      res.json(results);
   }),

   getcountryById: asyncHandler(async (req, res) => {
      const results = await UserWeFormingAdminFormService.getcountryById({
         id: req.params.id,
         ctx: {
            userId: req.user?.id || ''
            }
      });

      res.json(results);
   }),
   getcloud_connector_settingsById: asyncHandler(async (req, res) => {
      const results = await UserWeFormingAdminFormService.getcloud_connector_settingsById({
         id: req.params.id,
         ctx: {
            userId: req.user?.id || ''
            }
      });

      res.json(results);
   }),

};