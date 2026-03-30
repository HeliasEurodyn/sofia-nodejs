const ScenarioModel = require('../models/crud/ScenarioModel');
const Neo4jService = require('./neo4jService');

const splitCypherStatements = (query) => {
   const statements = [];
   let current = '';
   let inSingleQuote = false;
   let inDoubleQuote = false;
   let inBacktick = false;
   let inLineComment = false;
   let inBlockComment = false;
   let isEscaped = false;

   for (let index = 0; index < query.length; index += 1) {
      const char = query[index];
      const nextChar = query[index + 1];

      if (inLineComment) {
         current += char;
         if (char === '\n') {
            inLineComment = false;
         }
         continue;
      }

      if (inBlockComment) {
         current += char;
         if (char === '*' && nextChar === '/') {
            current += nextChar;
            index += 1;
            inBlockComment = false;
         }
         continue;
      }

      if (!inSingleQuote && !inDoubleQuote && !inBacktick) {
         if (char === '/' && nextChar === '/') {
            current += char;
            current += nextChar;
            index += 1;
            inLineComment = true;
            continue;
         }

         if (char === '/' && nextChar === '*') {
            current += char;
            current += nextChar;
            index += 1;
            inBlockComment = true;
            continue;
         }

         if (char === ';') {
            const statement = current.trim();
            if (statement) {
               statements.push(statement);
            }
            current = '';
            continue;
         }
      }

      current += char;

      if (isEscaped) {
         isEscaped = false;
         continue;
      }

      if ((inSingleQuote || inDoubleQuote) && char === '\\') {
         isEscaped = true;
         continue;
      }

      if (!inDoubleQuote && !inBacktick && char === '\'') {
         inSingleQuote = !inSingleQuote;
         continue;
      }

      if (!inSingleQuote && !inBacktick && char === '"') {
         inDoubleQuote = !inDoubleQuote;
         continue;
      }

      if (!inSingleQuote && !inDoubleQuote && char === '`') {
         inBacktick = !inBacktick;
      }
   }

   const finalStatement = current.trim();
   if (finalStatement) {
      statements.push(finalStatement);
   }

   return statements;
};

const decodeScenarioQuery = (encodedQuery) => {
   if (typeof encodedQuery !== 'string' || encodedQuery.trim() === '') {
      throw new Error('SCENARIO_QUERY_INVALID');
   }

   const decodedQuery = Buffer.from(encodedQuery, 'base64').toString('utf8').trim();

   if (!decodedQuery) {
      throw new Error('SCENARIO_QUERY_INVALID');
   }

   return decodedQuery.replace(/;+\s*$/, '');
};

const prepareScenarioQuery = (scenarioQueryObj) => {
   const query = decodeScenarioQuery(scenarioQueryObj.scenario_query);
   const statements = splitCypherStatements(query);

   if (statements.length === 0) {
      throw new Error('SCENARIO_QUERY_INVALID');
   }

   return {
      id: scenarioQueryObj.id,
      name: scenarioQueryObj.name,
      sort_order: scenarioQueryObj.sort_order,
      query,
      statements
   };
};

const resolve = async (data) => {
   return data;
};

const execute = async ({ id, neo4jDriver, ctx }) => {
   const { userId } = ctx;
   const scenario = await ScenarioModel.getById({
      id,
      userId
   });

   const scenarioObj = scenario?.scenario_obj;
   if (!scenarioObj?.id) {
      return null;
   }

   const scenarioQueries = Array.isArray(scenarioObj.scenario_query_obj)
      ? [...scenarioObj.scenario_query_obj]
      : [];

   if (scenarioQueries.length === 0) {
      throw new Error('SCENARIO_HAS_NO_QUERIES');
   }

   const preparedQueries = scenarioQueries
      .sort((left, right) => Number(left.sort_order || 0) - Number(right.sort_order || 0))
      .map(prepareScenarioQuery);

   const neo4jService = new Neo4jService(neo4jDriver);
   const executed_steps = await neo4jService.executeQueries(preparedQueries);

   return {
      scenario_id: scenarioObj.id,
      scenario_name: scenarioObj.name,
      executed_steps
   };
};

module.exports = {
   resolve,
   execute
};

