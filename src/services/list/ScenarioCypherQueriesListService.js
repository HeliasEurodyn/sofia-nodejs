const ScenarioCypherQueriesListModel = require('../../models/list/ScenarioCypherQueriesListModel');

   const getList = async ({ data, ctx }) => {
      const { userId } = ctx;

      return ScenarioCypherQueriesListModel.getList({
         filters: data,
         userId
      });
   };


   module.exports = {
      getList
   };
