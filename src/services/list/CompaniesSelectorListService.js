const CompaniesSelectorListModel = require('../../models/list/CompaniesSelectorListModel');

   const getList = async ({ data, ctx }) => {
      const { userId } = ctx;

      return CompaniesSelectorListModel.getList({
         filters: data,
         userId
      });
   };


   module.exports = {
      getList
   };
