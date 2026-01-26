const asyncHandler = require('../../helpers/asyncHandler');
const ServiceOfferingApiFormService = require('../../services/form/ServiceOfferingApiFormService');

module.exports = {

   getById: asyncHandler(async (req, res) => {
      const results = await ServiceOfferingApiFormService.getById({
         id: req.params.id,
         ctx: {
            userId: req.user?.id || ''
            }
      });

      res.json(results);
   }),

   create: asyncHandler(async (req, res) => {
      const results = await ServiceOfferingApiFormService.create({
         data: req.body,
         ctx: {
            userId: req.user?.id || ''
            }
      });

      res.json(results);
   }),

   update: asyncHandler(async (req, res) => {
      const results = await ServiceOfferingApiFormService.update({
         data: req.body,
         ctx: {
            userId: req.user?.id || ''
            }
      });

      res.json(results);
   }),

   remove: asyncHandler(async (req, res) => {
      const results = await ServiceOfferingApiFormService.remove({
         id: req.params.id,
         ctx: {
            userId: req.user?.id || ''
            }
      });

      res.json(results);
   }),


};