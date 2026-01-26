const WizardsListModel = require('../../models/list/WizardsListModel');

   const getList = async ({ data, ctx }) => {
      const { userId } = ctx;

      return WizardsListModel.getList({
         filters: data,
         userId
      });
   };


   module.exports = {
      getList
   };
