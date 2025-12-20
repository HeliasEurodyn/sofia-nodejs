const pool = require('../db');
const { v4: uuid } = require('uuid');
const ModelHelper = require('../helpers/ModelHelper');

module.exports = {

   tables : {
      provide_data: {
         notification_send: { type: 'int',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         id: { type: 'varchar',  primary: true,  autoIncrement: false,  isSaveStatement: true,  insert: true,  update: true },
         created_by: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         created_on: { type: 'datetime',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         modified_by: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         modified_on: { type: 'datetime',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         file: { type: 'mediumtext',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         file_name: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         file_size: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         file_type: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         title: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         description: { type: 'text',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         service_offering_id: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         provide_user: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true }
      }
   },

   create: async (data) => {
      let sql, params, res;
      const conn = await pool.getConnection();

      try {
         await conn.beginTransaction();

         const provide_data_obj = data.provide_data_obj;
         provide_data_obj.id = uuid();
         await ModelHelper.insert(conn, 'provide_data', module.exports.tables['provide_data'], provide_data_obj);

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

         const provide_data_obj = data.provide_data_obj;
         await ModelHelper.update(conn, 'provide_data', module.exports.tables['provide_data'], provide_data_obj);

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

         /* SELECTION QUERY - provide_data - */

         const provide_dataFilters = {
            provide_data_obj_id: id
         };
         const [provide_data_results] = await conn.query(
         `SELECT notification_send, id, created_by, created_on, modified_by, modified_on, file, file_name, file_size, file_type, title, description, service_offering_id, provide_user
          FROM provide_data
         WHERE provide_data.id = :provide_data_obj_id;`, provide_dataFilters );

         let provide_data = {};
         data.provide_data_obj = {};
         if (provide_data_results.length > 0)
         {
            provide_data = provide_data_results[0];
            data.provide_data_obj = provide_data;
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

         const provide_dataFilters = {
            provide_data_obj_id: id
         };

         const [provide_data_results] = await conn.query(
         `SELECT id
          FROM provide_data
         WHERE provide_data.id = :provide_data_obj_id;`, provide_dataFilters );

         let provide_data = {};
         data.provide_data_obj = {};
         if (provide_data_results.length > 0)
         {
            provide_data = provide_data_results[0];
            data.provide_data_obj = provide_data;
         }


         /* DELETE FROM DATABASE USING KEYS */

         const provide_data_obj = data.provide_data_obj;
         await conn.query(
            `DELETE FROM provide_data WHERE id = :id`, provide_data_obj );

         await conn.commit();

      } catch (err) {
         await conn.rollback();
         throw err;
      } finally {
         conn.release();
      }
   }

}