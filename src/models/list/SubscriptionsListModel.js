const pool = require('../../db');
const ModelHelper = require('../../helpers/ModelHelper');

module.exports = {

   listFields: {
      cf_id: { virtual: false,  db_table: 'subscription',  db_field: 'id',  section: 'column',  type: 'varchar',  primary: true,  autoIncrement: false },
      cf_offering_user: { virtual: false,  db_table: 'offering_app_view',  db_field: 'offering_user',  section: 'column',  type: 'varchar',  primary: false,  autoIncrement: false },
      cf_comments: { virtual: false,  db_table: 'subscription',  db_field: 'comments',  section: 'column',  type: 'text',  primary: false,  autoIncrement: false },
      cf_service_title: { virtual: false,  db_table: 'offering_app_view',  db_field: 'service_title',  section: 'column',  type: 'varchar',  primary: false,  autoIncrement: false },
      cf_data_sharing_method: { virtual: false,  db_table: 'offering_app_view',  db_field: 'data_sharing_method',  section: 'column',  type: 'varchar',  primary: false,  autoIncrement: false },
      cf_type: { virtual: false,  db_table: 'offering_app_view',  db_field: 'type',  section: 'column',  type: 'varchar',  primary: false,  autoIncrement: false },
      cf_business_tags: { virtual: false,  db_table: 'offering_app_view',  db_field: 'business_tags',  section: 'column',  type: 'mediumtext',  primary: false,  autoIncrement: false },
      cf_process_tags: { virtual: false,  db_table: 'offering_app_view',  db_field: 'process_tags',  section: 'column',  type: 'mediumtext',  primary: false,  autoIncrement: false },
      cf_profiles: { virtual: false,  db_table: 'offering_app_view',  db_field: 'profiles',  section: 'column',  type: 'varchar',  primary: false,  autoIncrement: false },
      cf_vocabulary_keywords: { virtual: false,  db_table: 'offering_app_view',  db_field: 'vocabulary_keywords',  section: 'column',  type: 'mediumtext',  primary: false,  autoIncrement: false },
      cf_created_on: { virtual: false,  db_table: 'subscription',  db_field: 'created_on',  section: 'column',  type: 'datetime',  primary: false,  autoIncrement: false },
      cf_sharing_type: { virtual: false,  db_table: 'offering_app_view',  db_field: 'sharing_type',  section: 'column',  type: 'varchar',  primary: false,  autoIncrement: false },
      cf_status: { virtual: false,  db_table: 'subscription',  db_field: 'status',  section: 'column',  type: 'varchar',  primary: false,  autoIncrement: false },
      of_created_on: { virtual: false,  db_table: 'subscription',  db_field: 'created_on',  section: 'orderby',  type: 'datetime',  primary: false,  autoIncrement: false },
      ft_subscription_user: { virtual: false,  db_table: 'subscription',  db_field: 'subscription_user',  section: 'filter',  type: 'varchar',  primary: false,  autoIncrement: false }
   },

   fromSql:
      `FROM
         subscription subscription
         LEFT OUTER JOIN (SELECT sof.id AS id, srv.id AS service_id, srv.title AS service_title, CASE WHEN srv.data_sharing_method = 'one_way' THEN '<i class="fa fa-arrow-right"></i> One Way' WHEN srv.data_sharing_method = 'two_way' THEN '<i class="fa fa-arrow-right-arrow-left"></i> Two Ways' ELSE '' END AS data_sharing_method, CASE WHEN srv.type = 'building_to_grid' THEN '<i class="fa fa-building"></i> Building-to-Grid (B2G) Service' WHEN srv.type = 'grid_to_building' THEN '<i class="fa fa-plug"></i> Grid-to-Building (G2B) Service' WHEN srv.type = 'human_to' THEN '<i class="fa fa-users"></i> Human-to-Building Interface & Interactivity' WHEN srv.type = 'system_int' THEN '<i class="fa fa-network-wired"></i> Systems Interoperability' WHEN srv.type = 'building_data' THEN '<i class="fa fa-database"></i> Building-to-Data-Consumers Service' ELSE '' END AS type, (SELECT GROUP_CONCAT(CONCAT('<i class="fa fa-tags"></i> ', bt.title, '<br>') SEPARATOR '') FROM service_business_tag sbt INNER JOIN business_tag bt ON sbt.business_tag_id = bt.id WHERE sbt.service_id = srv.id ) AS business_tags, (SELECT GROUP_CONCAT(CONCAT('<i class="fa fa-tag"></i> ', bt.title, '<br>') SEPARATOR '') FROM service_process_tag sbt INNER JOIN process_tag bt ON sbt.process_tag_id = bt.id WHERE sbt.service_id = srv.id) AS process_tags, (SELECT GROUP_CONCAT(CONCAT('<i class="fa fa-hashtag"></i> ', bt.title, '<br>') SEPARATOR '') FROM service_vocabulary_keyword sbt INNER JOIN vocabulary_keywords bt ON sbt.vocabulary_keyword_id = bt.id WHERE sbt.service_id = srv.id) AS vocabulary_keywords, CONCAT( CASE WHEN srv.user_profile = 1 THEN '<i class="fa fa-toggle-on enabled-toggle"></i> User Profile <br>' ELSE '<i class="fa fa-toggle-off disabled-toggle"></i> User Profile <br>' END, CASE WHEN srv.building_profile = 1 THEN '<i class="fa fa-toggle-on enabled-toggle"></i> Building Profile <br>' ELSE '<i class="fa fa-toggle-off disabled-toggle"></i> Building Profile <br>' END, CASE WHEN srv.energy_profile = 1 THEN '<i class="fa fa-toggle-on enabled-toggle"></i> Energy Profile <br>' ELSE '<i class="fa fa-toggle-off disabled-toggle"></i> Energy Profile <br>' END ) AS profiles, (SELECT CONCAT( ( CASE WHEN country.name = 'Greece' AND sof.country = 1 THEN '<img src="./assets/img/flags/1x1/gr.svg">' WHEN country.name = 'Finland' AND sof.country = 1 THEN '<img src="./assets/img/flags/1x1/fi.svg">' WHEN country.name = 'France' AND sof.country = 1 THEN '<img src="./assets/img/flags/1x1/fr.svg">' WHEN country.name = 'Sweden' AND sof.country = 1 THEN '<img src="./assets/img/flags/1x1/se.svg">' WHEN country.name = 'Slovenia' AND sof.country = 1 THEN '<img src="./assets/img/flags/1x1/si.svg">' WHEN country.name = 'Germany' AND sof.country = 1 THEN '<img src="./assets/img/flags/1x1/de.svg">' ELSE '' END ) ,' ', user.username) FROM user user INNER JOIN country country on country.id = user.country_id WHERE user.id = sof.offering_user ) AS offering_user, sof.offering_user AS offering_user_id, CASE WHEN sof.sharing_type = 'wizard' THEN '<i class="fa fa-hat-wizard"></i> Wizard' WHEN sof.sharing_type = 'files' THEN '<i class="fa fa-file-lines"></i> Files' ELSE '' END AS sharing_type, sof.sharing_type AS sharing_type_code, srv.wizard_desctiption, sof.title AS offering_title, srv.user_profile, srv.building_profile, srv.energy_profile, srv.sharing_type AS sharing_type_id, srv.type AS type_code, sof.country, sof_user.handler_url FROM service srv INNER JOIN service_offering sof on sof.service_id = srv.id INNER JOIN user sof_user ON sof_user.id = sof.offering_user )offering_app_view ON offering_app_view.id = subscription.offering_id`,

   getList: async (filters) => {
      const conn = await pool.getConnection();

      try {

         const { whereSql, params } = ModelHelper.buildWhere(module.exports.listFields, filters);

         const [results] = await conn.query(`
         SELECT 
            subscription.id as cf_id, 
            offering_app_view.offering_user as cf_offering_user, 
            subscription.comments as cf_comments, 
            offering_app_view.service_title as cf_service_title, 
            offering_app_view.data_sharing_method as cf_data_sharing_method, 
            offering_app_view.type as cf_type, 
            offering_app_view.business_tags as cf_business_tags, 
            offering_app_view.process_tags as cf_process_tags, 
            offering_app_view.profiles as cf_profiles, 
            offering_app_view.vocabulary_keywords as cf_vocabulary_keywords, 
            subscription.created_on as cf_created_on, 
            offering_app_view.sharing_type as cf_sharing_type, 
            subscription.status as cf_status
         ${module.exports.fromSql}
         ${whereSql}`, params);

         return results;

      } catch (err) {
         throw err;
      } finally {
         conn.release();
      }
   }

}

