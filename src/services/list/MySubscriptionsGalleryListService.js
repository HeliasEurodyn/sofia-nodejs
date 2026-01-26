const MySubscriptionsGalleryListModel = require('../../models/list/MySubscriptionsGalleryListModel');

   const getList = async ({ data, ctx }) => {
      const { userId } = ctx;

      return MySubscriptionsGalleryListModel.getList({
         filters: data,
         userId
      });
   };


   module.exports = {
      getList
   };
