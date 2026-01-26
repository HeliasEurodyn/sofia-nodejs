const pool = require('../../db');
const { v4: uuid } = require('uuid');
const ModelHelper = require('../../helpers/ModelHelper');

module.exports = {

   tables : {
      data_send: {
         user_code: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         fileSize: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         fileName: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         file_type: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         status: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         id: { type: 'varchar',  primary: true,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         created_by: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         created_on: { type: 'datetime',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         modified_by: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         modified_on: { type: 'datetime',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         title: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         description: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         message: { type: 'text',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         data_catalog_data_offerings_id: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true }
      },
      data_catalog_data_offerings: {
         use_custom_semantics: { type: 'int',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         file_schema_filename: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         title: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         file_schema: { type: 'longtext',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         profile_selector: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         active_to: { type: 'datetime',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         active_to_enable: { type: 'int',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         active_from_enable: { type: 'int',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         profile_description: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         file_schema_sample: { type: 'longtext',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         status: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         file_schema_sample_filename: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         active_from: { type: 'datetime',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         id: { type: 'varchar',  primary: true,  autoIncrement: false,  isSaveStatement: true,  insert: true,  update: true },
         created_by: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         created_on: { type: 'datetime',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         modified_by: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         modified_on: { type: 'datetime',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         input_profile: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         input_data_source: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         comments: { type: 'text',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         data_catalog_business_object_id: { type: 'bigint',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true }
      },
      data_catalog_business_object: {
         status: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         type_of_communication: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         wizard_id: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         type: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         file_schema_sample: { type: 'longtext',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         file_schema: { type: 'longtext',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         profile_selector: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         file_schema_sample_filename: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         profile_description: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         file_schema_filename: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         id: { type: 'varchar',  primary: true,  autoIncrement: false,  isSaveStatement: true,  insert: true,  update: true },
         short_order: { type: 'bigint',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         code: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         name: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
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
      },
      provider: {
         broker_url: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         handler_url: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         ecc_url: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         id: { type: 'varchar',  primary: true,  autoIncrement: false,  isSaveStatement: true,  insert: true,  update: true },
         ed_api_url: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         provider_fiware_url: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true }
      }
   },

   create: async ({ data, userId }) => {
      let sql, params, res;
      const conn = await pool.getConnection();

      try {
         await conn.beginTransaction();

         const data_send_obj = data.data_send_obj;
         data_send_obj.id = uuid();
         await ModelHelper.insert(conn, 'data_send', module.exports.tables['data_send'], data_send_obj);

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

         const data_send_obj = data.data_send_obj;
         await ModelHelper.update(conn, 'data_send', module.exports.tables['data_send'], data_send_obj);

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

         /* SELECTION QUERY - data_send - */

         const data_sendFilters = [id
         ];
         const [data_send_results] = await conn.execute(
         `SELECT user_code, fileSize, fileName, file_type, status, id, created_by, created_on, modified_by, modified_on, title, description, message, data_catalog_data_offerings_id
          FROM data_send
         WHERE data_send.id = ? `, data_sendFilters );

         let data_send = {};
         data.data_send_obj = {};
         if (data_send_results.length > 0)
         {
            data_send = data_send_results[0];
            data.data_send_obj = data_send;
         } else {
            return data;
         }

         /* SELECTION QUERY - data_catalog_data_offerings - */

         const data_catalog_data_offeringsFilters = [data_send?.data_catalog_data_offerings_id
         ];
         const [data_catalog_data_offerings_results] = await conn.execute(
         `SELECT use_custom_semantics, file_schema_filename, title, file_schema, profile_selector, active_to, active_to_enable, active_from_enable, profile_description, file_schema_sample, status, file_schema_sample_filename, active_from, id, created_by, created_on, modified_by, modified_on, input_profile, input_data_source, comments, data_catalog_business_object_id
          FROM data_catalog_data_offerings
         WHERE data_catalog_data_offerings.id = ? `, data_catalog_data_offeringsFilters );

         let data_catalog_data_offerings = {};
         data.data_send_obj.data_catalog_data_offerings_obj = {};
         if (data_catalog_data_offerings_results.length > 0)
         {
            data_catalog_data_offerings = data_catalog_data_offerings_results[0];
            data.data_send_obj.data_catalog_data_offerings_obj = data_catalog_data_offerings;
         } else {
            return data;
         }

         /* SELECTION QUERY - data_catalog_business_object - */

         const data_catalog_business_objectFilters = [data_catalog_data_offerings?.data_catalog_business_object_id
         ];
         const [data_catalog_business_object_results] = await conn.execute(
         `SELECT status, type_of_communication, wizard_id, type, file_schema_sample, file_schema, profile_selector, file_schema_sample_filename, profile_description, file_schema_filename, id, short_order, code, name, data_catalog_service_id
          FROM data_catalog_business_object
         WHERE data_catalog_business_object.id = ? `, data_catalog_business_objectFilters );

         let data_catalog_business_object = {};
         data.data_send_obj.data_catalog_data_offerings_obj.data_catalog_business_object_obj = {};
         if (data_catalog_business_object_results.length > 0)
         {
            data_catalog_business_object = data_catalog_business_object_results[0];
            data.data_send_obj.data_catalog_data_offerings_obj.data_catalog_business_object_obj = data_catalog_business_object;
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
         data.data_send_obj.data_catalog_data_offerings_obj.data_catalog_business_object_obj.data_catalog_service_obj = {};
         if (data_catalog_service_results.length > 0)
         {
            data_catalog_service = data_catalog_service_results[0];
            data.data_send_obj.data_catalog_data_offerings_obj.data_catalog_business_object_obj.data_catalog_service_obj = data_catalog_service;
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
         data.data_send_obj.data_catalog_data_offerings_obj.data_catalog_business_object_obj.data_catalog_service_obj.data_catalog_category_obj = {};
         if (data_catalog_category_results.length > 0)
         {
            data_catalog_category = data_catalog_category_results[0];
            data.data_send_obj.data_catalog_data_offerings_obj.data_catalog_business_object_obj.data_catalog_service_obj.data_catalog_category_obj = data_catalog_category;
         } else {
            return data;
         }

         /* SELECTION QUERY - provider - */

         const providerFilters = [data_send?.created_by
         ];
         const [provider_results] = await conn.execute(
         `SELECT broker_url, handler_url, ecc_url, id, ed_api_url, provider_fiware_url
          FROM  ( SELECT id,  ed_api_url, data_app_url AS provider_fiware_url, ecc_url,  broker_url, handler_url  FROM user ) provider
         WHERE provider.id = ? `, providerFilters );

         let provider = {};
         data.data_send_obj.provider_obj = {};
         if (provider_results.length > 0)
         {
            provider = provider_results[0];
            data.data_send_obj.provider_obj = provider;
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

         const data_sendFilters = [id
         ];

         const [data_send_results] = await conn.execute(
         `SELECT id, created_by, data_catalog_data_offerings_id
          FROM data_send
         WHERE data_send.id = ? `, data_sendFilters );

         let data_send = {};
         data.data_send_obj = {};
         if (data_send_results.length > 0)
         {
            data_send = data_send_results[0];
            data.data_send_obj = data_send;
         }


         /* DELETE FROM DATABASE USING KEYS */

         const data_send_obj = data.data_send_obj;
         await conn.execute(
            `DELETE FROM data_send WHERE id = :id`, data_send_obj );

         await conn.commit();

      } catch (err) {
         await conn.rollback();
         throw err;
      } finally {
         conn.release();
      }
   }

}