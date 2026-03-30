const ScenarioCypherQueriesThisListModel = require('../../models/list/ScenarioCypherQueriesThisListModel');

   const getList = async ({ data, ctx }) => {
      const { userId } = ctx;

      return ScenarioCypherQueriesThisListModel.getList({
         filters: data,
         userId
      });
   };


   module.exports = {
      getList
   };
