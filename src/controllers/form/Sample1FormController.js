const asyncHandler = require('../../helpers/asyncHandler');
const Sample1FormService = require('../../services/form/Sample1FormService');

module.exports = {

   getById: asyncHandler(async (req, res) => {
      const results = await Sample1FormService.getById({
         id: req.params.id,
         ctx: {
            userId: req.user?.id || ''
            }
      });

      res.json(results);
   }),

   create: asyncHandler(async (req, res) => {
      const results = await Sample1FormService.create({
         data: req.body,
         ctx: {
            userId: req.user?.id || ''
            }
      });

      res.json(results);
   }),

   update: asyncHandler(async (req, res) => {
      const results = await Sample1FormService.update({
         data: req.body,
         ctx: {
            userId: req.user?.id || ''
            }
      });

      res.json(results);
   }),

   remove: asyncHandler(async (req, res) => {
      const results = await Sample1FormService.remove({
         id: req.params.id,
         ctx: {
            userId: req.user?.id || ''
            }
      });

      res.json(results);
   }),


};