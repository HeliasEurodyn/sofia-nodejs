const BusinessTagsListModel = require('../../models/list/BusinessTagsListModel');

   const getList = async ({ data, ctx }) => {
      const { userId } = ctx;

      return BusinessTagsListModel.getList({
         filters: data,
         userId
      });
   };


   module.exports = {
      getList
   };
