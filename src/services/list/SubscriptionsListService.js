const SubscriptionsListModel = require('../../models/list/SubscriptionsListModel');

   const getList = async ({ data, ctx }) => {
      const { userId } = ctx;

      return SubscriptionsListModel.getList({
         filters: data,
         userId
      });
   };


   module.exports = {
      getList
   };
