const DataConsumedDashboardListModel = require('../../models/list/DataConsumedDashboardListModel');

   const getList = async ({ data, ctx }) => {
      const { userId } = ctx;

      return DataConsumedDashboardListModel.getList({
         filters: data,
         userId
      });
   };


   const getSqlgf1List = async ({ data, ctx }) => {
      const { userId } = ctx;

      return DataConsumedDashboardListModel.getSqlgf1List({
         ...data,
         userId
      });
   };


   const getSqlgf2List = async ({ data, ctx }) => {
      const { userId } = ctx;

      return DataConsumedDashboardListModel.getSqlgf2List({
         ...data,
         userId
      });
   };


   const getSqlgf3List = async ({ data, ctx }) => {
      const { userId } = ctx;

      return DataConsumedDashboardListModel.getSqlgf3List({
         ...data,
         userId
      });
   };


   module.exports = {
      getList,
      getSqlgf1List,
      getSqlgf2List,
      getSqlgf3List
   };
