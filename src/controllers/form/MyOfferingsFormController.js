const asyncHandler = require('../../helpers/asyncHandler');
const MyOfferingsFormService = require('../../services/form/MyOfferingsFormService');

module.exports = {

   getById: asyncHandler(async (req, res) => {
      const results = await MyOfferingsFormService.getById({
         id: req.params.id,
         ctx: {
            userId: req.user?.id || ''
            }
      });

      res.json(results);
   }),

   create: asyncHandler(async (req, res) => {
      const results = await MyOfferingsFormService.create({
         data: req.body,
         ctx: {
            userId: req.user?.id || ''
            }
      });

      res.json(results);
   }),

   update: asyncHandler(async (req, res) => {
      const results = await MyOfferingsFormService.update({
         data: req.body,
         ctx: {
            userId: req.user?.id || ''
            }
      });

      res.json(results);
   }),

   remove: asyncHandler(async (req, res) => {
      const results = await MyOfferingsFormService.remove({
         id: req.params.id,
         ctx: {
            userId: req.user?.id || ''
            }
      });

      res.json(results);
   }),

   getservice_app_viewById: asyncHandler(async (req, res) => {
      const results = await MyOfferingsFormService.getservice_app_viewById({
         id: req.params.id,
         ctx: {
            userId: req.user?.id || ''
            }
      });

      res.json(results);
   }),

};