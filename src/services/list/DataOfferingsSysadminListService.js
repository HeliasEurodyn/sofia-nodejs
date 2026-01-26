const DataOfferingsSysAdminListModel = require('../../models/list/DataOfferingsSysAdminListModel');

   const getList = async ({ data, ctx }) => {
      const { userId } = ctx;

      return DataOfferingsSysAdminListModel.getList({
         filters: data,
         userId
      });
   };


   const getSqlgf1List = async ({ data, ctx }) => {
      const { userId } = ctx;

      return DataOfferingsSysAdminListModel.getSqlgf1List({
         ...data,
         userId
      });
   };


   const getSqlgf2List = async ({ data, ctx }) => {
      const { userId } = ctx;

      return DataOfferingsSysAdminListModel.getSqlgf2List({
         ...data,
         userId
      });
   };


   const getSqlgf3List = async ({ data, ctx }) => {
      const { userId } = ctx;

      return DataOfferingsSysAdminListModel.getSqlgf3List({
         ...data,
         userId
      });
   };


   const getSqlgf4List = async ({ data, ctx }) => {
      const { userId } = ctx;

      return DataOfferingsSysAdminListModel.getSqlgf4List({
         ...data,
         userId
      });
   };


   module.exports = {
      getList,
      getSqlgf1List,
      getSqlgf2List,
      getSqlgf3List,
      getSqlgf4List
   };
