const pool = require('../db');
const { v4: uuid } = require('uuid');
const ModelHelper = require('../helpers/ModelHelper');

module.exports = {

   tables : {
      service_offering: {
         building_profile: { type: 'int',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         lastname: { type: 'int',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         sharing_type: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         installed_power: { type: 'int',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         billing_type: { type: 'int',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         energy_certificate: { type: 'int',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         street: { type: 'int',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         email: { type: 'int',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         id: { type: 'varchar',  primary: true,  autoIncrement: false,  isSaveStatement: true,  insert: true,  update: true },
         zipcode: { type: 'int',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         participate_in_flex_products: { type: 'int',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         ev: { type: 'int',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         production: { type: 'int',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         user_profile: { type: 'int',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         storage: { type: 'int',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         country: { type: 'int',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         data_type: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         direction: { type: 'int',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         instulation: { type: 'int',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         surface: { type: 'int',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         energy_profile: { type: 'int',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         location: { type: 'int',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         firstname: { type: 'int',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         telephone: { type: 'int',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         smart_readiness_indicator: { type: 'int',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
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
         target: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true }
      },
      service_app_view: {
         sharing_type_id: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         user_profile_code: { type: 'int',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         building_profile_code: { type: 'int',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         data_sharing_method_code: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         energy_profile_code: { type: 'int',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         type_code: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         profiles: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         building_profile: { type: 'int',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         sharing_type: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         user_profile: { type: 'int',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         energy_profile: { type: 'int',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         vocabulary_keywords: { type: 'mediumtext',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         data_sharing_method: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         profile: { type: 'int',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         business_tags: { type: 'mediumtext',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         process_tags: { type: 'mediumtext',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         type: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         title: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         id: { type: 'varchar',  primary: true,  autoIncrement: false,  isSaveStatement: true,  insert: true,  update: true }
      }
   },

   create: async (data) => {
      let sql, params, res;
      const conn = await pool.getConnection();

      try {
         await conn.beginTransaction();

         const service_offering_obj = data.service_offering_obj;
         service_offering_obj.id = uuid();
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

   update: async (data) => {
      let sql, params, res;
      const conn = await pool.getConnection();

      try {
         await conn.beginTransaction();

         const service_offering_obj = data.service_offering_obj;
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

   getById: async (id) => {
      const conn = await pool.getConnection();
      const data = {};

      try {

         /* SELECTION QUERY - service_offering - */

         const service_offeringFilters = {
            service_offering_obj_id: id
         };
         const [service_offering_results] = await conn.query(
         `SELECT building_profile, lastname, sharing_type, installed_power, billing_type, energy_certificate, street, email, id, zipcode, participate_in_flex_products, ev, production, user_profile, storage, country, data_type, direction, instulation, surface, energy_profile, location, firstname, telephone, smart_readiness_indicator, created_by, created_on, modified_by, modified_on, offering_user, status, service_id, title, description, data_sharing_method, delivery_type, target
          FROM service_offering
         WHERE service_offering.id = :service_offering_obj_id;`, service_offeringFilters );

         let service_offering = {};
         data.service_offering_obj = {};
         if (service_offering_results.length > 0)
         {
            service_offering = service_offering_results[0];
            data.service_offering_obj = service_offering;
         }

         /* SELECTION QUERY - service_app_view - */

         const service_app_viewFilters = {
            service_app_view_obj_id: service_offering?.service_id
         };
         const [service_app_view_results] = await conn.query(
         `SELECT sharing_type_id, user_profile_code, building_profile_code, data_sharing_method_code, energy_profile_code, type_code, profiles, building_profile, sharing_type, user_profile, energy_profile, vocabulary_keywords, data_sharing_method, profile, business_tags, process_tags, type, title, id
          FROM  ( SELECT srv.id         AS id,  srv.title      AS title,   CASE    WHEN srv.data_sharing_method = 'one_way' THEN '<i class="fa fa-arrow-right"></i> One Way'   WHEN srv.data_sharing_method = 'two_way' THEN '<i class="fa fa-arrow-right-arrow-left"></i> Two Ways'   ELSE ''  END AS data_sharing_method,    CASE    WHEN srv.type = 'building_to_grid' THEN '<i class="fa fa-building"></i> Building-to-Grid (B2G) Service'   WHEN srv.type = 'grid_to_building' THEN '<i class="fa fa-plug"></i> Grid-to-Building (G2B) Service'   WHEN srv.type = 'human_to' THEN '<i class="fa fa-users"></i> Human-to-Building Interface & Interactivity'   WHEN srv.type = 'system_int' THEN '<i class="fa fa-network-wired"></i> Systems Interoperability'   WHEN srv.type = 'building_data' THEN '<i class="fa fa-database"></i> Building-to-Data-Consumers Service'   ELSE ''  END AS type,      srv.user_profile AS profile,    (SELECT GROUP_CONCAT(CONCAT('<i class="fa fa-tags"></i> ', bt.title, '<br>') SEPARATOR '')    FROM service_business_tag sbt    INNER JOIN business_tag bt     ON sbt.business_tag_id = bt.id    WHERE sbt.service_id = srv.id  ) AS business_tags,    (SELECT GROUP_CONCAT(CONCAT('<i class="fa fa-tag"></i> ', bt.title, '<br>') SEPARATOR '')   FROM   service_process_tag sbt    INNER JOIN process_tag bt      ON sbt.process_tag_id = bt.id   WHERE  sbt.service_id = srv.id) AS process_tags,        (SELECT GROUP_CONCAT(CONCAT('<i class="fa fa-hashtag"></i> ', bt.title, '<br>') SEPARATOR '')   FROM   service_vocabulary_keyword sbt    INNER JOIN vocabulary_keywords bt      ON sbt.vocabulary_keyword_id = bt.id   WHERE  sbt.service_id = srv.id) AS vocabulary_keywords,      CONCAT(   CASE     WHEN srv.user_profile = 1 THEN '<i class="fa fa-toggle-on enabled-toggle"></i> User Profile <br>'    ELSE '<i class="fa fa-toggle-off disabled-toggle"></i> User Profile <br>'   END,      CASE     WHEN srv.building_profile = 1 THEN '<i class="fa fa-toggle-on enabled-toggle"></i> Building Profile <br>'    ELSE '<i class="fa fa-toggle-off disabled-toggle"></i> Building Profile <br>'   END,      CASE     WHEN srv.energy_profile = 1 THEN '<i class="fa fa-toggle-on enabled-toggle"></i> Energy Profile <br>'    ELSE '<i class="fa fa-toggle-off disabled-toggle"></i> Energy Profile <br>'   END      ) AS profiles,      CASE    WHEN srv.sharing_type = 'wizard' THEN '<i class="fa fa-hat-wizard"></i> Wizard'   WHEN srv.sharing_type = 'files' THEN '<i class="fa fa-file-lines"></i> Files'   ELSE ''  END AS sharing_type,      srv.user_profile,  srv.building_profile,  srv.energy_profile,  srv.sharing_type AS sharing_type_id,  srv.type AS type_code,  srv.data_sharing_method AS data_sharing_method_code,    srv.user_profile AS user_profile_code,    srv.energy_profile AS energy_profile_code,    srv.building_profile AS building_profile_code  FROM   service srv  ) service_app_view
         WHERE service_app_view.id = :service_app_view_obj_id;`, service_app_viewFilters );

         let service_app_view = {};
         data.service_offering_obj.service_app_view_obj = {};
         if (service_app_view_results.length > 0)
         {
            service_app_view = service_app_view_results[0];
            data.service_offering_obj.service_app_view_obj = service_app_view;
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

         const service_offeringFilters = {
            service_offering_obj_id: id
         };

         const [service_offering_results] = await conn.query(
         `SELECT id, service_id
          FROM service_offering
         WHERE service_offering.id = :service_offering_obj_id;`, service_offeringFilters );

         let service_offering = {};
         data.service_offering_obj = {};
         if (service_offering_results.length > 0)
         {
            service_offering = service_offering_results[0];
            data.service_offering_obj = service_offering;
         }


         /* DELETE FROM DATABASE USING KEYS */

         const service_offering_obj = data.service_offering_obj;
         await conn.query(
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