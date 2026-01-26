const DataCatalogueCategoryApiListModel = require('../../models/list/DataCatalogueCategoryApiListModel');

   const getList = async ({ data, ctx }) => {
      const { userId } = ctx;

      return DataCatalogueCategoryApiListModel.getList({
         filters: data,
         userId
      });
   };


   module.exports = {
      getList
   };
