const DataProvidedDashboardListModel = require('../../models/list/DataProvidedDashboardListModel');

   const getList = async ({ data, ctx }) => {
      const { userId } = ctx;

      return DataProvidedDashboardListModel.getList({
         filters: data,
         userId
      });
   };


   const getSqlgf1List = async ({ data, ctx }) => {
      const { userId } = ctx;

      return DataProvidedDashboardListModel.getSqlgf1List({
         ...data,
         userId
      });
   };


   const getSqlgf2List = async ({ data, ctx }) => {
      const { userId } = ctx;

      return DataProvidedDashboardListModel.getSqlgf2List({
         ...data,
         userId
      });
   };


   const getSqlgf3List = async ({ data, ctx }) => {
      const { userId } = ctx;

      return DataProvidedDashboardListModel.getSqlgf3List({
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
