const CypherQueryTemplateListModel = require('../../models/list/CypherQueryTemplateListModel');

   const getList = async ({ data, ctx }) => {
      const { userId } = ctx;

      return CypherQueryTemplateListModel.getList({
         filters: data,
         userId
      });
   };


   module.exports = {
      getList
   };
