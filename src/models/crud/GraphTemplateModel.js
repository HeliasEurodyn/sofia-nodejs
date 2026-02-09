const pool = require('../../db');
const { v4: uuid } = require('uuid');
const ModelHelper = require('../../helpers/ModelHelper');

module.exports = {

   tables : {
      graph_template: {
         id: { type: 'varchar',  primary: true,  autoIncrement: false,  isSaveStatement: true,  insert: true,  update: true },
         created_by: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         created_on: { type: 'datetime',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         modified_by: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         modified_on: { type: 'datetime',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         node_html_label: { type: 'text',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         elements_style: { type: 'text',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         name: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         is_default: { type: 'int',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         sort_order: { type: 'int',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true }
      }
   },

   create: async ({ data, userId }) => {
      let sql, params, res;
      const conn = await pool.getConnection();

      try {
         await conn.beginTransaction();

         const graph_template_obj = data.graph_template_obj;
         graph_template_obj.id = uuid();
         await ModelHelper.insert(conn, 'graph_template', module.exports.tables['graph_template'], graph_template_obj);

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

         const graph_template_obj = data.graph_template_obj;
         await ModelHelper.update(conn, 'graph_template', module.exports.tables['graph_template'], graph_template_obj);

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

         /* SELECTION QUERY - graph_template - */

         const graph_templateFilters = [id
         ];
         const [graph_template_results] = await conn.execute(
         `SELECT id, created_by, created_on, modified_by, modified_on, node_html_label, elements_style, name, is_default, sort_order
          FROM graph_template
         WHERE graph_template.id = ? `, graph_templateFilters );

         let graph_template = {};
         data.graph_template_obj = {};
         if (graph_template_results.length > 0)
         {
            graph_template = graph_template_results[0];
            data.graph_template_obj = graph_template;
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

         const graph_templateFilters = [id
         ];

         const [graph_template_results] = await conn.execute(
         `SELECT id
          FROM graph_template
         WHERE graph_template.id = ? `, graph_templateFilters );

         let graph_template = {};
         data.graph_template_obj = {};
         if (graph_template_results.length > 0)
         {
            graph_template = graph_template_results[0];
            data.graph_template_obj = graph_template;
         }


         /* DELETE FROM DATABASE USING KEYS */

         const graph_template_obj = data.graph_template_obj;
         await conn.execute(
            `DELETE FROM graph_template WHERE id = :id`, graph_template_obj );

         await conn.commit();

      } catch (err) {
         await conn.rollback();
         throw err;
      } finally {
         conn.release();
      }
   }

}