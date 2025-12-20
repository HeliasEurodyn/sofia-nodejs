const pool = require('../db');
const { v4: uuid } = require('uuid');
const ModelHelper = require('../helpers/ModelHelper');

module.exports = {

   tables : {
      data_send: {
         status: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         file_type: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         user_code: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         fileSize: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         fileName: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
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
         file_schema_sample: { type: 'longtext',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         use_custom_semantics: { type: 'int',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         file_schema: { type: 'longtext',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         active_from_enable: { type: 'int',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         profile_description: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         status: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         profile_selector: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         file_schema_sample_filename: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         active_to: { type: 'datetime',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         file_schema_filename: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         active_from: { type: 'datetime',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         title: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         active_to_enable: { type: 'int',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
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
         type_of_communication: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         file_schema_filename: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         wizard_id: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         type: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         status: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         file_schema_sample_filename: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         file_schema_sample: { type: 'longtext',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         file_schema: { type: 'longtext',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         profile_description: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         profile_selector: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
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
      data_catalog_data_requests: {
         owner_id: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         id: { type: 'varchar',  primary: true,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         created_by: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         created_on: { type: 'datetime',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         modified_by: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         modified_on: { type: 'datetime',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         input_profile: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         input_data_source: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         comments: { type: 'text',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         data_catalog_business_object_id: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         data_catalog_data_offering_id: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: true,  insert: true,  update: true },
         status: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         viewed_by_offering_owner: { type: 'int',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true }
      },
      onenet_consumer: {
         ed_api_url: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         ecc_url: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         data_app_url: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         id: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: true,  insert: true,  update: true },
         broker_url: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true }
      },
      user: {
         direction: { type: 'int',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         instulation: { type: 'int',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         energy_certificate_offering: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         lastname: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         installed_power: { type: 'double',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         cloud_connector_id: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         provider_fiware_url: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         lat: { type: 'double',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         storage: { type: 'int',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         ev_capacity: { type: 'double',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         smart_readiness_indicator_size: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         smart_readiness_indicator: { type: 'longblob',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         firstname: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         storage_max_soc: { type: 'double',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         ev_primary_heating_source: { type: 'text',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         use_cloud_connector: { type: 'int',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         participate_in_flex_products: { type: 'int',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         ev: { type: 'int',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         storage_capacity: { type: 'double',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         lon: { type: 'double',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         production_type: { type: 'int',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         production_installed_power: { type: 'double',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         ev_maximum_charging_power: { type: 'double',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         street: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         production: { type: 'int',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         surface: { type: 'double',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         telephone: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         energy_certificate_size: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         zipcode: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         ev_primary_cooling_source: { type: 'text',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         storage_c_rating: { type: 'double',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         billing_type: { type: 'int',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         storage_min_soc: { type: 'double',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         energy_certificate_name: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         energy_certificate: { type: 'longblob',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         ev_willing_to_participate: { type: 'int',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         smart_readiness_indicator_name: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         handler_public_url: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         connector_protocol_url: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         connector_public_url: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         connector_control_url: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         connector_management_url: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         handler_url: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         market_id: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         ecc_url: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         broker_url: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         provider_appdata_url: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         country_id: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         onenet_role_id: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         consumer_fiware_url: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         data_app_url: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         ed_api_url: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         id: { type: 'varchar',  primary: true,  autoIncrement: false,  isSaveStatement: true,  insert: true,  update: true },
         created_by: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         created_on: { type: 'datetime',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         modified_by: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         modified_on: { type: 'datetime',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         short_order: { type: 'bigint',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         dateformat: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         email: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         enabled: { type: 'bit',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         login_nav_command: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         password: { type: 'password',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         provider: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         provider_user_id: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         search_nav_command: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         status: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         username: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         current_language_id: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         default_language_id: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         header_menu_id: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         sidebar_menu_id: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         company_id: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         is_onenet: { type: 'int',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true }
      },
      company: {
         id: { type: 'varchar',  primary: true,  autoIncrement: false,  isSaveStatement: true,  insert: true,  update: true },
         created_by: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         created_on: { type: 'datetime',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         modified_by: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         modified_on: { type: 'datetime',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         name: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         address: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         phone: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         description: { type: 'text',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true }
      }
   },

   create: async (data) => {
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

   update: async (data) => {
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

   getById: async (id) => {
      const conn = await pool.getConnection();
      const data = {};

      try {

         /* SELECTION QUERY - data_send - */

         const data_sendFilters = {
            data_send_obj_id: id
         };
         const [data_send_results] = await conn.query(
         `SELECT status, file_type, user_code, fileSize, fileName, id, created_by, created_on, modified_by, modified_on, title, description, message, data_catalog_data_offerings_id
          FROM data_send
         WHERE data_send.id = :data_send_obj_id;`, data_sendFilters );

         let data_send = {};
         data.data_send_obj = {};
         if (data_send_results.length > 0)
         {
            data_send = data_send_results[0];
            data.data_send_obj = data_send;
         }

         /* SELECTION QUERY - data_catalog_data_offerings - */

         const data_catalog_data_offeringsFilters = {
            data_catalog_data_offerings_obj_id: data_send?.data_catalog_data_offerings_id
         };
         const [data_catalog_data_offerings_results] = await conn.query(
         `SELECT file_schema_sample, use_custom_semantics, file_schema, active_from_enable, profile_description, status, profile_selector, file_schema_sample_filename, active_to, file_schema_filename, active_from, title, active_to_enable, id, created_by, created_on, modified_by, modified_on, input_profile, input_data_source, comments, data_catalog_business_object_id
          FROM data_catalog_data_offerings
         WHERE data_catalog_data_offerings.id = :data_catalog_data_offerings_obj_id;`, data_catalog_data_offeringsFilters );

         let data_catalog_data_offerings = {};
         data.data_send_obj.data_catalog_data_offerings_obj = {};
         if (data_catalog_data_offerings_results.length > 0)
         {
            data_catalog_data_offerings = data_catalog_data_offerings_results[0];
            data.data_send_obj.data_catalog_data_offerings_obj = data_catalog_data_offerings;
         }

         /* SELECTION QUERY - data_catalog_business_object - */

         const data_catalog_business_objectFilters = {
            data_catalog_business_object_obj_id: data_catalog_data_offerings?.data_catalog_business_object_id
         };
         const [data_catalog_business_object_results] = await conn.query(
         `SELECT type_of_communication, file_schema_filename, wizard_id, type, status, file_schema_sample_filename, file_schema_sample, file_schema, profile_description, profile_selector, id, short_order, code, name, data_catalog_service_id
          FROM data_catalog_business_object
         WHERE data_catalog_business_object.id = :data_catalog_business_object_obj_id;`, data_catalog_business_objectFilters );

         let data_catalog_business_object = {};
         data.data_send_obj.data_catalog_data_offerings_obj.data_catalog_business_object_obj = {};
         if (data_catalog_business_object_results.length > 0)
         {
            data_catalog_business_object = data_catalog_business_object_results[0];
            data.data_send_obj.data_catalog_data_offerings_obj.data_catalog_business_object_obj = data_catalog_business_object;
         }

         /* SELECTION QUERY - data_catalog_service - */

         const data_catalog_serviceFilters = {
            data_catalog_service_obj_id: data_catalog_business_object?.data_catalog_service_id
         };
         const [data_catalog_service_results] = await conn.query(
         `SELECT id, short_order, code, name, short_description, data_catalog_category_id
          FROM data_catalog_service
         WHERE data_catalog_service.id = :data_catalog_service_obj_id;`, data_catalog_serviceFilters );

         let data_catalog_service = {};
         data.data_send_obj.data_catalog_data_offerings_obj.data_catalog_business_object_obj.data_catalog_service_obj = {};
         if (data_catalog_service_results.length > 0)
         {
            data_catalog_service = data_catalog_service_results[0];
            data.data_send_obj.data_catalog_data_offerings_obj.data_catalog_business_object_obj.data_catalog_service_obj = data_catalog_service;
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
         data.data_send_obj.data_catalog_data_offerings_obj.data_catalog_business_object_obj.data_catalog_service_obj.data_catalog_category_obj = {};
         if (data_catalog_category_results.length > 0)
         {
            data_catalog_category = data_catalog_category_results[0];
            data.data_send_obj.data_catalog_data_offerings_obj.data_catalog_business_object_obj.data_catalog_service_obj.data_catalog_category_obj = data_catalog_category;
         }

         /* SELECTION QUERY - data_catalog_data_requests - */

         const data_catalog_data_requestsFilters = {
            data_catalog_data_requests_obj_owner_id: Auth::GetUserId(),
            data_catalog_data_requests_obj_data_catalog_data_offering_id: data_catalog_data_offerings?.id
         };
         const [data_catalog_data_requests_results] = await conn.query(
         `SELECT owner_id, id, created_by, created_on, modified_by, modified_on, input_profile, input_data_source, comments, data_catalog_business_object_id, data_catalog_data_offering_id, status, viewed_by_offering_owner
          FROM data_catalog_data_requests
         WHERE data_catalog_data_requests.owner_id = :data_catalog_data_requests_obj_owner_id;data_catalog_data_requests.data_catalog_data_offering_id = :data_catalog_data_requests_obj_data_catalog_data_offering_id;`, data_catalog_data_requestsFilters );

         let data_catalog_data_requests = {};
         data.data_send_obj.data_catalog_data_offerings_obj.data_catalog_data_requests_obj = {};
         if (data_catalog_data_requests_results.length > 0)
         {
            data_catalog_data_requests = data_catalog_data_requests_results[0];
            data.data_send_obj.data_catalog_data_offerings_obj.data_catalog_data_requests_obj = data_catalog_data_requests;
         }

         /* SELECTION QUERY - onenet_consumer - */

         const onenet_consumerFilters = {
            onenet_consumer_obj_id: data_catalog_data_requests?.created_by
         };
         const [onenet_consumer_results] = await conn.query(
         `SELECT ed_api_url, ecc_url, data_app_url, id, broker_url
          FROM  ( SELECT `id`, `handler_url` AS ed_api_url, `ecc_url`, `broker_url`, `data_app_url`  FROM `user` ) onenet_consumer
         WHERE onenet_consumer.id = :onenet_consumer_obj_id;`, onenet_consumerFilters );

         let onenet_consumer = {};
         data.data_send_obj.data_catalog_data_offerings_obj.data_catalog_data_requests_obj.onenet_consumer_obj = {};
         if (onenet_consumer_results.length > 0)
         {
            onenet_consumer = onenet_consumer_results[0];
            data.data_send_obj.data_catalog_data_offerings_obj.data_catalog_data_requests_obj.onenet_consumer_obj = onenet_consumer;
         }

         /* SELECTION QUERY - user_offering - */

         const user_offeringFilters = {
            user_obj_id: data_catalog_data_offerings?.created_by
         };
         const [user_offering_results] = await conn.query(
         `SELECT direction, instulation, energy_certificate_offering, lastname, installed_power, cloud_connector_id, provider_fiware_url, lat, storage, ev_capacity, smart_readiness_indicator_size, smart_readiness_indicator, firstname, storage_max_soc, ev_primary_heating_source, use_cloud_connector, participate_in_flex_products, ev, storage_capacity, lon, production_type, production_installed_power, ev_maximum_charging_power, street, production, surface, telephone, energy_certificate_size, zipcode, ev_primary_cooling_source, storage_c_rating, billing_type, storage_min_soc, energy_certificate_name, energy_certificate, ev_willing_to_participate, smart_readiness_indicator_name, handler_public_url, connector_protocol_url, connector_public_url, connector_control_url, connector_management_url, handler_url, market_id, ecc_url, broker_url, provider_appdata_url, country_id, onenet_role_id, consumer_fiware_url, data_app_url, ed_api_url, id, created_by, created_on, modified_by, modified_on, short_order, dateformat, email, enabled, login_nav_command, password, provider, provider_user_id, search_nav_command, status, username, current_language_id, default_language_id, header_menu_id, sidebar_menu_id, company_id, is_onenet
          FROM user
         WHERE user.id = :user_obj_id;`, user_offeringFilters );

         let user_offering = {};
         data.data_send_obj.data_catalog_data_offerings_obj.user_offering_obj = {};
         if (user_offering_results.length > 0)
         {
            user_offering = user_offering_results[0];
            data.data_send_obj.data_catalog_data_offerings_obj.user_offering_obj = user_offering;
         }

         /* SELECTION QUERY - company_offering - */

         const company_offeringFilters = {
            company_obj_id: user_offering?.company_id
         };
         const [company_offering_results] = await conn.query(
         `SELECT id, created_by, created_on, modified_by, modified_on, name, address, phone, description
          FROM company
         WHERE company.id = :company_obj_id;`, company_offeringFilters );

         let company_offering = {};
         data.data_send_obj.data_catalog_data_offerings_obj.user_offering_obj.company_offering_obj = {};
         if (company_offering_results.length > 0)
         {
            company_offering = company_offering_results[0];
            data.data_send_obj.data_catalog_data_offerings_obj.user_offering_obj.company_offering_obj = company_offering;
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

         const data_sendFilters = {
            data_send_obj_id: id
         };

         const [data_send_results] = await conn.query(
         `SELECT id, data_catalog_data_offerings_id
          FROM data_send
         WHERE data_send.id = :data_send_obj_id;`, data_sendFilters );

         let data_send = {};
         data.data_send_obj = {};
         if (data_send_results.length > 0)
         {
            data_send = data_send_results[0];
            data.data_send_obj = data_send;
         }


         /* DELETE FROM DATABASE USING KEYS */

         const data_send_obj = data.data_send_obj;
         await conn.query(
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