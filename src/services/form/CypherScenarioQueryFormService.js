const CypherQueryTemplateModel = require('../../models/crud/CypherQueryTemplateModel');
const CypherScenarioQueryFormModel = require('../../models/form/CypherScenarioQueryFormModel');

   const cache = new Map();
   
   const getById = async ({ id, ctx }) => {
      const { userId } = ctx;

      if (cache.has(id)) {
         return cache.get(id);
      }

      const data = await CypherQueryTemplateModel.getById({
         id,
         userId
      });
      
      cache.set(id, data);

      return data;
   };

   const create = async ({ data, ctx }) => {
      const { userId } = ctx;
      data.cypher_query_template_obj.cypher_query_template_type = 'SCENARIO_QRY_TPL';
      
      const result = await CypherQueryTemplateModel.create({
         data,
         userId
      });
      
      if(result.cypher_query_template_obj.is_default == 1){
         await CypherQueryTemplateFormModel.defineOnlyDefault(result.cypher_query_template_obj.id);
      }

      return result;
   };

   const update = async ({ data, ctx }) => {
      const { userId } = ctx;
      data.cypher_query_template_obj.cypher_query_template_type = 'SCENARIO_QRY_TPL';
      
      const result = await CypherQueryTemplateModel.update({
         data,
         userId
      });
      
      const id = data.cypher_query_template_obj.id;
      cache.delete(id);

      if(data.cypher_query_template_obj.is_default == 1){
         await CypherQueryTemplateFormModel.defineOnlyDefault(id);
      }

      return result;
   };

   const remove = async ({ id, ctx }) => {
      const { userId } = ctx;

      const result = await CypherQueryTemplateModel.delete({
         id,
         userId
      });
      
      cache.delete(id);
      
      return result;
   };


   module.exports = {
      getById,
      
      create,
      update,
      remove
   };
