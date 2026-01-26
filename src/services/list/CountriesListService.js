const CountriesListModel = require('../../models/list/CountriesListModel');

   const getList = async ({ data, ctx }) => {
      const { userId } = ctx;

      return CountriesListModel.getList({
         filters: data,
         userId
      });
   };


   const getGfNameList = async ({ data, ctx }) => {
      const { userId } = ctx;

      return CountriesListModel.getGfNameList({
         ...data,
         userId
      });
   };


   module.exports = {
      getList,
      getGfNameList
   };
