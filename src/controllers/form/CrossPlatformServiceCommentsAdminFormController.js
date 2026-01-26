const asyncHandler = require('../../helpers/asyncHandler');
const CrossPlatformServiceCommentsAdminFormService = require('../../services/form/CrossPlatformServiceCommentsAdminFormService');

module.exports = {

   getById: asyncHandler(async (req, res) => {
      const results = await CrossPlatformServiceCommentsAdminFormService.getById({
         id: req.params.id,
         ctx: {
            userId: req.user?.id || ''
            }
      });

      res.json(results);
   }),

   create: asyncHandler(async (req, res) => {
      const results = await CrossPlatformServiceCommentsAdminFormService.create({
         data: req.body,
         ctx: {
            userId: req.user?.id || ''
            }
      });

      res.json(results);
   }),

   update: asyncHandler(async (req, res) => {
      const results = await CrossPlatformServiceCommentsAdminFormService.update({
         data: req.body,
         ctx: {
            userId: req.user?.id || ''
            }
      });

      res.json(results);
   }),

   remove: asyncHandler(async (req, res) => {
      const results = await CrossPlatformServiceCommentsAdminFormService.remove({
         id: req.params.id,
         ctx: {
            userId: req.user?.id || ''
            }
      });

      res.json(results);
   }),


};