const MyOfferingsListModel = require('../../models/list/MyOfferingsListModel');

   const getList = async ({ data, ctx }) => {
      const { userId } = ctx;

      return MyOfferingsListModel.getList({
         filters: data,
         userId
      });
   };


   module.exports = {
      getList
   };
