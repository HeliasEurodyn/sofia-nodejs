const DataProvidedForLocalApiListModel = require('../../models/list/DataProvidedForLocalApiListModel');

   const getList = async ({ data, ctx }) => {
      const { userId } = ctx;

      return DataProvidedForLocalApiListModel.getList({
         filters: data,
         userId
      });
   };


   const getCategoryGroupingList = async ({ data, ctx }) => {
      const { userId } = ctx;

      return DataProvidedForLocalApiListModel.getCategoryGroupingList({
         ...data,
         userId
      });
   };


   const getServiceGroupingList = async ({ data, ctx }) => {
      const { userId } = ctx;

      return DataProvidedForLocalApiListModel.getServiceGroupingList({
         ...data,
         userId
      });
   };


   const getBusinessObjectGroupingList = async ({ data, ctx }) => {
      const { userId } = ctx;

      return DataProvidedForLocalApiListModel.getBusinessObjectGroupingList({
         ...data,
         userId
      });
   };


   module.exports = {
      getList,
      getCategoryGroupingList,
      getServiceGroupingList,
      getBusinessObjectGroupingList
   };
