const pool = require('../db');
const { v4: uuid } = require('uuid');
const ModelHelper = require('../helpers/ModelHelper');

module.exports = {

   tables : {
      data_catalog_data_offerings: {
         data_catalog_business_object_id: { type: 'bigint',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         active_to_enable: { type: 'int',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         status: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         active_from_enable: { type: 'int',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         profile_selector: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         active_to: { type: 'datetime',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         profile_description: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         use_custom_semantics: { type: 'int',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         file_schema_filename: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         file_schema: { type: 'longtext',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         file_schema_sample_filename: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         title: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         file_schema_sample: { type: 'longtext',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         active_from: { type: 'datetime',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         id: { type: 'varchar',  primary: true,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         created_by: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         created_on: { type: 'datetime',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         modified_by: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         modified_on: { type: 'datetime',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         input_profile: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         input_data_source: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         comments: { type: 'text',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true }
      },
      data_catalog_business_object: {
         type: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         type_of_communication: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         profile_description: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         file_schema: { type: 'longtext',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         file_schema_sample_filename: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         status: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         file_schema_sample: { type: 'longtext',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         profile_selector: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         file_schema_filename: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         wizard_id: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
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
      user: {
         username: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         id: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: true,  insert: true,  update: true },
         email: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true }
      },
      user: {
         smart_readiness_indicator: { type: 'longblob',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         ev_maximum_charging_power: { type: 'double',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         ev_primary_heating_source: { type: 'text',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         ed_api_url: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         cloud_connector_id: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         connector_control_url: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         connector_protocol_url: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         energy_certificate_name: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         participate_in_flex_products: { type: 'int',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         ev_willing_to_participate: { type: 'int',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         broker_url: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         zipcode: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         provider_appdata_url: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         billing_type: { type: 'int',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         handler_url: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         connector_management_url: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         connector_public_url: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         firstname: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         smart_readiness_indicator_size: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         market_id: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         provider_fiware_url: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         installed_power: { type: 'double',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         storage_min_soc: { type: 'double',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         production_installed_power: { type: 'double',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         direction: { type: 'int',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         telephone: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         ev_capacity: { type: 'double',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         onenet_role_id: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         use_cloud_connector: { type: 'int',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         energy_certificate_size: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         lat: { type: 'double',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         instulation: { type: 'int',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         surface: { type: 'double',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         ev_primary_cooling_source: { type: 'text',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         storage_max_soc: { type: 'double',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         energy_certificate_offering: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         country_id: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         ev: { type: 'int',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         consumer_fiware_url: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         storage: { type: 'int',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         smart_readiness_indicator_name: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         data_app_url: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         street: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         energy_certificate: { type: 'longblob',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         storage_c_rating: { type: 'double',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         storage_capacity: { type: 'double',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         lastname: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         ecc_url: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         production_type: { type: 'int',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         production: { type: 'int',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         lon: { type: 'double',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         handler_public_url: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         id: { type: 'varchar',  primary: true,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
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
      },
      data_catalog_data_offerings_countries: {
         id: { type: 'bigint',  primary: true,  autoIncrement: true,  isSaveStatement: false,  insert: true,  update: true },
         data_catalog_data_offering_id: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: true,  insert: true,  update: true },
         country_id: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true }
      },
      country: {
         id: { type: 'bigint',  primary: true,  autoIncrement: true,  isSaveStatement: true,  insert: true,  update: true },
         created_by: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         created_on: { type: 'datetime',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         modified_by: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         modified_on: { type: 'datetime',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         name: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         cluster_id: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         code: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true }
      },
      data_catalog_data_offerings_clusters: {
         id: { type: 'bigint',  primary: true,  autoIncrement: true,  isSaveStatement: false,  insert: true,  update: true },
         data_catalog_data_offering_id: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: true,  insert: true,  update: true },
         cluster_id: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true }
      },
      cluster: {
         id: { type: 'bigint',  primary: true,  autoIncrement: true,  isSaveStatement: true,  insert: true,  update: true },
         created_by: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         created_on: { type: 'datetime',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         modified_by: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         modified_on: { type: 'datetime',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         name: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         code: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true }
      },
      data_catalog_data_offerings_markets: {
         id: { type: 'bigint',  primary: true,  autoIncrement: true,  isSaveStatement: false,  insert: true,  update: true },
         data_catalog_data_offering_id: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: true,  insert: true,  update: true },
         market_id: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true }
      },
      market: {
         id: { type: 'bigint',  primary: true,  autoIncrement: true,  isSaveStatement: true,  insert: true,  update: true },
         created_by: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         created_on: { type: 'datetime',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         modified_by: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         modified_on: { type: 'datetime',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         name: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         code: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true }
      },
      data_catalog_data_offerings_onenet_roles: {
         id: { type: 'bigint',  primary: true,  autoIncrement: true,  isSaveStatement: false,  insert: true,  update: true },
         onenet_role_id: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         data_catalog_data_offering_id: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: true,  insert: true,  update: true }
      },
      onenet_role: {
         id: { type: 'bigint',  primary: true,  autoIncrement: true,  isSaveStatement: true,  insert: true,  update: true },
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

         const data_catalog_data_offerings_obj = data.data_catalog_data_offerings_obj;
         data_catalog_data_offerings_obj.id = uuid();
         await ModelHelper.insert(conn, 'data_catalog_data_offerings', module.exports.tables['data_catalog_data_offerings'], data_catalog_data_offerings_obj);

         for (const data_catalog_data_offerings_countries_obj of data_catalog_data_offerings_obj.data_catalog_data_offerings_countries_obj)
            {

            data_catalog_data_offerings_countries_obj.data_catalog_data_offering_id = data_catalog_data_offerings_obj.id;
            await ModelHelper.insert(conn, 'data_catalog_data_offerings_countries', module.exports.tables['data_catalog_data_offerings_countries'], data_catalog_data_offerings_countries_obj);

            }

         for (const data_catalog_data_offerings_clusters_obj of data_catalog_data_offerings_obj.data_catalog_data_offerings_clusters_obj)
            {

            data_catalog_data_offerings_clusters_obj.data_catalog_data_offering_id = data_catalog_data_offerings_obj.id;
            await ModelHelper.insert(conn, 'data_catalog_data_offerings_clusters', module.exports.tables['data_catalog_data_offerings_clusters'], data_catalog_data_offerings_clusters_obj);

            }

         for (const data_catalog_data_offerings_markets_obj of data_catalog_data_offerings_obj.data_catalog_data_offerings_markets_obj)
            {

            data_catalog_data_offerings_markets_obj.data_catalog_data_offering_id = data_catalog_data_offerings_obj.id;
            await ModelHelper.insert(conn, 'data_catalog_data_offerings_markets', module.exports.tables['data_catalog_data_offerings_markets'], data_catalog_data_offerings_markets_obj);

            }

         for (const data_catalog_data_offerings_onenet_roles_obj of data_catalog_data_offerings_obj.data_catalog_data_offerings_onenet_roles_obj)
            {

            data_catalog_data_offerings_onenet_roles_obj.data_catalog_data_offering_id = data_catalog_data_offerings_obj.id;
            await ModelHelper.insert(conn, 'data_catalog_data_offerings_onenet_roles', module.exports.tables['data_catalog_data_offerings_onenet_roles'], data_catalog_data_offerings_onenet_roles_obj);

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

         const data_catalog_data_offerings_obj = data.data_catalog_data_offerings_obj;
         await ModelHelper.update(conn, 'data_catalog_data_offerings', module.exports.tables['data_catalog_data_offerings'], data_catalog_data_offerings_obj);

         for (const data_catalog_data_offerings_countries_obj of data_catalog_data_offerings_obj.data_catalog_data_offerings_countries_obj)
            {
            data_catalog_data_offerings_countries_obj.data_catalog_data_offering_id = data_catalog_data_offerings_obj.id;
            await ModelHelper.insertOrUpdate(conn, 'data_catalog_data_offerings_countries', module.exports.tables['data_catalog_data_offerings_countries'], data_catalog_data_offerings_countries_obj);
            }
         await ModelHelper.deleteMissing(conn, 'data_catalog_data_offerings_countries', module.exports.tables['data_catalog_data_offerings_countries'], data_catalog_data_offerings_obj.data_catalog_data_offerings_countries_obj);

         for (const data_catalog_data_offerings_clusters_obj of data_catalog_data_offerings_obj.data_catalog_data_offerings_clusters_obj)
            {
            data_catalog_data_offerings_clusters_obj.data_catalog_data_offering_id = data_catalog_data_offerings_obj.id;
            await ModelHelper.insertOrUpdate(conn, 'data_catalog_data_offerings_clusters', module.exports.tables['data_catalog_data_offerings_clusters'], data_catalog_data_offerings_clusters_obj);
            }
         await ModelHelper.deleteMissing(conn, 'data_catalog_data_offerings_clusters', module.exports.tables['data_catalog_data_offerings_clusters'], data_catalog_data_offerings_obj.data_catalog_data_offerings_clusters_obj);

         for (const data_catalog_data_offerings_markets_obj of data_catalog_data_offerings_obj.data_catalog_data_offerings_markets_obj)
            {
            data_catalog_data_offerings_markets_obj.data_catalog_data_offering_id = data_catalog_data_offerings_obj.id;
            await ModelHelper.insertOrUpdate(conn, 'data_catalog_data_offerings_markets', module.exports.tables['data_catalog_data_offerings_markets'], data_catalog_data_offerings_markets_obj);
            }
         await ModelHelper.deleteMissing(conn, 'data_catalog_data_offerings_markets', module.exports.tables['data_catalog_data_offerings_markets'], data_catalog_data_offerings_obj.data_catalog_data_offerings_markets_obj);

         for (const data_catalog_data_offerings_onenet_roles_obj of data_catalog_data_offerings_obj.data_catalog_data_offerings_onenet_roles_obj)
            {
            data_catalog_data_offerings_onenet_roles_obj.data_catalog_data_offering_id = data_catalog_data_offerings_obj.id;
            await ModelHelper.insertOrUpdate(conn, 'data_catalog_data_offerings_onenet_roles', module.exports.tables['data_catalog_data_offerings_onenet_roles'], data_catalog_data_offerings_onenet_roles_obj);
            }
         await ModelHelper.deleteMissing(conn, 'data_catalog_data_offerings_onenet_roles', module.exports.tables['data_catalog_data_offerings_onenet_roles'], data_catalog_data_offerings_obj.data_catalog_data_offerings_onenet_roles_obj);

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

         /* SELECTION QUERY - data_catalog_data_offerings - */

         const data_catalog_data_offeringsFilters = {
            data_catalog_data_offerings_obj_id: id
         };
         const [data_catalog_data_offerings_results] = await conn.query(
         `SELECT data_catalog_business_object_id, active_to_enable, status, active_from_enable, profile_selector, active_to, profile_description, use_custom_semantics, file_schema_filename, file_schema, file_schema_sample_filename, title, file_schema_sample, active_from, id, created_by, created_on, modified_by, modified_on, input_profile, input_data_source, comments
          FROM data_catalog_data_offerings
         WHERE data_catalog_data_offerings.id = :data_catalog_data_offerings_obj_id;`, data_catalog_data_offeringsFilters );

         let data_catalog_data_offerings = {};
         data.data_catalog_data_offerings_obj = {};
         if (data_catalog_data_offerings_results.length > 0)
         {
            data_catalog_data_offerings = data_catalog_data_offerings_results[0];
            data.data_catalog_data_offerings_obj = data_catalog_data_offerings;
         }

         /* SELECTION QUERY - data_catalog_business_object - */

         const data_catalog_business_objectFilters = {
            data_catalog_business_object_obj_id: data_catalog_data_offerings?.data_catalog_business_object_id
         };
         const [data_catalog_business_object_results] = await conn.query(
         `SELECT type, type_of_communication, profile_description, file_schema, file_schema_sample_filename, status, file_schema_sample, profile_selector, file_schema_filename, wizard_id, id, short_order, code, name, data_catalog_service_id
          FROM data_catalog_business_object
         WHERE data_catalog_business_object.id = :data_catalog_business_object_obj_id;`, data_catalog_business_objectFilters );

         let data_catalog_business_object = {};
         data.data_catalog_data_offerings_obj.data_catalog_business_object_obj = {};
         if (data_catalog_business_object_results.length > 0)
         {
            data_catalog_business_object = data_catalog_business_object_results[0];
            data.data_catalog_data_offerings_obj.data_catalog_business_object_obj = data_catalog_business_object;
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
         data.data_catalog_data_offerings_obj.data_catalog_business_object_obj.data_catalog_service_obj = {};
         if (data_catalog_service_results.length > 0)
         {
            data_catalog_service = data_catalog_service_results[0];
            data.data_catalog_data_offerings_obj.data_catalog_business_object_obj.data_catalog_service_obj = data_catalog_service;
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
         data.data_catalog_data_offerings_obj.data_catalog_business_object_obj.data_catalog_service_obj.data_catalog_category_obj = {};
         if (data_catalog_category_results.length > 0)
         {
            data_catalog_category = data_catalog_category_results[0];
            data.data_catalog_data_offerings_obj.data_catalog_business_object_obj.data_catalog_service_obj.data_catalog_category_obj = data_catalog_category;
         }

         /* SELECTION QUERY - user_1_1 - */

         const user_1_1Filters = {
            user_obj_id: data_catalog_data_offerings?.created_by
         };
         const [user_1_1_results] = await conn.query(
         `SELECT username, id, email
          FROM  ( SELECT `id`, `username`, `email`  FROM `user` ) user_1_1
         WHERE user.id = :user_obj_id;`, user_1_1Filters );

         let user_1_1 = {};
         data.data_catalog_data_offerings_obj.user_1_1_obj = {};
         if (user_1_1_results.length > 0)
         {
            user_1_1 = user_1_1_results[0];
            data.data_catalog_data_offerings_obj.user_1_1_obj = user_1_1;
         }

         /* SELECTION QUERY - user - */

         const userFilters = {
            user_obj_id: data_catalog_data_offerings?.created_by
         };
         const [user_results] = await conn.query(
         `SELECT smart_readiness_indicator, ev_maximum_charging_power, ev_primary_heating_source, ed_api_url, cloud_connector_id, connector_control_url, connector_protocol_url, energy_certificate_name, participate_in_flex_products, ev_willing_to_participate, broker_url, zipcode, provider_appdata_url, billing_type, handler_url, connector_management_url, connector_public_url, firstname, smart_readiness_indicator_size, market_id, provider_fiware_url, installed_power, storage_min_soc, production_installed_power, direction, telephone, ev_capacity, onenet_role_id, use_cloud_connector, energy_certificate_size, lat, instulation, surface, ev_primary_cooling_source, storage_max_soc, energy_certificate_offering, country_id, ev, consumer_fiware_url, storage, smart_readiness_indicator_name, data_app_url, street, energy_certificate, storage_c_rating, storage_capacity, lastname, ecc_url, production_type, production, lon, handler_public_url, id, created_by, created_on, modified_by, modified_on, short_order, dateformat, email, enabled, login_nav_command, password, provider, provider_user_id, search_nav_command, status, username, current_language_id, default_language_id, header_menu_id, sidebar_menu_id, company_id, is_onenet
          FROM user
         WHERE user.id = :user_obj_id;`, userFilters );

         let user = {};
         data.data_catalog_data_offerings_obj.user_obj = {};
         if (user_results.length > 0)
         {
            user = user_results[0];
            data.data_catalog_data_offerings_obj.user_obj = user;
         }

         /* SELECTION QUERY - company - */

         const companyFilters = {
            company_obj_id: user?.company_id
         };
         const [company_results] = await conn.query(
         `SELECT id, created_by, created_on, modified_by, modified_on, name, address, phone, description
          FROM company
         WHERE company.id = :company_obj_id;`, companyFilters );

         let company = {};
         data.data_catalog_data_offerings_obj.user_obj.company_obj = {};
         if (company_results.length > 0)
         {
            company = company_results[0];
            data.data_catalog_data_offerings_obj.user_obj.company_obj = company;
         }

         /* SELECTION QUERY - data_catalog_data_offerings_countries - */

         const data_catalog_data_offerings_countriesFilters = {
            data_catalog_data_offerings_countries_obj_data_catalog_data_offering_id: data_catalog_data_offerings?.id
         };
         const [data_catalog_data_offerings_countries_results] = await conn.query(
         `SELECT id, data_catalog_data_offering_id, country_id
          FROM data_catalog_data_offerings_countries
         WHERE data_catalog_data_offerings_countries.data_catalog_data_offering_id = :data_catalog_data_offerings_countries_obj_data_catalog_data_offering_id;`, data_catalog_data_offerings_countriesFilters );

            data.data_catalog_data_offerings_obj.data_catalog_data_offerings_countries_obj = data_catalog_data_offerings_countries_results;

         for (const data_catalog_data_offerings_countries of data_catalog_data_offerings_countries_results)
            data_catalog_data_offerings_countries{

            /* SELECTION QUERY - country - */

            const countryFilters = {
               country_obj_id: data_catalog_data_offerings_countries?.country_id
            };
            const [country_results] = await conn.query(
            `SELECT id, created_by, created_on, modified_by, modified_on, name, cluster_id, code
             FROM country
            WHERE country.id = :country_obj_id;`, countryFilters );

            let country = {};
            data.data_catalog_data_offerings_obj.data_catalog_data_offerings_countries_obj.country_obj = {};
            if (country_results.length > 0)
            {
               country = country_results[0];
               data.data_catalog_data_offerings_obj.data_catalog_data_offerings_countries_obj.country_obj = country;
            }
            data_catalog_data_offerings_countries}

         /* SELECTION QUERY - data_catalog_data_offerings_clusters - */

         const data_catalog_data_offerings_clustersFilters = {
            data_catalog_data_offerings_clusters_obj_data_catalog_data_offering_id: data_catalog_data_offerings?.id
         };
         const [data_catalog_data_offerings_clusters_results] = await conn.query(
         `SELECT id, data_catalog_data_offering_id, cluster_id
          FROM data_catalog_data_offerings_clusters
         WHERE data_catalog_data_offerings_clusters.data_catalog_data_offering_id = :data_catalog_data_offerings_clusters_obj_data_catalog_data_offering_id;`, data_catalog_data_offerings_clustersFilters );

            data.data_catalog_data_offerings_obj.data_catalog_data_offerings_clusters_obj = data_catalog_data_offerings_clusters_results;

         for (const data_catalog_data_offerings_clusters of data_catalog_data_offerings_clusters_results)
            data_catalog_data_offerings_clusters{

            /* SELECTION QUERY - cluster - */

            const clusterFilters = {
               cluster_obj_id: data_catalog_data_offerings_clusters?.cluster_id
            };
            const [cluster_results] = await conn.query(
            `SELECT id, created_by, created_on, modified_by, modified_on, name, code
             FROM cluster
            WHERE cluster.id = :cluster_obj_id;`, clusterFilters );

            let cluster = {};
            data.data_catalog_data_offerings_obj.data_catalog_data_offerings_clusters_obj.cluster_obj = {};
            if (cluster_results.length > 0)
            {
               cluster = cluster_results[0];
               data.data_catalog_data_offerings_obj.data_catalog_data_offerings_clusters_obj.cluster_obj = cluster;
            }
            data_catalog_data_offerings_clusters}

         /* SELECTION QUERY - data_catalog_data_offerings_markets - */

         const data_catalog_data_offerings_marketsFilters = {
            data_catalog_data_offerings_markets_obj_data_catalog_data_offering_id: data_catalog_data_offerings?.id
         };
         const [data_catalog_data_offerings_markets_results] = await conn.query(
         `SELECT id, data_catalog_data_offering_id, market_id
          FROM data_catalog_data_offerings_markets
         WHERE data_catalog_data_offerings_markets.data_catalog_data_offering_id = :data_catalog_data_offerings_markets_obj_data_catalog_data_offering_id;`, data_catalog_data_offerings_marketsFilters );

            data.data_catalog_data_offerings_obj.data_catalog_data_offerings_markets_obj = data_catalog_data_offerings_markets_results;

         for (const data_catalog_data_offerings_markets of data_catalog_data_offerings_markets_results)
            data_catalog_data_offerings_markets{

            /* SELECTION QUERY - market - */

            const marketFilters = {
               market_obj_id: data_catalog_data_offerings_markets?.market_id
            };
            const [market_results] = await conn.query(
            `SELECT id, created_by, created_on, modified_by, modified_on, name, code
             FROM market
            WHERE market.id = :market_obj_id;`, marketFilters );

            let market = {};
            data.data_catalog_data_offerings_obj.data_catalog_data_offerings_markets_obj.market_obj = {};
            if (market_results.length > 0)
            {
               market = market_results[0];
               data.data_catalog_data_offerings_obj.data_catalog_data_offerings_markets_obj.market_obj = market;
            }
            data_catalog_data_offerings_markets}

         /* SELECTION QUERY - data_catalog_data_offerings_onenet_roles - */

         const data_catalog_data_offerings_onenet_rolesFilters = {
            data_catalog_data_offerings_onenet_roles_obj_data_catalog_data_offering_id: data_catalog_data_offerings?.id
         };
         const [data_catalog_data_offerings_onenet_roles_results] = await conn.query(
         `SELECT id, onenet_role_id, data_catalog_data_offering_id
          FROM data_catalog_data_offerings_onenet_roles
         WHERE data_catalog_data_offerings_onenet_roles.data_catalog_data_offering_id = :data_catalog_data_offerings_onenet_roles_obj_data_catalog_data_offering_id;`, data_catalog_data_offerings_onenet_rolesFilters );

            data.data_catalog_data_offerings_obj.data_catalog_data_offerings_onenet_roles_obj = data_catalog_data_offerings_onenet_roles_results;

         for (const data_catalog_data_offerings_onenet_roles of data_catalog_data_offerings_onenet_roles_results)
            data_catalog_data_offerings_onenet_roles{

            /* SELECTION QUERY - onenet_role - */

            const onenet_roleFilters = {
               onenet_role_obj_id: data_catalog_data_offerings_onenet_roles?.onenet_role_id
            };
            const [onenet_role_results] = await conn.query(
            `SELECT id, created_by, created_on, modified_by, modified_on, name, code
             FROM onenet_role
            WHERE onenet_role.id = :onenet_role_obj_id;`, onenet_roleFilters );

            let onenet_role = {};
            data.data_catalog_data_offerings_obj.data_catalog_data_offerings_onenet_roles_obj.onenet_role_obj = {};
            if (onenet_role_results.length > 0)
            {
               onenet_role = onenet_role_results[0];
               data.data_catalog_data_offerings_obj.data_catalog_data_offerings_onenet_roles_obj.onenet_role_obj = onenet_role;
            }
            data_catalog_data_offerings_onenet_roles}

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

         const data_catalog_data_offeringsFilters = {
            data_catalog_data_offerings_obj_id: id
         };

         const [data_catalog_data_offerings_results] = await conn.query(
         `SELECT data_catalog_business_object_id, id, created_by
          FROM data_catalog_data_offerings
         WHERE data_catalog_data_offerings.id = :data_catalog_data_offerings_obj_id;`, data_catalog_data_offeringsFilters );

         let data_catalog_data_offerings = {};
         data.data_catalog_data_offerings_obj = {};
         if (data_catalog_data_offerings_results.length > 0)
         {
            data_catalog_data_offerings = data_catalog_data_offerings_results[0];
            data.data_catalog_data_offerings_obj = data_catalog_data_offerings;
         }

         const data_catalog_data_offerings_countriesFilters = {
            data_catalog_data_offerings_countries_obj_data_catalog_data_offering_id: data_catalog_data_offerings?.id
         };

         const [data_catalog_data_offerings_countries_results] = await conn.query(
         `SELECT id, data_catalog_data_offering_id, country_id
          FROM data_catalog_data_offerings_countries
         WHERE data_catalog_data_offerings_countries.data_catalog_data_offering_id = :data_catalog_data_offerings_countries_obj_data_catalog_data_offering_id;`, data_catalog_data_offerings_countriesFilters );

         data.data_catalog_data_offerings_obj.data_catalog_data_offerings_countries_obj = data_catalog_data_offerings_countries_results;
         for (const data_catalog_data_offerings_countries of data_catalog_data_offerings_countries_results)
            data_catalog_data_offerings_countries{
            data_catalog_data_offerings_countries}
         const data_catalog_data_offerings_clustersFilters = {
            data_catalog_data_offerings_clusters_obj_data_catalog_data_offering_id: data_catalog_data_offerings?.id
         };

         const [data_catalog_data_offerings_clusters_results] = await conn.query(
         `SELECT id, data_catalog_data_offering_id, cluster_id
          FROM data_catalog_data_offerings_clusters
         WHERE data_catalog_data_offerings_clusters.data_catalog_data_offering_id = :data_catalog_data_offerings_clusters_obj_data_catalog_data_offering_id;`, data_catalog_data_offerings_clustersFilters );

         data.data_catalog_data_offerings_obj.data_catalog_data_offerings_clusters_obj = data_catalog_data_offerings_clusters_results;
         for (const data_catalog_data_offerings_clusters of data_catalog_data_offerings_clusters_results)
            data_catalog_data_offerings_clusters{
            const clusterFilters = {
               cluster_obj_id: data_catalog_data_offerings_clusters?.cluster_id
            };

            const [cluster_results] = await conn.query(
            `SELECT id
             FROM cluster
            WHERE cluster.id = :cluster_obj_id;`, clusterFilters );

            let cluster = {};
            data.data_catalog_data_offerings_obj.data_catalog_data_offerings_clusters_obj.cluster_obj = {};
            if (cluster_results.length > 0)
            {
               cluster = cluster_results[0];
               data.data_catalog_data_offerings_obj.data_catalog_data_offerings_clusters_obj.cluster_obj = cluster;
            }

            data_catalog_data_offerings_clusters}
         const data_catalog_data_offerings_marketsFilters = {
            data_catalog_data_offerings_markets_obj_data_catalog_data_offering_id: data_catalog_data_offerings?.id
         };

         const [data_catalog_data_offerings_markets_results] = await conn.query(
         `SELECT id, data_catalog_data_offering_id, market_id
          FROM data_catalog_data_offerings_markets
         WHERE data_catalog_data_offerings_markets.data_catalog_data_offering_id = :data_catalog_data_offerings_markets_obj_data_catalog_data_offering_id;`, data_catalog_data_offerings_marketsFilters );

         data.data_catalog_data_offerings_obj.data_catalog_data_offerings_markets_obj = data_catalog_data_offerings_markets_results;
         for (const data_catalog_data_offerings_markets of data_catalog_data_offerings_markets_results)
            data_catalog_data_offerings_markets{
            const marketFilters = {
               market_obj_id: data_catalog_data_offerings_markets?.market_id
            };

            const [market_results] = await conn.query(
            `SELECT id
             FROM market
            WHERE market.id = :market_obj_id;`, marketFilters );

            let market = {};
            data.data_catalog_data_offerings_obj.data_catalog_data_offerings_markets_obj.market_obj = {};
            if (market_results.length > 0)
            {
               market = market_results[0];
               data.data_catalog_data_offerings_obj.data_catalog_data_offerings_markets_obj.market_obj = market;
            }

            data_catalog_data_offerings_markets}
         const data_catalog_data_offerings_onenet_rolesFilters = {
            data_catalog_data_offerings_onenet_roles_obj_data_catalog_data_offering_id: data_catalog_data_offerings?.id
         };

         const [data_catalog_data_offerings_onenet_roles_results] = await conn.query(
         `SELECT id, onenet_role_id, data_catalog_data_offering_id
          FROM data_catalog_data_offerings_onenet_roles
         WHERE data_catalog_data_offerings_onenet_roles.data_catalog_data_offering_id = :data_catalog_data_offerings_onenet_roles_obj_data_catalog_data_offering_id;`, data_catalog_data_offerings_onenet_rolesFilters );

         data.data_catalog_data_offerings_obj.data_catalog_data_offerings_onenet_roles_obj = data_catalog_data_offerings_onenet_roles_results;
         for (const data_catalog_data_offerings_onenet_roles of data_catalog_data_offerings_onenet_roles_results)
            data_catalog_data_offerings_onenet_roles{
            const onenet_roleFilters = {
               onenet_role_obj_id: data_catalog_data_offerings_onenet_roles?.onenet_role_id
            };

            const [onenet_role_results] = await conn.query(
            `SELECT id
             FROM onenet_role
            WHERE onenet_role.id = :onenet_role_obj_id;`, onenet_roleFilters );

            let onenet_role = {};
            data.data_catalog_data_offerings_obj.data_catalog_data_offerings_onenet_roles_obj.onenet_role_obj = {};
            if (onenet_role_results.length > 0)
            {
               onenet_role = onenet_role_results[0];
               data.data_catalog_data_offerings_obj.data_catalog_data_offerings_onenet_roles_obj.onenet_role_obj = onenet_role;
            }

            data_catalog_data_offerings_onenet_roles}

         /* DELETE FROM DATABASE USING KEYS */

         const data_catalog_data_offerings_obj = data.data_catalog_data_offerings_obj;
         await conn.query(
            `DELETE FROM data_catalog_data_offerings WHERE id = :id`, data_catalog_data_offerings_obj );

         for (const data_catalog_data_offerings_countries_obj of data_catalog_data_offerings_obj.data_catalog_data_offerings_countries_obj) {
            await conn.query(
               `DELETE FROM data_catalog_data_offerings_countries WHERE id = :id`, data_catalog_data_offerings_countries_obj );
            data_catalog_data_offerings_countries_obj.id = data_catalog_data_offerings_countries_result.insertId;
         }

         for (const data_catalog_data_offerings_clusters_obj of data_catalog_data_offerings_obj.data_catalog_data_offerings_clusters_obj) {
            await conn.query(
               `DELETE FROM data_catalog_data_offerings_clusters WHERE id = :id`, data_catalog_data_offerings_clusters_obj );
            data_catalog_data_offerings_clusters_obj.id = data_catalog_data_offerings_clusters_result.insertId;

            const cluster_obj = data_catalog_data_offerings_clusters_obj.cluster_obj;
            await conn.query(
               `DELETE FROM cluster WHERE id = :id`, cluster_obj );
            cluster_obj.id = cluster_result.insertId;
         }

         for (const data_catalog_data_offerings_markets_obj of data_catalog_data_offerings_obj.data_catalog_data_offerings_markets_obj) {
            await conn.query(
               `DELETE FROM data_catalog_data_offerings_markets WHERE id = :id`, data_catalog_data_offerings_markets_obj );
            data_catalog_data_offerings_markets_obj.id = data_catalog_data_offerings_markets_result.insertId;

            const market_obj = data_catalog_data_offerings_markets_obj.market_obj;
            await conn.query(
               `DELETE FROM market WHERE id = :id`, market_obj );
            market_obj.id = market_result.insertId;
         }

         for (const data_catalog_data_offerings_onenet_roles_obj of data_catalog_data_offerings_obj.data_catalog_data_offerings_onenet_roles_obj) {
            await conn.query(
               `DELETE FROM data_catalog_data_offerings_onenet_roles WHERE id = :id`, data_catalog_data_offerings_onenet_roles_obj );
            data_catalog_data_offerings_onenet_roles_obj.id = data_catalog_data_offerings_onenet_roles_result.insertId;

            const onenet_role_obj = data_catalog_data_offerings_onenet_roles_obj.onenet_role_obj;
            await conn.query(
               `DELETE FROM onenet_role WHERE id = :id`, onenet_role_obj );
            onenet_role_obj.id = onenet_role_result.insertId;
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