const asyncHandler = require('../../helpers/asyncHandler');
const SubscriptionViewFormService = require('../../services/form/SubscriptionViewFormService');

module.exports = {

   getById: asyncHandler(async (req, res) => {
      const results = await SubscriptionViewFormService.getById({
         id: req.params.id,
         ctx: {
            userId: req.user?.id || ''
            }
      });

      res.json(results);
   }),

   create: asyncHandler(async (req, res) => {
      const results = await SubscriptionViewFormService.create({
         data: req.body,
         ctx: {
            userId: req.user?.id || ''
            }
      });

      res.json(results);
   }),

   update: asyncHandler(async (req, res) => {
      const results = await SubscriptionViewFormService.update({
         data: req.body,
         ctx: {
            userId: req.user?.id || ''
            }
      });

      res.json(results);
   }),

   remove: asyncHandler(async (req, res) => {
      const results = await SubscriptionViewFormService.remove({
         id: req.params.id,
         ctx: {
            userId: req.user?.id || ''
            }
      });

      res.json(results);
   }),

   getoffering_app_viewById: asyncHandler(async (req, res) => {
      const results = await SubscriptionViewFormService.getoffering_app_viewById({
         id: req.params.id,
         ctx: {
            userId: req.user?.id || ''
            }
      });

      res.json(results);
   }),

};