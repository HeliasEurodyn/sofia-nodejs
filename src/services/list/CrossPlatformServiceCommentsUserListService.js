const CrossPlatformServiceCommentsUserListModel = require('../../models/list/CrossPlatformServiceCommentsUserListModel');

   const getList = async ({ data, ctx }) => {
      const { userId } = ctx;

      return CrossPlatformServiceCommentsUserListModel.getList({
         filters: data,
         userId
      });
   };


   module.exports = {
      getList
   };
