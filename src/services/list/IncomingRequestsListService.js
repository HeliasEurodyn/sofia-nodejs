const IncomingRequestsListModel = require('../../models/list/IncomingRequestsListModel');

   const getList = async ({ data, ctx }) => {
      const { userId } = ctx;

      return IncomingRequestsListModel.getList({
         filters: data,
         userId
      });
   };


   module.exports = {
      getList
   };
