const CpesListModel = require('../../models/list/CpesListModel');

   const getList = async ({ data, ctx }) => {
      const { userId } = ctx;

      return CpesListModel.getList({
         filters: data,
         userId
      });
   };


   module.exports = {
      getList
   };
