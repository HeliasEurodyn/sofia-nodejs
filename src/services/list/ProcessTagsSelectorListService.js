const ProcessTagsSelectorListModel = require('../../models/list/ProcessTagsSelectorListModel');

   const getList = async ({ data, ctx }) => {
      const { userId } = ctx;

      return ProcessTagsSelectorListModel.getList({
         filters: data,
         userId
      });
   };


   module.exports = {
      getList
   };
