const MessagesReceivedListModel = require('../../models/list/MessagesReceivedListModel');

   const getList = async ({ data, ctx }) => {
      const { userId } = ctx;

      return MessagesReceivedListModel.getList({
         filters: data,
         userId
      });
   };


   module.exports = {
      getList
   };
