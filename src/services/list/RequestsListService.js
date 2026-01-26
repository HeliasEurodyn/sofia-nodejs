const RequestsListModel = require('../../models/list/RequestsListModel');

   const getList = async ({ data, ctx }) => {
      const { userId } = ctx;

      return RequestsListModel.getList({
         filters: data,
         userId
      });
   };


   const getCategoryGroupingList = async ({ data, ctx }) => {
      const { userId } = ctx;

      return RequestsListModel.getCategoryGroupingList({
         ...data,
         userId
      });
   };


   const getServiceGroupingList = async ({ data, ctx }) => {
      const { userId } = ctx;

      return RequestsListModel.getServiceGroupingList({
         ...data,
         userId
      });
   };


   const getBusinessObjectGroupingList = async ({ data, ctx }) => {
      const { userId } = ctx;

      return RequestsListModel.getBusinessObjectGroupingList({
         ...data,
         userId
      });
   };


   const getUsersGroupingList = async ({ data, ctx }) => {
      const { userId } = ctx;

      return RequestsListModel.getUsersGroupingList({
         ...data,
         userId
      });
   };


   module.exports = {
      getList,
      getCategoryGroupingList,
      getServiceGroupingList,
      getBusinessObjectGroupingList,
      getUsersGroupingList
   };
