const ProvideDataListModel = require('../../models/list/ProvideDataListModel');

   const getList = async ({ data, ctx }) => {
      const { userId } = ctx;

      return ProvideDataListModel.getList({
         filters: data,
         userId
      });
   };


   const getCategoryGroupingList = async ({ data, ctx }) => {
      const { userId } = ctx;

      return ProvideDataListModel.getCategoryGroupingList({
         ...data,
         userId
      });
   };


   const getServiceGroupingList = async ({ data, ctx }) => {
      const { userId } = ctx;

      return ProvideDataListModel.getServiceGroupingList({
         ...data,
         userId
      });
   };


   const getBusinessObjectGroupingList = async ({ data, ctx }) => {
      const { userId } = ctx;

      return ProvideDataListModel.getBusinessObjectGroupingList({
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
