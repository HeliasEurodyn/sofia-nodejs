const CategoriesListModel = require('../../models/list/CategoriesListModel');

   const getList = async ({ data, ctx }) => {
      const { userId } = ctx;

      return CategoriesListModel.getList({
         filters: data,
         userId
      });
   };


   module.exports = {
      getList
   };
