const GraphTemplateListModel = require('../../models/list/GraphTemplateListModel');

   const getList = async ({ data, ctx }) => {
      const { userId } = ctx;

      return GraphTemplateListModel.getList({
         filters: data,
         userId
      });
   };


   module.exports = {
      getList
   };
