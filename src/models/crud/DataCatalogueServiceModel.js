const pool = require('../db');
const { v4: uuid } = require('uuid');
const ModelHelper = require('../helpers/ModelHelper');

module.exports = {

   tables : {
      data_catalog_service: {
         id: { type: 'varchar',  primary: true,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         short_order: { type: 'bigint',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         code: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         name: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         short_description: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         data_catalog_category_id: { type: 'bigint',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true }
      },
      data_catalog_category: {
         id: { type: 'varchar',  primary: true,  autoIncrement: false,  isSaveStatement: true,  insert: true,  update: true },
         short_order: { type: 'bigint',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         code: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         name: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true }
      }
   },

   create: async (data) => {
      let sql, params, res;
      const conn = await pool.getConnection();

      try {
         await conn.beginTransaction();

         const data_catalog_service_obj = data.data_catalog_service_obj;
         data_catalog_service_obj.id = uuid();
         await ModelHelper.insert(conn, 'data_catalog_service', module.exports.tables['data_catalog_service'], data_catalog_service_obj);

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

         const data_catalog_service_obj = data.data_catalog_service_obj;
         await ModelHelper.update(conn, 'data_catalog_service', module.exports.tables['data_catalog_service'], data_catalog_service_obj);

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

         /* SELECTION QUERY - data_catalog_service - */

         const data_catalog_serviceFilters = {
            data_catalog_service_obj_id: id
         };
         const [data_catalog_service_results] = await conn.query(
         `SELECT id, short_order, code, name, short_description, data_catalog_category_id
          FROM data_catalog_service
         WHERE data_catalog_service.id = :data_catalog_service_obj_id;`, data_catalog_serviceFilters );

         let data_catalog_service = {};
         data.data_catalog_service_obj = {};
         if (data_catalog_service_results.length > 0)
         {
            data_catalog_service = data_catalog_service_results[0];
            data.data_catalog_service_obj = data_catalog_service;
         }

         /* SELECTION QUERY - data_catalog_category - */

         const data_catalog_categoryFilters = {
            data_catalog_category_obj_id: data_catalog_service?.data_catalog_category_id
         };
         const [data_catalog_category_results] = await conn.query(
         `SELECT id, short_order, code, name
          FROM data_catalog_category
         WHERE data_catalog_category.id = :data_catalog_category_obj_id;`, data_catalog_categoryFilters );

         let data_catalog_category = {};
         data.data_catalog_service_obj.data_catalog_category_obj = {};
         if (data_catalog_category_results.length > 0)
         {
            data_catalog_category = data_catalog_category_results[0];
            data.data_catalog_service_obj.data_catalog_category_obj = data_catalog_category;
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

         const data_catalog_serviceFilters = {
            data_catalog_service_obj_id: id
         };

         const [data_catalog_service_results] = await conn.query(
         `SELECT id, data_catalog_category_id
          FROM data_catalog_service
         WHERE data_catalog_service.id = :data_catalog_service_obj_id;`, data_catalog_serviceFilters );

         let data_catalog_service = {};
         data.data_catalog_service_obj = {};
         if (data_catalog_service_results.length > 0)
         {
            data_catalog_service = data_catalog_service_results[0];
            data.data_catalog_service_obj = data_catalog_service;
         }


         /* DELETE FROM DATABASE USING KEYS */

         const data_catalog_service_obj = data.data_catalog_service_obj;
         await conn.query(
            `DELETE FROM data_catalog_service WHERE id = :id`, data_catalog_service_obj );

         await conn.commit();

      } catch (err) {
         await conn.rollback();
         throw err;
      } finally {
         conn.release();
      }
   }

}