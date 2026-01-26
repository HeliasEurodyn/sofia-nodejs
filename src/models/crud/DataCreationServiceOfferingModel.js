const pool = require('../../db');
const { v4: uuid } = require('uuid');
const ModelHelper = require('../../helpers/ModelHelper');

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
      },
      service_offering: {
         id: { type: 'varchar',  primary: true,  autoIncrement: false,  isSaveStatement: true,  insert: true,  update: true },
         created_by: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         created_on: { type: 'datetime',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         modified_by: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         modified_on: { type: 'datetime',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         offering_user: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         status: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         service_id: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         title: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         description: { type: 'text',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         data_sharing_method: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         delivery_type: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         target: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         user_profile: { type: 'int',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         energy_profile: { type: 'int',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         building_profile: { type: 'int',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         firstname: { type: 'int',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         lastname: { type: 'int',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         email: { type: 'int',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         country: { type: 'int',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         street: { type: 'int',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         zipcode: { type: 'int',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         telephone: { type: 'int',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         location: { type: 'int',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         installed_power: { type: 'int',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         billing_type: { type: 'int',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         participate_in_flex_products: { type: 'int',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         production: { type: 'int',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         storage: { type: 'int',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         ev: { type: 'int',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         surface: { type: 'int',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         direction: { type: 'int',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         instulation: { type: 'int',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         energy_certificate: { type: 'int',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         smart_readiness_indicator: { type: 'int',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         data_type: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         sharing_type: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true }
      }
   },

   create: async ({ data, userId }) => {
      let sql, params, res;
      const conn = await pool.getConnection();

      try {
         await conn.beginTransaction();

         const provide_data_obj = data.provide_data_obj;
         provide_data_obj.id = uuid();
         await ModelHelper.insert(conn, 'provide_data', module.exports.tables['provide_data'], provide_data_obj);

         const service_offering_obj = provide_data_obj.service_offering_obj;
         service_offering_obj.id = uuid();
         service_offering_obj.id = provide_data_obj.service_offering_id;
         await ModelHelper.insert(conn, 'service_offering', module.exports.tables['service_offering'], service_offering_obj);

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

         const provide_data_obj = data.provide_data_obj;
         await ModelHelper.update(conn, 'provide_data', module.exports.tables['provide_data'], provide_data_obj);

         const service_offering_obj = provide_data_obj.service_offering_obj;
         service_offering_obj.id = provide_data_obj.service_offering_id;
         await ModelHelper.update(conn, 'service_offering', module.exports.tables['service_offering'], service_offering_obj);

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

         /* SELECTION QUERY - provide_data - */

         const provide_dataFilters = [id
         ];
         const [provide_data_results] = await conn.execute(
         `SELECT notification_send, id, created_by, created_on, modified_by, modified_on, file, file_name, file_size, file_type, title, description, service_offering_id, provide_user
          FROM provide_data
         WHERE provide_data.id = ? `, provide_dataFilters );

         let provide_data = {};
         data.provide_data_obj = {};
         if (provide_data_results.length > 0)
         {
            provide_data = provide_data_results[0];
            data.provide_data_obj = provide_data;
         } else {
            return data;
         }

         /* SELECTION QUERY - service_offering - */

         const service_offeringFilters = [provide_data?.service_offering_id
         ];
         const [service_offering_results] = await conn.execute(
         `SELECT id, created_by, created_on, modified_by, modified_on, offering_user, status, service_id, title, description, data_sharing_method, delivery_type, target, user_profile, energy_profile, building_profile, firstname, lastname, email, country, street, zipcode, telephone, location, installed_power, billing_type, participate_in_flex_products, production, storage, ev, surface, direction, instulation, energy_certificate, smart_readiness_indicator, data_type, sharing_type
          FROM service_offering
         WHERE service_offering.id = ? `, service_offeringFilters );

         let service_offering = {};
         data.provide_data_obj.service_offering_obj = {};
         if (service_offering_results.length > 0)
         {
            service_offering = service_offering_results[0];
            data.provide_data_obj.service_offering_obj = service_offering;
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

         const provide_dataFilters = [id
         ];

         const [provide_data_results] = await conn.execute(
         `SELECT id, service_offering_id
          FROM provide_data
         WHERE provide_data.id = ? `, provide_dataFilters );

         let provide_data = {};
         data.provide_data_obj = {};
         if (provide_data_results.length > 0)
         {
            provide_data = provide_data_results[0];
            data.provide_data_obj = provide_data;
         }

         const service_offeringFilters = [provide_data?.service_offering_id
         ];

         const [service_offering_results] = await conn.execute(
         `SELECT id
          FROM service_offering
         WHERE service_offering.id = ? `, service_offeringFilters );

         let service_offering = {};
         data.provide_data_obj.service_offering_obj = {};
         if (service_offering_results.length > 0)
         {
            service_offering = service_offering_results[0];
            data.provide_data_obj.service_offering_obj = service_offering;
         }


         /* DELETE FROM DATABASE USING KEYS */

         const provide_data_obj = data.provide_data_obj;
         await conn.execute(
            `DELETE FROM provide_data WHERE id = :id`, provide_data_obj );

         const service_offering_obj = provide_data_obj.service_offering_obj;
         await conn.execute(
            `DELETE FROM service_offering WHERE id = :id`, service_offering_obj );

         await conn.commit();

      } catch (err) {
         await conn.rollback();
         throw err;
      } finally {
         conn.release();
      }
   }

}