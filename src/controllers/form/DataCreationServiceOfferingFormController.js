const asyncHandler = require('../../helpers/asyncHandler');
const DataCreationServiceOfferingFormService = require('../../services/form/DataCreationServiceOfferingFormService');

module.exports = {

   getById: asyncHandler(async (req, res) => {
      const results = await DataCreationServiceOfferingFormService.getById({
         id: req.params.id,
         ctx: {
            userId: req.user?.id || ''
            }
      });

      res.json(results);
   }),

   create: asyncHandler(async (req, res) => {
      const results = await DataCreationServiceOfferingFormService.create({
         data: req.body,
         ctx: {
            userId: req.user?.id || ''
            }
      });

      res.json(results);
   }),

   update: asyncHandler(async (req, res) => {
      const results = await DataCreationServiceOfferingFormService.update({
         data: req.body,
         ctx: {
            userId: req.user?.id || ''
            }
      });

      res.json(results);
   }),

   remove: asyncHandler(async (req, res) => {
      const results = await DataCreationServiceOfferingFormService.remove({
         id: req.params.id,
         ctx: {
            userId: req.user?.id || ''
            }
      });

      res.json(results);
   }),


};