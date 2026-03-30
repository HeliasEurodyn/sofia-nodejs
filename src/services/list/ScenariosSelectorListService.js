const ScenariosSelectorListModel = require('../../models/list/ScenariosSelectorListModel');

   const getList = async ({ data, ctx }) => {
      const { userId } = ctx;

      return ScenariosSelectorListModel.getList({
         filters: data,
         userId
      });
   };


   module.exports = {
      getList
   };
