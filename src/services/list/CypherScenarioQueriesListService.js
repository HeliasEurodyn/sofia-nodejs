const CypherScenarioQueriesListModel = require('../../models/list/CypherScenarioQueriesListModel');

   const getList = async ({ data, ctx }) => {
      const { userId } = ctx;

      return CypherScenarioQueriesListModel.getList({
         filters: data,
         userId
      });
   };


   module.exports = {
      getList
   };
