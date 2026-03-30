const pool = require('../../db');
const { v4: uuid } = require('uuid');
const ModelHelper = require('../../helpers/ModelHelper');

module.exports = {

   tables : {
      cypher_query_template: {
         scenario_id: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         id: { type: 'varchar',  primary: true,  autoIncrement: false,  isSaveStatement: true,  insert: true,  update: true },
         description: { type: 'text',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         cypher_query_template_type: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         name: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         is_default: { type: 'int',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         node_query: { type: 'text',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         relathionship_query: { type: 'text',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         sort_order: { type: 'int',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true }
      }
   },

   create: async ({ data, userId }) => {
      let sql, params, res;
      const conn = await pool.getConnection();

      try {
         await conn.beginTransaction();

         const cypher_query_template_obj = data.cypher_query_template_obj;
         cypher_query_template_obj.id = uuid();
         await ModelHelper.insert(conn, 'cypher_query_template', module.exports.tables['cypher_query_template'], cypher_query_template_obj);

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

         const cypher_query_template_obj = data.cypher_query_template_obj;
         await ModelHelper.update(conn, 'cypher_query_template', module.exports.tables['cypher_query_template'], cypher_query_template_obj);

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

         /* SELECTION QUERY - cypher_query_template - */

         const cypher_query_templateFilters = [id
         ];
         const [cypher_query_template_results] = await conn.execute(
         `SELECT scenario_id, id, description, cypher_query_template_type, name, is_default, node_query, relathionship_query, sort_order
          FROM cypher_query_template
         WHERE cypher_query_template.id = ? `, cypher_query_templateFilters );

         let cypher_query_template = {};
         data.cypher_query_template_obj = {};
         if (cypher_query_template_results.length > 0)
         {
            cypher_query_template = cypher_query_template_results[0];
            data.cypher_query_template_obj = cypher_query_template;
         } else {
            return data;
         }

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

         const cypher_query_templateFilters = [id
         ];

         const [cypher_query_template_results] = await conn.execute(
         `SELECT id
          FROM cypher_query_template
         WHERE cypher_query_template.id = ? `, cypher_query_templateFilters );

         let cypher_query_template = {};
         data.cypher_query_template_obj = {};
         if (cypher_query_template_results.length > 0)
         {
            cypher_query_template = cypher_query_template_results[0];
            data.cypher_query_template_obj = cypher_query_template;
         }


         /* DELETE FROM DATABASE USING KEYS */

         const cypher_query_template_obj = data.cypher_query_template_obj;
         await conn.execute(
            `DELETE FROM cypher_query_template WHERE id = :id`, cypher_query_template_obj );

         await conn.commit();

      } catch (err) {
         await conn.rollback();
         throw err;
      } finally {
         conn.release();
      }
   }

}