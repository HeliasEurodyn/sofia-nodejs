const DataConsumedForLocalApiListModel = require('../../models/list/DataConsumedForLocalApiListModel');

   const getList = async ({ data, ctx }) => {
      const { userId } = ctx;

      return DataConsumedForLocalApiListModel.getList({
         filters: data,
         userId
      });
   };


   const getCategoryGroupingList = async ({ data, ctx }) => {
      const { userId } = ctx;

      return DataConsumedForLocalApiListModel.getCategoryGroupingList({
         ...data,
         userId
      });
   };


   const getServiceGroupingList = async ({ data, ctx }) => {
      const { userId } = ctx;

      return DataConsumedForLocalApiListModel.getServiceGroupingList({
         ...data,
         userId
      });
   };


   const getBusinessObjectGroupingList = async ({ data, ctx }) => {
      const { userId } = ctx;

      return DataConsumedForLocalApiListModel.getBusinessObjectGroupingList({
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
