const CompaniesListModel = require('../../models/list/CompaniesListModel');

   const getList = async ({ data, ctx }) => {
      const { userId } = ctx;

      return CompaniesListModel.getList({
         filters: data,
         userId
      });
   };


   module.exports = {
      getList
   };
