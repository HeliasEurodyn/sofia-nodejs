const asyncHandler = require('../../helpers/asyncHandler');
const UserWeFormingFormService = require('../../services/form/UserWeFormingFormService');

module.exports = {

   getById: asyncHandler(async (req, res) => {
      const results = await UserWeFormingFormService.getById({
         id: req.params.id,
         ctx: {
            userId: req.user?.id || ''
            }
      });

      res.json(results);
   }),

   create: asyncHandler(async (req, res) => {
      const results = await UserWeFormingFormService.create({
         data: req.body,
         ctx: {
            userId: req.user?.id || ''
            }
      });

      res.json(results);
   }),

   update: asyncHandler(async (req, res) => {
      const results = await UserWeFormingFormService.update({
         data: req.body,
         ctx: {
            userId: req.user?.id || ''
            }
      });

      res.json(results);
   }),

   remove: asyncHandler(async (req, res) => {
      const results = await UserWeFormingFormService.remove({
         id: req.params.id,
         ctx: {
            userId: req.user?.id || ''
            }
      });

      res.json(results);
   }),

   getcountryById: asyncHandler(async (req, res) => {
      const results = await UserWeFormingFormService.getcountryById({
         id: req.params.id,
         ctx: {
            userId: req.user?.id || ''
            }
      });

      res.json(results);
   }),

};