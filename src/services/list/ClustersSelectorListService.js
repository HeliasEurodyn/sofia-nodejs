const ClustersSelectorListModel = require('../../models/list/ClustersSelectorListModel');

   const getList = async ({ data, ctx }) => {
      const { userId } = ctx;

      return ClustersSelectorListModel.getList({
         filters: data,
         userId
      });
   };


   module.exports = {
      getList
   };
