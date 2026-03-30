const pool = require('../../db');
const { v4: uuid } = require('uuid');
const ModelHelper = require('../../helpers/ModelHelper');

module.exports = {

   tables : {
      scenario: {
         id: { type: 'varchar',  primary: true,  autoIncrement: false,  isSaveStatement: true,  insert: true,  update: true },
         sort_order: { type: 'int',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         description: { type: 'mediumtext',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         name: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         created_by: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         created_on: { type: 'datetime',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         modified_by: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         modified_on: { type: 'datetime',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true }
      },
      scenario_query: {
         id: { type: 'varchar',  primary: true,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         scenario_query: { type: 'text',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         sort_order: { type: 'int',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         name: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         description: { type: 'text',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         scenario_id: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: true,  insert: true,  update: true }
      }
   },

   create: async ({ data, userId }) => {
      let sql, params, res;
      const conn = await pool.getConnection();

      try {
         await conn.beginTransaction();

         const scenario_obj = data.scenario_obj;
         scenario_obj.id = uuid();
         await ModelHelper.insert(conn, 'scenario', module.exports.tables['scenario'], scenario_obj);

         for (const scenario_query_obj of scenario_obj.scenario_query_obj)
            {

            scenario_query_obj.id = uuid();
            scenario_query_obj.scenario_id = scenario_obj.id;
            await ModelHelper.insert(conn, 'scenario_query', module.exports.tables['scenario_query'], scenario_query_obj);

            }

         await conn.commit();

         return data;

      } catch (err) {
         await conn.rollback();
         throw err;
      } finally {
         conn.release();
      }
   },

   update: async ({ data, userId }) => {
      let sql, params, res;
      const conn = await pool.getConnection();

      try {
         await conn.beginTransaction();

         const scenario_obj = data.scenario_obj;
         await ModelHelper.update(conn, 'scenario', module.exports.tables['scenario'], scenario_obj);

         for (const scenario_query_obj of scenario_obj.scenario_query_obj)
            {
            scenario_query_obj.scenario_id = scenario_obj.id;
            const shouldInsert = await ModelHelper.shouldInsert(module.exports.tables['scenario_query'], scenario_query_obj);
            if(shouldInsert)
               {
            scenario_query_obj.id = uuid();
               await ModelHelper.insert(conn, 'scenario_query', module.exports.tables['scenario_query'], scenario_query_obj);
               }
               else
               {
               await ModelHelper.update(conn, 'scenario_query', module.exports.tables['scenario_query'], scenario_query_obj);
               } 
            }
         await ModelHelper.deleteMissing(conn, 'scenario_query', module.exports.tables['scenario_query'], scenario_obj.scenario_query_obj);

         await conn.commit();

         return data;

      } catch (err) {
         await conn.rollback();
         throw err;
      } finally {
         conn.release();
      }
   },

   getById: async ({ id, userId }) => {
      const conn = await pool.getConnection();
      const data = {};

      try {

         /* SELECTION QUERY - scenario - */

         const scenarioFilters = [id
         ];
         const [scenario_results] = await conn.execute(
         `SELECT id, sort_order, description, name, created_by, created_on, modified_by, modified_on
          FROM scenario
         WHERE scenario.id = ? `, scenarioFilters );

         let scenario = {};
         data.scenario_obj = {};
         if (scenario_results.length > 0)
         {
            scenario = scenario_results[0];
            data.scenario_obj = scenario;
         } else {
            return data;
         }

         /* SELECTION QUERY - scenario_query - */

         const scenario_queryFilters = [scenario?.id
         ];
         const [scenario_query_results] = await conn.execute(
         `SELECT id, scenario_query, sort_order, name, description, scenario_id
          FROM scenario_query
         WHERE scenario_query.scenario_id = ? `, scenario_queryFilters );

            data.scenario_obj.scenario_query_obj = scenario_query_results;


         return data;

      } catch (err) {
         throw err;
      } finally {
         conn.release();
      }
   },

   delete: async ({ id, userId }) => {
      const conn = await pool.getConnection();
      const data = {};
      try {
         await conn.beginTransaction();

         /* SELECT KEYS FROM DATABASE */

         const scenarioFilters = [id
         ];

         const [scenario_results] = await conn.execute(
         `SELECT id
          FROM scenario
         WHERE scenario.id = ? `, scenarioFilters );

         let scenario = {};
         data.scenario_obj = {};
         if (scenario_results.length > 0)
         {
            scenario = scenario_results[0];
            data.scenario_obj = scenario;
         }

         const scenario_queryFilters = [scenario?.id
         ];

         const [scenario_query_results] = await conn.execute(
         `SELECT id, scenario_id
          FROM scenario_query
         WHERE scenario_query.scenario_id = ? `, scenario_queryFilters );

         data.scenario_obj.scenario_query_obj = scenario_query_results;

         /* DELETE FROM DATABASE USING KEYS */

         const scenario_obj = data.scenario_obj;
         await conn.execute(
            `DELETE FROM scenario WHERE id = :id`, scenario_obj );

         for (const scenario_query_obj of scenario_obj.scenario_query_obj) {
            await conn.execute(
               `DELETE FROM scenario_query WHERE id = :id`, scenario_query_obj );
         }

         await conn.commit();

      } catch (err) {
         await conn.rollback();
         throw err;
      } finally {
         conn.release();
      }
   }

}