const MessagesListModel = require('../../models/list/MessagesListModel');

   const getList = async ({ data, ctx }) => {
      const { userId } = ctx;

      return MessagesListModel.getList({
         filters: data,
         userId
      });
   };


   module.exports = {
      getList
   };
