const CrossPlatformServiceCommentsListModel = require('../../models/list/CrossPlatformServiceCommentsListModel');

   const getList = async ({ data, ctx }) => {
      const { userId } = ctx;

      return CrossPlatformServiceCommentsListModel.getList({
         filters: data,
         userId
      });
   };


   module.exports = {
      getList
   };
