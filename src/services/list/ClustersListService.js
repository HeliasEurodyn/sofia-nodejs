const ClustersListModel = require('../../models/list/ClustersListModel');

   const getList = async ({ data, ctx }) => {
      const { userId } = ctx;

      return ClustersListModel.getList({
         filters: data,
         userId
      });
   };


   module.exports = {
      getList
   };
