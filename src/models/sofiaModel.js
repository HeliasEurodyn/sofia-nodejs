const pool = require('../db');
const { v4: uuid } = require('uuid');
const ModelHelper = require('../helpers/ModelHelper');

module.exports = {

   tables : {
      user: {
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
         is_onenet: { type: 'int',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         provider_fiware_url: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         consumer_fiware_url: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         provider_appdata_url: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         ed_api_url: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         ecc_url: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         broker_url: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         data_app_url: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         country_id: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         market_id: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         onenet_role_id: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         handler_url: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         handler_public_url: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         connector_public_url: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         connector_management_url: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         connector_protocol_url: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         connector_control_url: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         firstname: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         lastname: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         street: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         zipcode: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         telephone: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         installed_power: { type: 'double',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         billing_type: { type: 'int',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         production: { type: 'int',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         production_installed_power: { type: 'double',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         production_type: { type: 'int',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         storage: { type: 'int',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         storage_capacity: { type: 'double',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         storage_c_rating: { type: 'double',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         storage_min_soc: { type: 'double',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         storage_max_soc: { type: 'double',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         ev: { type: 'int',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         ev_capacity: { type: 'double',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         ev_maximum_charging_power: { type: 'double',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         ev_willing_to_participate: { type: 'int',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         ev_primary_heating_source: { type: 'text',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         ev_primary_cooling_source: { type: 'text',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         participate_in_flex_products: { type: 'int',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         surface: { type: 'double',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         direction: { type: 'int',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         instulation: { type: 'int',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         energy_certificate: { type: 'longblob',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         smart_readiness_indicator: { type: 'longblob',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         energy_certificate_name: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         energy_certificate_size: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         smart_readiness_indicator_name: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         smart_readiness_indicator_size: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         lat: { type: 'double',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         lon: { type: 'double',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         energy_certificate_offering: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         use_cloud_connector: { type: 'int',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         cloud_connector_id: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true }
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
      cluster: {
         id: { type: 'bigint',  primary: true,  autoIncrement: true,  isSaveStatement: true,  insert: true,  update: true },
         created_by: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         created_on: { type: 'datetime',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         modified_by: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         modified_on: { type: 'datetime',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         name: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         code: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true }
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
      onenet_role: {
         id: { type: 'bigint',  primary: true,  autoIncrement: true,  isSaveStatement: true,  insert: true,  update: true },
         created_by: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         created_on: { type: 'datetime',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         modified_by: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         modified_on: { type: 'datetime',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         name: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         code: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true }
      },
      user_role: {
         user_id: { type: 'varchar',  primary: true,  autoIncrement: false,  isSaveStatement: true,  insert: true,  update: true },
         role_id: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true }
      },
      upd_pwd: {
         pwd: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         id: { type: 'varchar',  primary: true,  autoIncrement: false,  isSaveStatement: true,  insert: true,  update: true },
         rpwd: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true }
      },
      cloud_connector_settings: {
         handler_url: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         handler_public_url: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         connector_public_url: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         connector_management_url: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         connector_protocol_url: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         connector_control_url: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         id: { type: 'varchar',  primary: true,  autoIncrement: false,  isSaveStatement: true,  insert: true,  update: true },
         name: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         created_on: { type: 'datetime',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true }
      },
      consumers_app_view: {
         ecc_url: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         name: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         data_app_url: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         username: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: true,  insert: true,  update: true }
      }
   },

   create: async (data) => {
      let sql, params, res;
      const conn = await pool.getConnection();

      try {
         await conn.beginTransaction();

         const user_obj = data.user_obj;
         user_obj.id = uuid();
         await ModelHelper.insert(conn, 'user', module.exports.tables['user'], user_obj);

         for (const user_role_obj of user_obj.user_role_obj)
            {

            user_role_obj.user_id = user_obj.id;
            await ModelHelper.insert(conn, 'user_role', module.exports.tables['user_role'], user_role_obj);

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

         const user_obj = data.user_obj;
         await ModelHelper.update(conn, 'user', module.exports.tables['user'], user_obj);

         for (const user_role_obj of user_obj.user_role_obj)
            {
            user_role_obj.user_id = user_obj.id;
            await ModelHelper.insertOrUpdate(conn, 'user_role', module.exports.tables['user_role'], user_role_obj);
            }
         await ModelHelper.deleteMissing(conn, 'user_role', module.exports.tables['user_role'], user_obj.user_role_obj);

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

         /* SELECTION QUERY - user - */

         const userFilters = {
            user_obj_id: id
         };

         const [user_results] = await conn.query(
         `SELECT id, created_by, created_on, modified_by, modified_on, short_order, dateformat, email, enabled, login_nav_command, password, provider, provider_user_id, search_nav_command, status, username, current_language_id, default_language_id, header_menu_id, sidebar_menu_id, company_id, is_onenet, provider_fiware_url, consumer_fiware_url, provider_appdata_url, ed_api_url, ecc_url, broker_url, data_app_url, country_id, market_id, onenet_role_id, handler_url, handler_public_url, connector_public_url, connector_management_url, connector_protocol_url, connector_control_url, firstname, lastname, street, zipcode, telephone, installed_power, billing_type, production, production_installed_power, production_type, storage, storage_capacity, storage_c_rating, storage_min_soc, storage_max_soc, ev, ev_capacity, ev_maximum_charging_power, ev_willing_to_participate, ev_primary_heating_source, ev_primary_cooling_source, participate_in_flex_products, surface, direction, instulation, energy_certificate, smart_readiness_indicator, energy_certificate_name, energy_certificate_size, smart_readiness_indicator_name, smart_readiness_indicator_size, lat, lon, energy_certificate_offering, use_cloud_connector, cloud_connector_id
          FROM user
         WHERE user.id = :user_obj_id;`, userFilters );

         let user = {};
         data.user_obj = {};
         if (user_results.length > 0)
         {
            user = user_results[0];
            data.user_obj = user;
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
         data.user_obj.company_obj = {};
         if (company_results.length > 0)
         {
            company = company_results[0];
            data.user_obj.company_obj = company;
         }

         /* SELECTION QUERY - country - */

         const countryFilters = {
            country_obj_id: user?.country_id
         };

         const [country_results] = await conn.query(
         `SELECT id, created_by, created_on, modified_by, modified_on, name, cluster_id, code
          FROM country
         WHERE country.id = :country_obj_id;`, countryFilters );

         let country = {};
         data.user_obj.country_obj = {};
         if (country_results.length > 0)
         {
            country = country_results[0];
            data.user_obj.country_obj = country;
         }

         /* SELECTION QUERY - cluster - */

         const clusterFilters = {
            cluster_obj_id: country?.cluster_id
         };

         const [cluster_results] = await conn.query(
         `SELECT id, created_by, created_on, modified_by, modified_on, name, code
          FROM cluster
         WHERE cluster.id = :cluster_obj_id;`, clusterFilters );

         let cluster = {};
         data.user_obj.country_obj.cluster_obj = {};
         if (cluster_results.length > 0)
         {
            cluster = cluster_results[0];
            data.user_obj.country_obj.cluster_obj = cluster;
         }

         /* SELECTION QUERY - market - */

         const marketFilters = {
            market_obj_id: user?.market_id
         };

         const [market_results] = await conn.query(
         `SELECT id, created_by, created_on, modified_by, modified_on, name, code
          FROM market
         WHERE market.id = :market_obj_id;`, marketFilters );

         let market = {};
         data.user_obj.market_obj = {};
         if (market_results.length > 0)
         {
            market = market_results[0];
            data.user_obj.market_obj = market;
         }

         /* SELECTION QUERY - onenet_role - */

         const onenet_roleFilters = {
            onenet_role_obj_id: user?.onenet_role_id
         };

         const [onenet_role_results] = await conn.query(
         `SELECT id, created_by, created_on, modified_by, modified_on, name, code
          FROM onenet_role
         WHERE onenet_role.id = :onenet_role_obj_id;`, onenet_roleFilters );

         let onenet_role = {};
         data.user_obj.onenet_role_obj = {};
         if (onenet_role_results.length > 0)
         {
            onenet_role = onenet_role_results[0];
            data.user_obj.onenet_role_obj = onenet_role;
         }

         /* SELECTION QUERY - user_role - */

         const user_roleFilters = {
            user_role_obj_user_id: user?.id
         };

         const [user_role_results] = await conn.query(
         `SELECT user_id, role_id
          FROM user_role
         WHERE user_role.user_id = :user_role_obj_user_id;`, user_roleFilters );

            data.user_obj.user_role_obj = user_role_results;


         /* SELECTION QUERY - cloud_connector_settings - */

         const cloud_connector_settingsFilters = {
            cloud_connector_settings_obj_id: user?.cloud_connector_id
         };

         const [cloud_connector_settings_results] = await conn.query(
         `SELECT handler_url, handler_public_url, connector_public_url, connector_management_url, connector_protocol_url, connector_control_url, id, name, created_on
          FROM cloud_connector_settings
         WHERE cloud_connector_settings.id = :cloud_connector_settings_obj_id;`, cloud_connector_settingsFilters );

         let cloud_connector_settings = {};
         data.user_obj.cloud_connector_settings_obj = {};
         if (cloud_connector_settings_results.length > 0)
         {
            cloud_connector_settings = cloud_connector_settings_results[0];
            data.user_obj.cloud_connector_settings_obj = cloud_connector_settings;
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
      try {

         /* SELECTION QUERY - user - */

         const userFilters = {
            user_obj_id: id
         };

         const [user_results] = await conn.query(
         `SELECT id, username, company_id, country_id, market_id, onenet_role_id, cloud_connector_id
          FROM user
         WHERE user.id = :user_obj_id;`, userFilters );

         let user = {};
         data.user_obj = {};
         if (user_results.length > 0)
         {
            user = user_results[0];
            data.user_obj = user;
         }

         /* SELECTION QUERY - user_role - */

         const user_roleFilters = {
            user_role_obj_user_id: user?.id
         };

         const [user_role_results] = await conn.query(
         `SELECT user_id
          FROM user_role
         WHERE user_role.user_id = :user_role_obj_user_id;`, user_roleFilters );

            data.user_obj.user_role_obj = user_role_results;



      const user_obj = data.user_obj;

      if (Object.prototype.hasOwnProperty.call(user_obj, "modified_on")) {
         user_obj.modified_on = new Date();
      }

      const [user_result] = await conn.query(
         `DELETE FROM user WHERE id = :id`, user_obj );

      const user_role_obj_array = user_obj.user_role_obj;
      for (const user_role_obj of user_role_obj_array) {

      if (Object.prototype.hasOwnProperty.call(user_role_obj, "modified_on")) {
         user_role_obj.modified_on = new Date();
      }

      const [user_role_result] = await conn.query(
         `DELETE FROM user_role WHERE user_id = :user_id`, user_role_obj );
      }

         return data;

      } catch (err) {
         throw err;
      } finally {
         conn.release();
      }

   }

}

