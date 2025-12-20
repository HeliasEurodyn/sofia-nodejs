const pool = require('../db');
const { v4: uuid } = require('uuid');
const ModelHelper = require('../helpers/ModelHelper');

module.exports = {

   tables : {
      data_catalog_business_object: {
         wizard_id: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         file_schema_filename: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         profile_selector: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         file_schema_sample: { type: 'longtext',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         file_schema: { type: 'longtext',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         data_catalog_service_id: { type: 'bigint',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         file_schema_sample_filename: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         type_of_communication: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         type: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         profile_description: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         status: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         id: { type: 'varchar',  primary: true,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         short_order: { type: 'bigint',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         code: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         name: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true }
      },
      data_catalog_business_object_to_service: {
         id: { type: 'bigint',  primary: true,  autoIncrement: true,  isSaveStatement: false,  insert: true,  update: true },
         data_catalog_business_object_id: { type: 'bigint',  primary: false,  autoIncrement: false,  isSaveStatement: true,  insert: true,  update: true },
         data_catalog_service_id: { type: 'bigint',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true }
      },
      data_catalog_service: {
         id: { type: 'varchar',  primary: true,  autoIncrement: false,  isSaveStatement: true,  insert: true,  update: true },
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

         const data_catalog_business_object_obj = data.data_catalog_business_object_obj;
         data_catalog_business_object_obj.id = uuid();
         await ModelHelper.insert(conn, 'data_catalog_business_object', module.exports.tables['data_catalog_business_object'], data_catalog_business_object_obj);

         for (const data_catalog_business_object_to_service_obj of data_catalog_business_object_obj.data_catalog_business_object_to_service_obj)
            {

            data_catalog_business_object_to_service_obj.data_catalog_business_object_id = data_catalog_business_object_obj.id;
            await ModelHelper.insert(conn, 'data_catalog_business_object_to_service', module.exports.tables['data_catalog_business_object_to_service'], data_catalog_business_object_to_service_obj);

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

   update: async (data) => {
      let sql, params, res;
      const conn = await pool.getConnection();

      try {
         await conn.beginTransaction();

         const data_catalog_business_object_obj = data.data_catalog_business_object_obj;
         await ModelHelper.update(conn, 'data_catalog_business_object', module.exports.tables['data_catalog_business_object'], data_catalog_business_object_obj);

         for (const data_catalog_business_object_to_service_obj of data_catalog_business_object_obj.data_catalog_business_object_to_service_obj)
            {
            data_catalog_business_object_to_service_obj.data_catalog_business_object_id = data_catalog_business_object_obj.id;
            await ModelHelper.insertOrUpdate(conn, 'data_catalog_business_object_to_service', module.exports.tables['data_catalog_business_object_to_service'], data_catalog_business_object_to_service_obj);
            }
         await ModelHelper.deleteMissing(conn, 'data_catalog_business_object_to_service', module.exports.tables['data_catalog_business_object_to_service'], data_catalog_business_object_obj.data_catalog_business_object_to_service_obj);

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

         /* SELECTION QUERY - data_catalog_business_object - */

         const data_catalog_business_objectFilters = {
            data_catalog_business_object_obj_id: id
         };
         const [data_catalog_business_object_results] = await conn.query(
         `SELECT wizard_id, file_schema_filename, profile_selector, file_schema_sample, file_schema, data_catalog_service_id, file_schema_sample_filename, type_of_communication, type, profile_description, status, id, short_order, code, name
          FROM data_catalog_business_object
         WHERE data_catalog_business_object.id = :data_catalog_business_object_obj_id;`, data_catalog_business_objectFilters );

         let data_catalog_business_object = {};
         data.data_catalog_business_object_obj = {};
         if (data_catalog_business_object_results.length > 0)
         {
            data_catalog_business_object = data_catalog_business_object_results[0];
            data.data_catalog_business_object_obj = data_catalog_business_object;
         }

         /* SELECTION QUERY - data_catalog_business_object_to_service - */

         const data_catalog_business_object_to_serviceFilters = {
            data_catalog_business_object_to_service_obj_data_catalog_business_object_id: data_catalog_business_object?.id
         };
         const [data_catalog_business_object_to_service_results] = await conn.query(
         `SELECT id, data_catalog_business_object_id, data_catalog_service_id
          FROM data_catalog_business_object_to_service
         WHERE data_catalog_business_object_to_service.data_catalog_business_object_id = :data_catalog_business_object_to_service_obj_data_catalog_business_object_id;`, data_catalog_business_object_to_serviceFilters );

            data.data_catalog_business_object_obj.data_catalog_business_object_to_service_obj = data_catalog_business_object_to_service_results;

         for (const data_catalog_business_object_to_service of data_catalog_business_object_to_service_results)
            data_catalog_business_object_to_service{

            /* SELECTION QUERY - data_catalog_service - */

            const data_catalog_serviceFilters = {
               data_catalog_service_obj_id: data_catalog_business_object_to_service?.data_catalog_service_id
            };
            const [data_catalog_service_results] = await conn.query(
            `SELECT id, short_order, code, name, short_description, data_catalog_category_id
             FROM data_catalog_service
            WHERE data_catalog_service.id = :data_catalog_service_obj_id;`, data_catalog_serviceFilters );

            let data_catalog_service = {};
            data.data_catalog_business_object_obj.data_catalog_business_object_to_service_obj.data_catalog_service_obj = {};
            if (data_catalog_service_results.length > 0)
            {
               data_catalog_service = data_catalog_service_results[0];
               data.data_catalog_business_object_obj.data_catalog_business_object_to_service_obj.data_catalog_service_obj = data_catalog_service;
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
            data.data_catalog_business_object_obj.data_catalog_business_object_to_service_obj.data_catalog_service_obj.data_catalog_category_obj = {};
            if (data_catalog_category_results.length > 0)
            {
               data_catalog_category = data_catalog_category_results[0];
               data.data_catalog_business_object_obj.data_catalog_business_object_to_service_obj.data_catalog_service_obj.data_catalog_category_obj = data_catalog_category;
            }
            data_catalog_business_object_to_service}

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

         const data_catalog_business_objectFilters = {
            data_catalog_business_object_obj_id: id
         };

         const [data_catalog_business_object_results] = await conn.query(
         `SELECT id
          FROM data_catalog_business_object
         WHERE data_catalog_business_object.id = :data_catalog_business_object_obj_id;`, data_catalog_business_objectFilters );

         let data_catalog_business_object = {};
         data.data_catalog_business_object_obj = {};
         if (data_catalog_business_object_results.length > 0)
         {
            data_catalog_business_object = data_catalog_business_object_results[0];
            data.data_catalog_business_object_obj = data_catalog_business_object;
         }

         const data_catalog_business_object_to_serviceFilters = {
            data_catalog_business_object_to_service_obj_data_catalog_business_object_id: data_catalog_business_object?.id
         };

         const [data_catalog_business_object_to_service_results] = await conn.query(
         `SELECT id, data_catalog_business_object_id, data_catalog_service_id
          FROM data_catalog_business_object_to_service
         WHERE data_catalog_business_object_to_service.data_catalog_business_object_id = :data_catalog_business_object_to_service_obj_data_catalog_business_object_id;`, data_catalog_business_object_to_serviceFilters );

         data.data_catalog_business_object_obj.data_catalog_business_object_to_service_obj = data_catalog_business_object_to_service_results;
         for (const data_catalog_business_object_to_service of data_catalog_business_object_to_service_results)
            data_catalog_business_object_to_service{
            data_catalog_business_object_to_service}

         /* DELETE FROM DATABASE USING KEYS */

         const data_catalog_business_object_obj = data.data_catalog_business_object_obj;
         await conn.query(
            `DELETE FROM data_catalog_business_object WHERE id = :id`, data_catalog_business_object_obj );

         for (const data_catalog_business_object_to_service_obj of data_catalog_business_object_obj.data_catalog_business_object_to_service_obj) {
            await conn.query(
               `DELETE FROM data_catalog_business_object_to_service WHERE id = :id`, data_catalog_business_object_to_service_obj );
            data_catalog_business_object_to_service_obj.id = data_catalog_business_object_to_service_result.insertId;
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