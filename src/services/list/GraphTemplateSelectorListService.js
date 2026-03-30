const GraphTemplateSelectorListModel = require('../../models/list/GraphTemplateSelectorListModel');

   const getList = async ({ data, ctx }) => {
      const { userId } = ctx;

      return GraphTemplateSelectorListModel.getList({
         filters: data,
         userId
      });
   };


   module.exports = {
      getList
   };
