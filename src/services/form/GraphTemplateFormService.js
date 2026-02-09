const GraphTemplateModel = require('../../models/crud/GraphTemplateModel');
const GraphTemplateFormModel = require('../../models/form/GraphTemplateFormModel');

   const getById = async ({ id, ctx }) => {
      const { userId } = ctx;

      return GraphTemplateModel.getById({
         id,
         userId
      });
   };

   const create = async ({ data, ctx }) => {
      const { userId } = ctx;

      return GraphTemplateModel.create({
         data,
         userId
      });
   };

   const update = async ({ data, ctx }) => {
      const { userId } = ctx;

      return GraphTemplateModel.update({
         data,
         userId
      });
   };

   const remove = async ({ id, ctx }) => {
      const { userId } = ctx;

      return GraphTemplateModel.remove({
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
