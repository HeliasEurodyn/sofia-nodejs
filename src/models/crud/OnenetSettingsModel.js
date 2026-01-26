const pool = require('../../db');
const { v4: uuid } = require('uuid');
const ModelHelper = require('../../helpers/ModelHelper');

module.exports = {

   tables : {
      onenet_settings: {
         company_name: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         company_address: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         onenet_registry: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         phone_number: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         company_id: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         id: { type: 'bigint',  primary: true,  autoIncrement: true,  isSaveStatement: false,  insert: true,  update: true },
         created_by: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         created_on: { type: 'datetime',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         modified_by: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         modified_on: { type: 'datetime',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         orion_consumer_ip: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         orion_provider_ip: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true }
      }
   },

   create: async ({ data, userId }) => {
      let sql, params, res;
      const conn = await pool.getConnection();

      try {
         await conn.beginTransaction();

         const onenet_settings_obj = data.onenet_settings_obj;
         onenet_settings_obj.company_id = uuid();
         await ModelHelper.insert(conn, 'onenet_settings', module.exports.tables['onenet_settings'], onenet_settings_obj);

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

         const onenet_settings_obj = data.onenet_settings_obj;
         await ModelHelper.update(conn, 'onenet_settings', module.exports.tables['onenet_settings'], onenet_settings_obj);

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

         /* SELECTION QUERY - onenet_settings - */

         const onenet_settingsFilters = [id
         ];
         const [onenet_settings_results] = await conn.execute(
         `SELECT company_name, company_address, onenet_registry, phone_number, company_id, id, created_by, created_on, modified_by, modified_on, orion_consumer_ip, orion_provider_ip
          FROM onenet_settings
         WHERE onenet_settings.id = ? `, onenet_settingsFilters );

         let onenet_settings = {};
         data.onenet_settings_obj = {};
         if (onenet_settings_results.length > 0)
         {
            onenet_settings = onenet_settings_results[0];
            data.onenet_settings_obj = onenet_settings;
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

         const onenet_settingsFilters = [id
         ];

         const [onenet_settings_results] = await conn.execute(
         `SELECT id
          FROM onenet_settings
         WHERE onenet_settings.id = ? `, onenet_settingsFilters );

         let onenet_settings = {};
         data.onenet_settings_obj = {};
         if (onenet_settings_results.length > 0)
         {
            onenet_settings = onenet_settings_results[0];
            data.onenet_settings_obj = onenet_settings;
         }


         /* DELETE FROM DATABASE USING KEYS */

         const onenet_settings_obj = data.onenet_settings_obj;
         await conn.execute(
            `DELETE FROM onenet_settings WHERE id = :id`, onenet_settings_obj );
         onenet_settings_obj.id = onenet_settings_result.insertId;

         await conn.commit();

      } catch (err) {
         await conn.rollback();
         throw err;
      } finally {
         conn.release();
      }
   }

}