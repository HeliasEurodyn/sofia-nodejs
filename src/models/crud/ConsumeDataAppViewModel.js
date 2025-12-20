const pool = require('../db');
const { v4: uuid } = require('uuid');
const ModelHelper = require('../helpers/ModelHelper');

module.exports = {

   tables : {
      consume_data_app_view: {
         wizard_desctiption: { type: 'text',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         type_code: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         service_offering_title: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         sharing_type: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         provide_user: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         offering_id: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         sharing_type_code: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         vocabulary_keywords_html: { type: 'mediumtext',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         process_tags_html: { type: 'mediumtext',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         file_size: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         profiles_html: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         business_tags_html: { type: 'mediumtext',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         type_html: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         data_sharing_method_html: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         description: { type: 'text',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         offering_user_id: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         provide_data_id: { type: 'varchar',  primary: true,  autoIncrement: false,  isSaveStatement: true,  insert: true,  update: true },
         file: { type: 'mediumtext',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         file_name: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         offering_user: { type: 'text',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         subscription_user_id: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         subscription_id: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         created_on: { type: 'timestamp',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         title: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         offering_status: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         subscription_status: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         offering_status_html: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         subscription_user: { type: 'text',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         subscription_status_html: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true }
      },
      service_wizard_field_values: {
         provide_data_id: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: true,  insert: true,  update: true },
         id: { type: 'varchar',  primary: true,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         offering_id: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         field_id: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         field_value: { type: 'text',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true }
      }
   },

   getById: async (id) => {
      const conn = await pool.getConnection();
      const data = {};

      try {

         /* SELECTION QUERY - consume_data_app_view - */

         const consume_data_app_viewFilters = {
            consume_data_app_view_obj_provide_data_id: id
         };
         const [consume_data_app_view_results] = await conn.query(
         `SELECT wizard_desctiption, type_code, service_offering_title, sharing_type, provide_user, offering_id, sharing_type_code, vocabulary_keywords_html, process_tags_html, file_size, profiles_html, business_tags_html, type_html, data_sharing_method_html, description, offering_user_id, provide_data_id, file, file_name, offering_user, subscription_user_id, subscription_id, created_on, title, offering_status, subscription_status, offering_status_html, subscription_user, subscription_status_html
          FROM  ( SELECT  p.id AS provide_data_id, s.id AS subscription_id, s.offering_id, s.subscription_user AS subscription_user_id, s.status AS subscription_status, so.status AS offering_status, so.offering_user AS offering_user_id, p.file, p.file_name, p.file_size, p.title, p.description, p.created_on,   (SELECT CONCAT(company.name,' <i class="fa fa-caret-right"></i> ', user.username)    FROM user user   INNER JOIN company company ON user.company_id = company.id   WHERE user.id = s.subscription_user ) AS subscription_user,  (SELECT CONCAT(company.name,' <i class="fa fa-caret-right"></i> ', user.username)    FROM user user   INNER JOIN company company ON user.company_id = company.id   WHERE user.id = so.offering_user ) AS offering_user,   CASE    WHEN s.status = 'pending' THEN '<span class="pending-label"><i class="fa-solid fa-spinner rotate"></i> Pending</span>'   WHEN s.status = 'accept' THEN '<span class="accept-label"><i class="fa fa-check accept"></i> Accepted</span>'   WHEN s.status = 'reject' THEN '<span class="reject-label"><i class="fa fa-times reject"></i> Rejected</span>'   ELSE ''  END AS subscription_status_html,    CASE    WHEN so.status = 'pending' THEN '<span class="pending-label"><i class="fa-solid fa-spinner rotate"></i> Pending</span>'   WHEN so.status = 'accept' THEN '<span class="accept-label"><i class="fa fa-check accept"></i> Accepted</span>'   WHEN so.status = 'reject' THEN '<span class="reject-label"><i class="fa fa-times reject"></i> Rejected</span>'   ELSE ''  END AS offering_status_html,    CASE    WHEN srv.data_sharing_method = 'one_way' THEN '<i class="fa fa-arrow-right"></i> One Way'   WHEN srv.data_sharing_method = 'two_way' THEN '<i class="fa fa-arrow-right-arrow-left"></i> Two Ways'   ELSE ''  END AS data_sharing_method_html,    CASE    WHEN srv.type = 'building_to_grid' THEN '<i class="fa fa-building"></i> Building-to-Grid (B2G) Service'   WHEN srv.type = 'grid_to_building' THEN '<i class="fa fa-plug"></i> Grid-to-Building (G2B) Service'   WHEN srv.type = 'human_to' THEN '<i class="fa fa-users"></i> Human-to-Building Interface & Interactivity'   WHEN srv.type = 'system_int' THEN '<i class="fa fa-network-wired"></i> Systems Interoperability'   WHEN srv.type = 'building_data' THEN '<i class="fa fa-database"></i> Building-to-Data-Consumers Service'   ELSE ''   END AS type_html,    (SELECT GROUP_CONCAT(CONCAT('<i class="fa fa-tags"></i> ', bt.title, '<br>') SEPARATOR '')    FROM service_business_tag sbt    INNER JOIN business_tag bt     ON sbt.business_tag_id = bt.id    WHERE sbt.service_id = srv.id   ) AS business_tags_html,     (SELECT GROUP_CONCAT(CONCAT('<i class="fa fa-tag"></i> ', bt.title, '<br>') SEPARATOR '')   FROM   service_process_tag sbt    INNER JOIN process_tag bt      ON sbt.process_tag_id = bt.id   WHERE  sbt.service_id = srv.id) AS process_tags_html,         (SELECT GROUP_CONCAT(CONCAT('<i class="fa fa-hashtag"></i> ', bt.title, '<br>') SEPARATOR '')   FROM   service_vocabulary_keyword sbt    INNER JOIN vocabulary_keywords bt      ON sbt.vocabulary_keyword_id = bt.id   WHERE  sbt.service_id = srv.id) AS vocabulary_keywords_html,      CONCAT(   CASE     WHEN srv.user_profile = 1 THEN '<i class="fa fa-toggle-on enabled-toggle"></i> User Profile <br>'    ELSE '<i class="fa fa-toggle-off disabled-toggle"></i> User Profile <br>'   END,      CASE     WHEN srv.building_profile = 1 THEN '<i class="fa fa-toggle-on enabled-toggle"></i> Building Profile <br>'    ELSE '<i class="fa fa-toggle-off disabled-toggle"></i> Building Profile <br>'   END,      CASE     WHEN srv.energy_profile = 1 THEN '<i class="fa fa-toggle-on enabled-toggle"></i> Energy Profile <br>'    ELSE '<i class="fa fa-toggle-off disabled-toggle"></i> Energy Profile <br>'   END   ) AS profiles_html,      CASE     WHEN so.sharing_type = 'wizard' THEN '<i class="fa fa-hat-wizard"></i> Wizard'    WHEN so.sharing_type = 'files' THEN '<i class="fa fa-file-lines"></i> Files'   ELSE ''   END AS sharing_type,     so.sharing_type AS sharing_type_code,   srv.wizard_desctiption,    p.provide_user,    so.title AS service_offering_title,   srv.type AS type_code  FROM provide_data p INNER JOIN service_offering so ON p.service_offering_id = so.id  INNER JOIN subscription s ON s.offering_id = so.id  INNER JOIN service srv ON so.service_id = srv.id  WHERE s.status = 'accept' ) consume_data_app_view
         WHERE consume_data_app_view.provide_data_id = :consume_data_app_view_obj_provide_data_id;`, consume_data_app_viewFilters );

         let consume_data_app_view = {};
         data.consume_data_app_view_obj = {};
         if (consume_data_app_view_results.length > 0)
         {
            consume_data_app_view = consume_data_app_view_results[0];
            data.consume_data_app_view_obj = consume_data_app_view;
         }

         /* SELECTION QUERY - service_wizard_field_values - */

         const service_wizard_field_valuesFilters = {
            service_wizard_field_values_obj_provide_data_id: consume_data_app_view?.provide_data_id
         };
         const [service_wizard_field_values_results] = await conn.query(
         `SELECT provide_data_id, id, offering_id, field_id, field_value
          FROM service_wizard_field_values
         WHERE service_wizard_field_values.provide_data_id = :service_wizard_field_values_obj_provide_data_id;`, service_wizard_field_valuesFilters );

            data.consume_data_app_view_obj.service_wizard_field_values_obj = service_wizard_field_values_results;


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

         const consume_data_app_viewFilters = {
            consume_data_app_view_obj_provide_data_id: id
         };

         const [consume_data_app_view_results] = await conn.query(
         `SELECT provide_data_id
          FROM  ( SELECT  p.id AS provide_data_id, s.id AS subscription_id, s.offering_id, s.subscription_user AS subscription_user_id, s.status AS subscription_status, so.status AS offering_status, so.offering_user AS offering_user_id, p.file, p.file_name, p.file_size, p.title, p.description, p.created_on,   (SELECT CONCAT(company.name,' <i class="fa fa-caret-right"></i> ', user.username)    FROM user user   INNER JOIN company company ON user.company_id = company.id   WHERE user.id = s.subscription_user ) AS subscription_user,  (SELECT CONCAT(company.name,' <i class="fa fa-caret-right"></i> ', user.username)    FROM user user   INNER JOIN company company ON user.company_id = company.id   WHERE user.id = so.offering_user ) AS offering_user,   CASE    WHEN s.status = 'pending' THEN '<span class="pending-label"><i class="fa-solid fa-spinner rotate"></i> Pending</span>'   WHEN s.status = 'accept' THEN '<span class="accept-label"><i class="fa fa-check accept"></i> Accepted</span>'   WHEN s.status = 'reject' THEN '<span class="reject-label"><i class="fa fa-times reject"></i> Rejected</span>'   ELSE ''  END AS subscription_status_html,    CASE    WHEN so.status = 'pending' THEN '<span class="pending-label"><i class="fa-solid fa-spinner rotate"></i> Pending</span>'   WHEN so.status = 'accept' THEN '<span class="accept-label"><i class="fa fa-check accept"></i> Accepted</span>'   WHEN so.status = 'reject' THEN '<span class="reject-label"><i class="fa fa-times reject"></i> Rejected</span>'   ELSE ''  END AS offering_status_html,    CASE    WHEN srv.data_sharing_method = 'one_way' THEN '<i class="fa fa-arrow-right"></i> One Way'   WHEN srv.data_sharing_method = 'two_way' THEN '<i class="fa fa-arrow-right-arrow-left"></i> Two Ways'   ELSE ''  END AS data_sharing_method_html,    CASE    WHEN srv.type = 'building_to_grid' THEN '<i class="fa fa-building"></i> Building-to-Grid (B2G) Service'   WHEN srv.type = 'grid_to_building' THEN '<i class="fa fa-plug"></i> Grid-to-Building (G2B) Service'   WHEN srv.type = 'human_to' THEN '<i class="fa fa-users"></i> Human-to-Building Interface & Interactivity'   WHEN srv.type = 'system_int' THEN '<i class="fa fa-network-wired"></i> Systems Interoperability'   WHEN srv.type = 'building_data' THEN '<i class="fa fa-database"></i> Building-to-Data-Consumers Service'   ELSE ''   END AS type_html,    (SELECT GROUP_CONCAT(CONCAT('<i class="fa fa-tags"></i> ', bt.title, '<br>') SEPARATOR '')    FROM service_business_tag sbt    INNER JOIN business_tag bt     ON sbt.business_tag_id = bt.id    WHERE sbt.service_id = srv.id   ) AS business_tags_html,     (SELECT GROUP_CONCAT(CONCAT('<i class="fa fa-tag"></i> ', bt.title, '<br>') SEPARATOR '')   FROM   service_process_tag sbt    INNER JOIN process_tag bt      ON sbt.process_tag_id = bt.id   WHERE  sbt.service_id = srv.id) AS process_tags_html,         (SELECT GROUP_CONCAT(CONCAT('<i class="fa fa-hashtag"></i> ', bt.title, '<br>') SEPARATOR '')   FROM   service_vocabulary_keyword sbt    INNER JOIN vocabulary_keywords bt      ON sbt.vocabulary_keyword_id = bt.id   WHERE  sbt.service_id = srv.id) AS vocabulary_keywords_html,      CONCAT(   CASE     WHEN srv.user_profile = 1 THEN '<i class="fa fa-toggle-on enabled-toggle"></i> User Profile <br>'    ELSE '<i class="fa fa-toggle-off disabled-toggle"></i> User Profile <br>'   END,      CASE     WHEN srv.building_profile = 1 THEN '<i class="fa fa-toggle-on enabled-toggle"></i> Building Profile <br>'    ELSE '<i class="fa fa-toggle-off disabled-toggle"></i> Building Profile <br>'   END,      CASE     WHEN srv.energy_profile = 1 THEN '<i class="fa fa-toggle-on enabled-toggle"></i> Energy Profile <br>'    ELSE '<i class="fa fa-toggle-off disabled-toggle"></i> Energy Profile <br>'   END   ) AS profiles_html,      CASE     WHEN so.sharing_type = 'wizard' THEN '<i class="fa fa-hat-wizard"></i> Wizard'    WHEN so.sharing_type = 'files' THEN '<i class="fa fa-file-lines"></i> Files'   ELSE ''   END AS sharing_type,     so.sharing_type AS sharing_type_code,   srv.wizard_desctiption,    p.provide_user,    so.title AS service_offering_title,   srv.type AS type_code  FROM provide_data p INNER JOIN service_offering so ON p.service_offering_id = so.id  INNER JOIN subscription s ON s.offering_id = so.id  INNER JOIN service srv ON so.service_id = srv.id  WHERE s.status = 'accept' ) consume_data_app_view
         WHERE consume_data_app_view.provide_data_id = :consume_data_app_view_obj_provide_data_id;`, consume_data_app_viewFilters );

         let consume_data_app_view = {};
         data.consume_data_app_view_obj = {};
         if (consume_data_app_view_results.length > 0)
         {
            consume_data_app_view = consume_data_app_view_results[0];
            data.consume_data_app_view_obj = consume_data_app_view;
         }


         /* DELETE FROM DATABASE USING KEYS */

         const consume_data_app_view_obj = data.consume_data_app_view_obj;
         await conn.query(
            `DELETE FROM consume_data_app_view WHERE provide_data_id = :provide_data_id`, consume_data_app_view_obj );

         await conn.commit();

      } catch (err) {
         await conn.rollback();
         throw err;
      } finally {
         conn.release();
      }
   }

}