const asyncHandler = require('../../helpers/asyncHandler');
const RequestFormService = require('../../services/form/RequestFormService');

module.exports = {

   getById: asyncHandler(async (req, res) => {
      const results = await RequestFormService.getById({
         id: req.params.id,
         ctx: {
            userId: req.user?.id || ''
            }
      });

      res.json(results);
   }),

   create: asyncHandler(async (req, res) => {
      const results = await RequestFormService.create({
         data: req.body,
         ctx: {
            userId: req.user?.id || ''
            }
      });

      res.json(results);
   }),

   update: asyncHandler(async (req, res) => {
      const results = await RequestFormService.update({
         data: req.body,
         ctx: {
            userId: req.user?.id || ''
            }
      });

      res.json(results);
   }),

   remove: asyncHandler(async (req, res) => {
      const results = await RequestFormService.remove({
         id: req.params.id,
         ctx: {
            userId: req.user?.id || ''
            }
      });

      res.json(results);
   }),


};