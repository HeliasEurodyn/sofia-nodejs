const DataCatalogueCategorySelectorListModel = require('../../models/list/DataCatalogueCategorySelectorListModel');

   const getList = async ({ data, ctx }) => {
      const { userId } = ctx;

      return DataCatalogueCategorySelectorListModel.getList({
         filters: data,
         userId
      });
   };


   module.exports = {
      getList
   };
