const DataCatalogueServicesApiListModel = require('../../models/list/DataCatalogueServicesApiListModel');

   const getList = async ({ data, ctx }) => {
      const { userId } = ctx;

      return DataCatalogueServicesApiListModel.getList({
         filters: data,
         userId
      });
   };


   const getCategoryGroupList = async ({ data, ctx }) => {
      const { userId } = ctx;

      return DataCatalogueServicesApiListModel.getCategoryGroupList({
         ...data,
         userId
      });
   };


   module.exports = {
      getList,
      getCategoryGroupList
   };
