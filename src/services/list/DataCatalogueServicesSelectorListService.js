const DataCatalogueServicesSelectorListModel = require('../../models/list/DataCatalogueServicesSelectorListModel');

   const getList = async ({ data, ctx }) => {
      const { userId } = ctx;

      return DataCatalogueServicesSelectorListModel.getList({
         filters: data,
         userId
      });
   };


   const getSqlgf1List = async ({ data, ctx }) => {
      const { userId } = ctx;

      return DataCatalogueServicesSelectorListModel.getSqlgf1List({
         ...data,
         userId
      });
   };


   module.exports = {
      getList,
      getSqlgf1List
   };
