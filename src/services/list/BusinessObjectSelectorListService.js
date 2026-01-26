const BusinessObjectSelectorListModel = require('../../models/list/BusinessObjectSelectorListModel');

   const getList = async ({ data, ctx }) => {
      const { userId } = ctx;

      return BusinessObjectSelectorListModel.getList({
         filters: data,
         userId
      });
   };


   const getSqlgf2List = async ({ data, ctx }) => {
      const { userId } = ctx;

      return BusinessObjectSelectorListModel.getSqlgf2List({
         ...data,
         userId
      });
   };


   const getSqlgf3List = async ({ data, ctx }) => {
      const { userId } = ctx;

      return BusinessObjectSelectorListModel.getSqlgf3List({
         ...data,
         userId
      });
   };


   module.exports = {
      getList,
      getSqlgf2List,
      getSqlgf3List
   };
