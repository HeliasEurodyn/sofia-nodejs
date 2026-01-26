const DataCatalogueServicesListModel = require('../../models/list/DataCatalogueServicesListModel');

   const getList = async ({ data, ctx }) => {
      const { userId } = ctx;

      return DataCatalogueServicesListModel.getList({
         filters: data,
         userId
      });
   };


   const getSqlgf1List = async ({ data, ctx }) => {
      const { userId } = ctx;

      return DataCatalogueServicesListModel.getSqlgf1List({
         ...data,
         userId
      });
   };


   module.exports = {
      getList,
      getSqlgf1List
   };
