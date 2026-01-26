const MessagesDashboardListModel = require('../../models/list/MessagesDashboardListModel');

   const getList = async ({ data, ctx }) => {
      const { userId } = ctx;

      return MessagesDashboardListModel.getList({
         filters: data,
         userId
      });
   };


   module.exports = {
      getList
   };
