const pool = require('../db');
const { v4: uuid } = require('uuid');
const ModelHelper = require('../helpers/ModelHelper');

module.exports = {

   tables : {
      onenet_role: {
         id: { type: 'bigint',  primary: true,  autoIncrement: true,  isSaveStatement: false,  insert: true,  update: true },
         created_by: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         created_on: { type: 'datetime',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         modified_by: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         modified_on: { type: 'datetime',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         name: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         code: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true }
      }
   },

   create: async (data) => {
      let sql, params, res;
      const conn = await pool.getConnection();

      try {
         await conn.beginTransaction();

         const onenet_role_obj = data.onenet_role_obj;
         onenet_role_obj.id = uuid();
         await ModelHelper.insert(conn, 'onenet_role', module.exports.tables['onenet_role'], onenet_role_obj);

         await conn.commit();

         return data;

      } catch (err) {
         await conn.rollback();
         throw err;
      } finally {
         conn.release();
      }
   },

   update: async (data) => {
      let sql, params, res;
      const conn = await pool.getConnection();

      try {
         await conn.beginTransaction();

         const onenet_role_obj = data.onenet_role_obj;
         await ModelHelper.update(conn, 'onenet_role', module.exports.tables['onenet_role'], onenet_role_obj);

         await conn.commit();

         return data;

      } catch (err) {
         await conn.rollback();
         throw err;
      } finally {
         conn.release();
      }
   },

   getById: async (id) => {
      const conn = await pool.getConnection();
      const data = {};

      try {

         /* SELECTION QUERY - onenet_role - */

         const onenet_roleFilters = {
            onenet_role_obj_id: id
         };
         const [onenet_role_results] = await conn.query(
         `SELECT id, created_by, created_on, modified_by, modified_on, name, code
          FROM onenet_role
         WHERE onenet_role.id = :onenet_role_obj_id;`, onenet_roleFilters );

         let onenet_role = {};
         data.onenet_role_obj = {};
         if (onenet_role_results.length > 0)
         {
            onenet_role = onenet_role_results[0];
            data.onenet_role_obj = onenet_role;
         }

         return data;

      } catch (err) {
         throw err;
      } finally {
         conn.release();
      }
   },

   delete: async (id) => {
      const conn = await pool.getConnection();
      const data = {};
      try {
         await conn.beginTransaction();

         /* SELECT KEYS FROM DATABASE */

         const onenet_roleFilters = {
            onenet_role_obj_id: id
         };

         const [onenet_role_results] = await conn.query(
         `SELECT id
          FROM onenet_role
         WHERE onenet_role.id = :onenet_role_obj_id;`, onenet_roleFilters );

         let onenet_role = {};
         data.onenet_role_obj = {};
         if (onenet_role_results.length > 0)
         {
            onenet_role = onenet_role_results[0];
            data.onenet_role_obj = onenet_role;
         }


         /* DELETE FROM DATABASE USING KEYS */

         const onenet_role_obj = data.onenet_role_obj;
         await conn.query(
            `DELETE FROM onenet_role WHERE id = :id`, onenet_role_obj );
         onenet_role_obj.id = onenet_role_result.insertId;

         await conn.commit();

      } catch (err) {
         await conn.rollback();
         throw err;
      } finally {
         conn.release();
      }
   }

}