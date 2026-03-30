const CypherQueryTemplateModel = require('../../models/crud/CypherQueryTemplateModel');
const CypherQueryTemplateFormModel = require('../../models/form/CypherQueryTemplateFormModel');

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
      
      if (data?.cypher_query_template_obj?.id) {
         cache.set(id, data);
      }

      return data;
   };

   const create = async ({ data, ctx }) => {
      const { userId } = ctx;
      data.cypher_query_template_obj.cypher_query_template_type = 'SELECTION_TPL';
      
      const result = await CypherQueryTemplateModel.create({
         data,
         userId
      });
      
      if(result.cypher_query_template_obj.is_default){  
         await CypherQueryTemplateFormModel.defineOnlyDefault(result.cypher_query_template_obj.id);
      }

      return result;
   };

   const update = async ({ data, ctx }) => {
      const { userId } = ctx;
      data.cypher_query_template_obj.cypher_query_template_type = 'SELECTION_TPL';
      
      const result = await CypherQueryTemplateModel.update({
         data,
         userId
      });
      
      cache.clear();
      
      const id = data.cypher_query_template_obj.id;

      if(data.cypher_query_template_obj.is_default){
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
      
      cache.clear();
      
      return result;
   };
   
    const getDefault = async ({ ctx } = {}) => {
       const userId = ctx?.userId;
    
       // 1. cache lookup
       for (const value of cache.values()) {
          if (value?.cypher_query_template_obj?.is_default === 1) {
             return value;
          }
       }
    
       // 2. DB default
       const data = await CypherQueryTemplateFormModel.getDefault();
    
       if (data?.cypher_query_template_obj?.id) {
          cache.set(data.cypher_query_template_obj.id, data);
          return data;
       }
    
       // 3. fallback → first record
       const fallback = await CypherQueryTemplateFormModel.getFirst();
    
       if (fallback?.cypher_query_template_obj?.id) {
          cache.set(fallback.cypher_query_template_obj.id, fallback);
          return fallback;
       }
    
       // 4. nothing found
       return null;
    };
    

   module.exports = {
      getById,
      
      getDefault,
      create,
      update,
      remove
   };
