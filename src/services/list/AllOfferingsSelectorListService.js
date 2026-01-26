const AllOfferingsSelectorListModel = require('../../models/list/AllOfferingsSelectorListModel');

   const getList = async ({ data, ctx }) => {
      const { userId } = ctx;

      return AllOfferingsSelectorListModel.getList({
         filters: data,
         userId
      });
   };


   const getOwnerLeftFilterList = async ({ data, ctx }) => {
      const { userId } = ctx;

      return AllOfferingsSelectorListModel.getOwnerLeftFilterList({
         ...data,
         userId
      });
   };


   const getGfDataSharingMethodList = async ({ data, ctx }) => {
      const { userId } = ctx;

      return AllOfferingsSelectorListModel.getGfDataSharingMethodList({
         ...data,
         userId
      });
   };


   module.exports = {
      getList,
      getOwnerLeftFilterList,
      getGfDataSharingMethodList
   };
