const CompanyModel = require('../../models/crud/CompanyModel');
const IClassfaSolidFaFileInvoiceiInvoiceSampleFormFormModel = require('../../models/form/IClassfaSolidFaFileInvoiceiInvoiceSampleFormFormModel');

   const getById = async ({ id, ctx }) => {
      const { userId } = ctx;

      return CompanyModel.getById({
         id,
         userId
      });
   };

   const create = async ({ data, ctx }) => {
      const { userId } = ctx;

      return CompanyModel.create({
         data,
         userId
      });
   };

   const update = async ({ data, ctx }) => {
      const { userId } = ctx;

      return CompanyModel.update({
         data,
         userId
      });
   };

   const remove = async ({ id, ctx }) => {
      const { userId } = ctx;

      return CompanyModel.remove({
         id,
         userId
      });
   };


   module.exports = {
      getById,
      
      create,
      update,
      remove
   };
