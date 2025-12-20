const pool = require('../db');
const { v4: uuid } = require('uuid');
const ModelHelper = require('../helpers/ModelHelper');

module.exports = {

   tables : {
      cloud_connector_settings: {
         created_on: { type: 'datetime',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         handler_url: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         handler_public_url: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         connector_public_url: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         connector_management_url: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         connector_protocol_url: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         connector_control_url: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         id: { type: 'varchar',  primary: true,  autoIncrement: false,  isSaveStatement: true,  insert: true,  update: true },
         name: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true }
      }
   },

   create: async (data) => {
      let sql, params, res;
      const conn = await pool.getConnection();

      try {
         await conn.beginTransaction();

         const cloud_connector_settings_obj = data.cloud_connector_settings_obj;
         cloud_connector_settings_obj.id = uuid();
         await ModelHelper.insert(conn, 'cloud_connector_settings', module.exports.tables['cloud_connector_settings'], cloud_connector_settings_obj);

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

         const cloud_connector_settings_obj = data.cloud_connector_settings_obj;
         await ModelHelper.update(conn, 'cloud_connector_settings', module.exports.tables['cloud_connector_settings'], cloud_connector_settings_obj);

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

         /* SELECTION QUERY - cloud_connector_settings - */

         const cloud_connector_settingsFilters = {
            cloud_connector_settings_obj_id: id
         };
         const [cloud_connector_settings_results] = await conn.query(
         `SELECT created_on, handler_url, handler_public_url, connector_public_url, connector_management_url, connector_protocol_url, connector_control_url, id, name
          FROM cloud_connector_settings
         WHERE cloud_connector_settings.id = :cloud_connector_settings_obj_id;`, cloud_connector_settingsFilters );

         let cloud_connector_settings = {};
         data.cloud_connector_settings_obj = {};
         if (cloud_connector_settings_results.length > 0)
         {
            cloud_connector_settings = cloud_connector_settings_results[0];
            data.cloud_connector_settings_obj = cloud_connector_settings;
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

         const cloud_connector_settingsFilters = {
            cloud_connector_settings_obj_id: id
         };

         const [cloud_connector_settings_results] = await conn.query(
         `SELECT id
          FROM cloud_connector_settings
         WHERE cloud_connector_settings.id = :cloud_connector_settings_obj_id;`, cloud_connector_settingsFilters );

         let cloud_connector_settings = {};
         data.cloud_connector_settings_obj = {};
         if (cloud_connector_settings_results.length > 0)
         {
            cloud_connector_settings = cloud_connector_settings_results[0];
            data.cloud_connector_settings_obj = cloud_connector_settings;
         }


         /* DELETE FROM DATABASE USING KEYS */

         const cloud_connector_settings_obj = data.cloud_connector_settings_obj;
         await conn.query(
            `DELETE FROM cloud_connector_settings WHERE id = :id`, cloud_connector_settings_obj );

         await conn.commit();

      } catch (err) {
         await conn.rollback();
         throw err;
      } finally {
         conn.release();
      }
   }

}