const asyncHandler = require('../../helpers/asyncHandler');
const CrossPlatformServiceViewOnlyFormService = require('../../services/form/CrossPlatformServiceViewOnlyFormService');

module.exports = {

   getById: asyncHandler(async (req, res) => {
      const results = await CrossPlatformServiceViewOnlyFormService.getById({
         id: req.params.id,
         ctx: {
            userId: req.user?.id || ''
            }
      });

      res.json(results);
   }),

   create: asyncHandler(async (req, res) => {
      const results = await CrossPlatformServiceViewOnlyFormService.create({
         data: req.body,
         ctx: {
            userId: req.user?.id || ''
            }
      });

      res.json(results);
   }),

   update: asyncHandler(async (req, res) => {
      const results = await CrossPlatformServiceViewOnlyFormService.update({
         data: req.body,
         ctx: {
            userId: req.user?.id || ''
            }
      });

      res.json(results);
   }),

   remove: asyncHandler(async (req, res) => {
      const results = await CrossPlatformServiceViewOnlyFormService.remove({
         id: req.params.id,
         ctx: {
            userId: req.user?.id || ''
            }
      });

      res.json(results);
   }),


};