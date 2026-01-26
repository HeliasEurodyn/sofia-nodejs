const BusinessObjectApiListModel = require('../../models/list/BusinessObjectApiListModel');

   const getList = async ({ data, ctx }) => {
      const { userId } = ctx;

      return BusinessObjectApiListModel.getList({
         filters: data,
         userId
      });
   };


   const getCategoryGroupingList = async ({ data, ctx }) => {
      const { userId } = ctx;

      return BusinessObjectApiListModel.getCategoryGroupingList({
         ...data,
         userId
      });
   };


   const getServiceGroupingList = async ({ data, ctx }) => {
      const { userId } = ctx;

      return BusinessObjectApiListModel.getServiceGroupingList({
         ...data,
         userId
      });
   };


   module.exports = {
      getList,
      getCategoryGroupingList,
      getServiceGroupingList
   };
