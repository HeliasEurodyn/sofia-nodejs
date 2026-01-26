const pool = require('../../db');
const { v4: uuid } = require('uuid');
const ModelHelper = require('../../helpers/ModelHelper');

module.exports = {

   tables : {
      data_catalog_business_object: {
         file_schema_sample: { type: 'longtext',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         type_of_communication: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         file_schema: { type: 'longtext',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         status: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         file_schema_filename: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         wizard_id: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         profile_selector: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         file_schema_sample_filename: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         data_catalog_service_id: { type: 'bigint',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         profile_description: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         type: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         id: { type: 'varchar',  primary: true,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         short_order: { type: 'bigint',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         code: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         name: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true }
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
      },
      wizards: {
         icon: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         id: { type: 'varchar',  primary: true,  autoIncrement: false,  isSaveStatement: true,  insert: true,  update: true },
         description: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         title: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         name: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true }
      }
   },

   create: async ({ data, userId }) => {
      let sql, params, res;
      const conn = await pool.getConnection();

      try {
         await conn.beginTransaction();

         const data_catalog_business_object_obj = data.data_catalog_business_object_obj;
         data_catalog_business_object_obj.id = uuid();
         await ModelHelper.insert(conn, 'data_catalog_business_object', module.exports.tables['data_catalog_business_object'], data_catalog_business_object_obj);

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

         const data_catalog_business_object_obj = data.data_catalog_business_object_obj;
         await ModelHelper.update(conn, 'data_catalog_business_object', module.exports.tables['data_catalog_business_object'], data_catalog_business_object_obj);

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

         /* SELECTION QUERY - data_catalog_business_object - */

         const data_catalog_business_objectFilters = [id
         ];
         const [data_catalog_business_object_results] = await conn.execute(
         `SELECT file_schema_sample, type_of_communication, file_schema, status, file_schema_filename, wizard_id, profile_selector, file_schema_sample_filename, data_catalog_service_id, profile_description, type, id, short_order, code, name
          FROM data_catalog_business_object
         WHERE data_catalog_business_object.id = ? `, data_catalog_business_objectFilters );

         let data_catalog_business_object = {};
         data.data_catalog_business_object_obj = {};
         if (data_catalog_business_object_results.length > 0)
         {
            data_catalog_business_object = data_catalog_business_object_results[0];
            data.data_catalog_business_object_obj = data_catalog_business_object;
         } else {
            return data;
         }

         /* SELECTION QUERY - data_catalog_service - */

         const data_catalog_serviceFilters = [data_catalog_business_object?.data_catalog_service_id
         ];
         const [data_catalog_service_results] = await conn.execute(
         `SELECT id, short_order, code, name, short_description, data_catalog_category_id
          FROM data_catalog_service
         WHERE data_catalog_service.id = ? `, data_catalog_serviceFilters );

         let data_catalog_service = {};
         data.data_catalog_business_object_obj.data_catalog_service_obj = {};
         if (data_catalog_service_results.length > 0)
         {
            data_catalog_service = data_catalog_service_results[0];
            data.data_catalog_business_object_obj.data_catalog_service_obj = data_catalog_service;
         } else {
            return data;
         }

         /* SELECTION QUERY - data_catalog_category - */

         const data_catalog_categoryFilters = [data_catalog_service?.data_catalog_category_id
         ];
         const [data_catalog_category_results] = await conn.execute(
         `SELECT id, short_order, code, name
          FROM data_catalog_category
         WHERE data_catalog_category.id = ? `, data_catalog_categoryFilters );

         let data_catalog_category = {};
         data.data_catalog_business_object_obj.data_catalog_service_obj.data_catalog_category_obj = {};
         if (data_catalog_category_results.length > 0)
         {
            data_catalog_category = data_catalog_category_results[0];
            data.data_catalog_business_object_obj.data_catalog_service_obj.data_catalog_category_obj = data_catalog_category;
         } else {
            return data;
         }

         /* SELECTION QUERY - wizards - */

         const wizardsFilters = [data_catalog_business_object?.wizard_id
         ];
         const [wizards_results] = await conn.execute(
         `SELECT icon, id, description, title, name
          FROM wizards
         WHERE wizards.id = ? `, wizardsFilters );

         let wizards = {};
         data.data_catalog_business_object_obj.wizards_obj = {};
         if (wizards_results.length > 0)
         {
            wizards = wizards_results[0];
            data.data_catalog_business_object_obj.wizards_obj = wizards;
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

         const data_catalog_business_objectFilters = [id
         ];

         const [data_catalog_business_object_results] = await conn.execute(
         `SELECT wizard_id, data_catalog_service_id, id
          FROM data_catalog_business_object
         WHERE data_catalog_business_object.id = ? `, data_catalog_business_objectFilters );

         let data_catalog_business_object = {};
         data.data_catalog_business_object_obj = {};
         if (data_catalog_business_object_results.length > 0)
         {
            data_catalog_business_object = data_catalog_business_object_results[0];
            data.data_catalog_business_object_obj = data_catalog_business_object;
         }


         /* DELETE FROM DATABASE USING KEYS */

         const data_catalog_business_object_obj = data.data_catalog_business_object_obj;
         await conn.execute(
            `DELETE FROM data_catalog_business_object WHERE id = :id`, data_catalog_business_object_obj );

         await conn.commit();

      } catch (err) {
         await conn.rollback();
         throw err;
      } finally {
         conn.release();
      }
   }

}