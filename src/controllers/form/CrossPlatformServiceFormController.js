const asyncHandler = require('../../helpers/asyncHandler');
const CrossPlatformServiceFormService = require('../../services/form/CrossPlatformServiceFormService');

module.exports = {

   getById: asyncHandler(async (req, res) => {
      const results = await CrossPlatformServiceFormService.getById({
         id: req.params.id,
         ctx: {
            userId: req.user?.id || ''
            }
      });

      res.json(results);
   }),

   create: asyncHandler(async (req, res) => {
      const results = await CrossPlatformServiceFormService.create({
         data: req.body,
         ctx: {
            userId: req.user?.id || ''
            }
      });

      res.json(results);
   }),

   update: asyncHandler(async (req, res) => {
      const results = await CrossPlatformServiceFormService.update({
         data: req.body,
         ctx: {
            userId: req.user?.id || ''
            }
      });

      res.json(results);
   }),

   remove: asyncHandler(async (req, res) => {
      const results = await CrossPlatformServiceFormService.remove({
         id: req.params.id,
         ctx: {
            userId: req.user?.id || ''
            }
      });

      res.json(results);
   }),

   getwizardsById: asyncHandler(async (req, res) => {
      const results = await CrossPlatformServiceFormService.getwizardsById({
         id: req.params.id,
         ctx: {
            userId: req.user?.id || ''
            }
      });

      res.json(results);
   }),

};