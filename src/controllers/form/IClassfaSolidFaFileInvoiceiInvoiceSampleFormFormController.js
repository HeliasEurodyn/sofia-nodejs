const asyncHandler = require('../../helpers/asyncHandler');
const IClassfaSolidFaFileInvoiceiInvoiceSampleFormFormService = require('../../services/form/IClassfaSolidFaFileInvoiceiInvoiceSampleFormFormService');

module.exports = {

   getById: asyncHandler(async (req, res) => {
      const results = await IClassfaSolidFaFileInvoiceiInvoiceSampleFormFormService.getById({
         id: req.params.id,
         ctx: {
            userId: req.user?.id || ''
            }
      });

      res.json(results);
   }),

   create: asyncHandler(async (req, res) => {
      const results = await IClassfaSolidFaFileInvoiceiInvoiceSampleFormFormService.create({
         data: req.body,
         ctx: {
            userId: req.user?.id || ''
            }
      });

      res.json(results);
   }),

   update: asyncHandler(async (req, res) => {
      const results = await IClassfaSolidFaFileInvoiceiInvoiceSampleFormFormService.update({
         data: req.body,
         ctx: {
            userId: req.user?.id || ''
            }
      });

      res.json(results);
   }),

   remove: asyncHandler(async (req, res) => {
      const results = await IClassfaSolidFaFileInvoiceiInvoiceSampleFormFormService.remove({
         id: req.params.id,
         ctx: {
            userId: req.user?.id || ''
            }
      });

      res.json(results);
   }),


};