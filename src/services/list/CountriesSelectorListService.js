const CountriesSelectorListModel = require('../../models/list/CountriesSelectorListModel');

   const getList = async ({ data, ctx }) => {
      const { userId } = ctx;

      return CountriesSelectorListModel.getList({
         filters: data,
         userId
      });
   };


   const getGfNameList = async ({ data, ctx }) => {
      const { userId } = ctx;

      return CountriesSelectorListModel.getGfNameList({
         ...data,
         userId
      });
   };


   module.exports = {
      getList,
      getGfNameList
   };
