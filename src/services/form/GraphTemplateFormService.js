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

      const result = GraphTemplateModel.create({
         data,
         userId
      });
      
      if(result.graph_template_obj.is_default){  
         await GraphTemplateFormModel.defineOnlyDefault(result.graph_template_obj.id);
      }
      
      return result;
   };

   const update = async ({ data, ctx }) => {
      const { userId } = ctx;

      const result = GraphTemplateModel.update({
         data,
         userId
      });
      
      if(data.graph_template_obj.is_default){  
         await GraphTemplateFormModel.defineOnlyDefault(data.graph_template_obj.id);
      }
      
      return result;
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
