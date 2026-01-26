const DataTransactionsPivotListModel = require('../../models/list/DataTransactionsPivotListModel');

   const getList = async ({ data, ctx }) => {
      const { userId } = ctx;

      return DataTransactionsPivotListModel.getList({
         filters: data,
         userId
      });
   };


   const getSqlgf1List = async ({ data, ctx }) => {
      const { userId } = ctx;

      return DataTransactionsPivotListModel.getSqlgf1List({
         ...data,
         userId
      });
   };


   const getSqlgf2List = async ({ data, ctx }) => {
      const { userId } = ctx;

      return DataTransactionsPivotListModel.getSqlgf2List({
         ...data,
         userId
      });
   };


   const getSqlgf3List = async ({ data, ctx }) => {
      const { userId } = ctx;

      return DataTransactionsPivotListModel.getSqlgf3List({
         ...data,
         userId
      });
   };


   const getGfNameList = async ({ data, ctx }) => {
      const { userId } = ctx;

      return DataTransactionsPivotListModel.getGfNameList({
         ...data,
         userId
      });
   };


   const getGfUsernameList = async ({ data, ctx }) => {
      const { userId } = ctx;

      return DataTransactionsPivotListModel.getGfUsernameList({
         ...data,
         userId
      });
   };


   module.exports = {
      getList,
      getSqlgf1List,
      getSqlgf2List,
      getSqlgf3List,
      getGfNameList,
      getGfUsernameList
   };
