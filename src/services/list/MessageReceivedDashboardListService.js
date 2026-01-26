const MessageReceivedDashboardListModel = require('../../models/list/MessageReceivedDashboardListModel');

   const getList = async ({ data, ctx }) => {
      const { userId } = ctx;

      return MessageReceivedDashboardListModel.getList({
         filters: data,
         userId
      });
   };


   module.exports = {
      getList
   };
