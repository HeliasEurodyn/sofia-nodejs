const MyOfferingsSelectorListModel = require('../../models/list/MyOfferingsSelectorListModel');

   const getList = async ({ data, ctx }) => {
      const { userId } = ctx;

      return MyOfferingsSelectorListModel.getList({
         filters: data,
         userId
      });
   };


   const getOwnerLeftFilterList = async ({ data, ctx }) => {
      const { userId } = ctx;

      return MyOfferingsSelectorListModel.getOwnerLeftFilterList({
         ...data,
         userId
      });
   };


   const getGfDataSharingMethodList = async ({ data, ctx }) => {
      const { userId } = ctx;

      return MyOfferingsSelectorListModel.getGfDataSharingMethodList({
         ...data,
         userId
      });
   };


   module.exports = {
      getList,
      getOwnerLeftFilterList,
      getGfDataSharingMethodList
   };
