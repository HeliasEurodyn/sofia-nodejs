const CypherQueryTemplateStaysListModel = require('../../models/list/CypherQueryTemplateStaysListModel');

   const getList = async ({ data, ctx }) => {
      const { userId } = ctx;

      return CypherQueryTemplateStaysListModel.getList({
         filters: data,
         userId
      });
   };


   module.exports = {
      getList
   };
