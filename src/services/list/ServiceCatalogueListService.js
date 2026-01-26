const ServiceCatalogueListModel = require('../../models/list/ServiceCatalogueListModel');

   const getList = async ({ data, ctx }) => {
      const { userId } = ctx;

      return ServiceCatalogueListModel.getList({
         filters: data,
         userId
      });
   };


   const getSqlgf2List = async ({ data, ctx }) => {
      const { userId } = ctx;

      return ServiceCatalogueListModel.getSqlgf2List({
         ...data,
         userId
      });
   };


   const getSqlgf3List = async ({ data, ctx }) => {
      const { userId } = ctx;

      return ServiceCatalogueListModel.getSqlgf3List({
         ...data,
         userId
      });
   };


   module.exports = {
      getList,
      getSqlgf2List,
      getSqlgf3List
   };
