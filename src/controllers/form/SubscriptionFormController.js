const asyncHandler = require('../../helpers/asyncHandler');
const SubscriptionFormService = require('../../services/form/SubscriptionFormService');

module.exports = {

   getById: asyncHandler(async (req, res) => {
      const results = await SubscriptionFormService.getById({
         id: req.params.id,
         ctx: {
            userId: req.user?.id || ''
            }
      });

      res.json(results);
   }),

   create: asyncHandler(async (req, res) => {
      const results = await SubscriptionFormService.create({
         data: req.body,
         ctx: {
            userId: req.user?.id || ''
            }
      });

      res.json(results);
   }),

   update: asyncHandler(async (req, res) => {
      const results = await SubscriptionFormService.update({
         data: req.body,
         ctx: {
            userId: req.user?.id || ''
            }
      });

      res.json(results);
   }),

   remove: asyncHandler(async (req, res) => {
      const results = await SubscriptionFormService.remove({
         id: req.params.id,
         ctx: {
            userId: req.user?.id || ''
            }
      });

      res.json(results);
   }),

   getoffering_app_viewById: asyncHandler(async (req, res) => {
      const results = await SubscriptionFormService.getoffering_app_viewById({
         id: req.params.id,
         ctx: {
            userId: req.user?.id || ''
            }
      });

      res.json(results);
   }),

};