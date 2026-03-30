const OpenvasReportSelectorListModel = require('../../models/list/OpenvasReportSelectorListModel');

   const getList = async ({ data, ctx }) => {
      const { userId } = ctx;

      return OpenvasReportSelectorListModel.getList({
         filters: data,
         userId
      });
   };


   module.exports = {
      getList
   };
