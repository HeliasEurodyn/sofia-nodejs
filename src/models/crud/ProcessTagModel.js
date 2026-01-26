const pool = require('../../db');
const { v4: uuid } = require('uuid');
const ModelHelper = require('../../helpers/ModelHelper');

module.exports = {

   tables : {
      process_tag: {
         id: { type: 'varchar',  primary: true,  autoIncrement: false,  isSaveStatement: true,  insert: true,  update: true },
         title: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true }
      }
   },

   create: async ({ data, userId }) => {
      let sql, params, res;
      const conn = await pool.getConnection();

      try {
         await conn.beginTransaction();

         const process_tag_obj = data.process_tag_obj;
         process_tag_obj.id = uuid();
         await ModelHelper.insert(conn, 'process_tag', module.exports.tables['process_tag'], process_tag_obj);

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

         const process_tag_obj = data.process_tag_obj;
         await ModelHelper.update(conn, 'process_tag', module.exports.tables['process_tag'], process_tag_obj);

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

         /* SELECTION QUERY - process_tag - */

         const process_tagFilters = [id
         ];
         const [process_tag_results] = await conn.execute(
         `SELECT id, title
          FROM process_tag
         WHERE process_tag.id = ? `, process_tagFilters );

         let process_tag = {};
         data.process_tag_obj = {};
         if (process_tag_results.length > 0)
         {
            process_tag = process_tag_results[0];
            data.process_tag_obj = process_tag;
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

         const process_tagFilters = [id
         ];

         const [process_tag_results] = await conn.execute(
         `SELECT id
          FROM process_tag
         WHERE process_tag.id = ? `, process_tagFilters );

         let process_tag = {};
         data.process_tag_obj = {};
         if (process_tag_results.length > 0)
         {
            process_tag = process_tag_results[0];
            data.process_tag_obj = process_tag;
         }


         /* DELETE FROM DATABASE USING KEYS */

         const process_tag_obj = data.process_tag_obj;
         await conn.execute(
            `DELETE FROM process_tag WHERE id = :id`, process_tag_obj );

         await conn.commit();

      } catch (err) {
         await conn.rollback();
         throw err;
      } finally {
         conn.release();
      }
   }

}