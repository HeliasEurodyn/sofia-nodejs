const ProcessTagsListModel = require('../../models/list/ProcessTagsListModel');

   const getList = async ({ data, ctx }) => {
      const { userId } = ctx;

      return ProcessTagsListModel.getList({
         filters: data,
         userId
      });
   };


   module.exports = {
      getList
   };
