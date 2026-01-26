const pool = require('../../db');
const ModelHelper = require('../../helpers/ModelHelper');

module.exports = {

   listFields: {
      cf_owner: { virtual: true, db_table: '', db_field: '', section: 'column', type: 'varchar', primary: false, autoIncrement: false, filterOperator: '=' },
      cf_id: { virtual: false, db_table: 'service_offering', db_field: 'id', section: 'column', type: 'varchar', primary: true, autoIncrement: false, filterOperator: 'like' },
      cf_title_1: { virtual: false, db_table: 'service_offering', db_field: 'title', section: 'column', type: 'varchar', primary: false, autoIncrement: false, filterOperator: 'like' },
      cf_title: { virtual: false, db_table: 'service_app_view', db_field: 'title', section: 'column', type: 'varchar', primary: false, autoIncrement: false, filterOperator: 'like' },
      cf_data_sharing_method: { virtual: false, db_table: 'service_app_view', db_field: 'data_sharing_method', section: 'column', type: 'varchar', primary: false, autoIncrement: false, filterOperator: 'like' },
      cf_type: { virtual: false, db_table: 'service_app_view', db_field: 'type', section: 'column', type: 'varchar', primary: false, autoIncrement: false, filterOperator: 'like' },
      cf_business_tags: { virtual: false, db_table: 'service_app_view', db_field: 'business_tags', section: 'column', type: 'mediumtext', primary: false, autoIncrement: false, filterOperator: '=' },
      cf_process_tags: { virtual: false, db_table: 'service_app_view', db_field: 'process_tags', section: 'column', type: 'mediumtext', primary: false, autoIncrement: false, filterOperator: '=' },
      cf_profiles: { virtual: false, db_table: 'service_app_view', db_field: 'profiles', section: 'column', type: 'varchar', primary: false, autoIncrement: false, filterOperator: 'like' },
      cf_vocabulary_keywords: { virtual: false, db_table: 'service_app_view', db_field: 'vocabulary_keywords', section: 'column', type: 'mediumtext', primary: false, autoIncrement: false, filterOperator: '=' },
      cf_created_on: { virtual: false, db_table: 'service_offering', db_field: 'created_on', section: 'column', type: 'datetime', primary: false, autoIncrement: false, filterOperator: '=' },
      cf_sharing_type: { virtual: false, db_table: 'service_app_view', db_field: 'sharing_type', section: 'column', type: 'varchar', primary: false, autoIncrement: false, filterOperator: 'like' },
      of_created_on: { virtual: false, db_table: 'service_offering', db_field: 'created_on', section: 'orderby', type: 'datetime', primary: false, autoIncrement: false, filterOperator: '=' },
      owner_left_filter: { virtual: true, db_table: '', db_field: '', section: 'leftgroup', type: 'varchar', primary: false, autoIncrement: false, filterOperator: '=' },
      gf_data_sharing_method: { virtual: false, db_table: 'service_app_view', db_field: 'data_sharing_method', section: 'leftgroup', type: 'varchar', primary: false, autoIncrement: false, filterOperator: '=' }
   },

   fromSql:
      `FROM
         service_offering service_offering
         LEFT OUTER JOIN (SELECT srv.id AS id, srv.title AS title, CASE WHEN srv.data_sharing_method = 'one_way' THEN '<i class="fa fa-arrow-right"></i> One Way' WHEN srv.data_sharing_method = 'two_way' THEN '<i class="fa fa-arrow-right-arrow-left"></i> Two Ways' ELSE '' END AS data_sharing_method, CASE WHEN srv.type = 'building_to_grid' THEN '<i class="fa fa-building"></i> Building-to-Grid (B2G) Service' WHEN srv.type = 'grid_to_building' THEN '<i class="fa fa-plug"></i> Grid-to-Building (G2B) Service' WHEN srv.type = 'human_to' THEN '<i class="fa fa-users"></i> Human-to-Building Interface & Interactivity' WHEN srv.type = 'system_int' THEN '<i class="fa fa-network-wired"></i> Systems Interoperability' WHEN srv.type = 'building_data' THEN '<i class="fa fa-database"></i> Building-to-Data-Consumers Service' ELSE '' END AS type, srv.user_profile AS profile, (SELECT GROUP_CONCAT(CONCAT('<i class="fa fa-tags"></i> ', bt.title, '<br>') SEPARATOR '') FROM service_business_tag sbt INNER JOIN business_tag bt ON sbt.business_tag_id = bt.id WHERE sbt.service_id = srv.id ) AS business_tags, (SELECT GROUP_CONCAT(CONCAT('<i class="fa fa-tag"></i> ', bt.title, '<br>') SEPARATOR '') FROM service_process_tag sbt INNER JOIN process_tag bt ON sbt.process_tag_id = bt.id WHERE sbt.service_id = srv.id) AS process_tags, (SELECT GROUP_CONCAT(CONCAT('<i class="fa fa-hashtag"></i> ', bt.title, '<br>') SEPARATOR '') FROM service_vocabulary_keyword sbt INNER JOIN vocabulary_keywords bt ON sbt.vocabulary_keyword_id = bt.id WHERE sbt.service_id = srv.id) AS vocabulary_keywords, CONCAT( CASE WHEN srv.user_profile = 1 THEN '<i class="fa fa-toggle-on enabled-toggle"></i> User Profile <br>' ELSE '<i class="fa fa-toggle-off disabled-toggle"></i> User Profile <br>' END, CASE WHEN srv.building_profile = 1 THEN '<i class="fa fa-toggle-on enabled-toggle"></i> Building Profile <br>' ELSE '<i class="fa fa-toggle-off disabled-toggle"></i> Building Profile <br>' END, CASE WHEN srv.energy_profile = 1 THEN '<i class="fa fa-toggle-on enabled-toggle"></i> Energy Profile <br>' ELSE '<i class="fa fa-toggle-off disabled-toggle"></i> Energy Profile <br>' END ) AS profiles, CASE WHEN srv.sharing_type = 'wizard' THEN '<i class="fa fa-hat-wizard"></i> Wizard' WHEN srv.sharing_type = 'files' THEN '<i class="fa fa-file-lines"></i> Files' ELSE '' END AS sharing_type, srv.user_profile, srv.building_profile, srv.energy_profile, srv.sharing_type AS sharing_type_id, srv.type AS type_code, srv.data_sharing_method AS data_sharing_method_code, srv.user_profile AS user_profile_code, srv.energy_profile AS energy_profile_code, srv.building_profile AS building_profile_code FROM service srv )service_app_view ON service_app_view.id = service_offering.service_id`,

   getList: async ({ filters, userId }) => {
      const conn = await pool.getConnection();

      try {

         const { whereSql, params } = ModelHelper.buildWhere(module.exports.listFields, filters);
         const orderBySql = ModelHelper.buildOrderBy(module.exports.listFields, filters);

         const [results] = await conn.query(`
         SELECT 
            service_offering.id as cf_id, 
            service_offering.title as cf_title_1, 
            service_app_view.title as cf_title, 
            service_app_view.data_sharing_method as cf_data_sharing_method, 
            service_app_view.type as cf_type, 
            service_app_view.business_tags as cf_business_tags, 
            service_app_view.process_tags as cf_process_tags, 
            service_app_view.profiles as cf_profiles, 
            service_app_view.vocabulary_keywords as cf_vocabulary_keywords, 
            service_offering.created_on as cf_created_on, 
            service_app_view.sharing_type as cf_sharing_type, 
            (SELECT CONCAT(company.name,' <i class="fa fa-caret-right"></i> ', user.username) FROM user user INNER JOIN company company ON user.company_id = company.id WHERE user.id = service_offering.offering_user) as cf_owner
         ${module.exports.fromSql}
         ${whereSql} ${orderBySql}`, params);

         return results;

      } catch (err) {
         throw err;
      } finally {
         conn.release();
      }
   },

   getOwnerLeftFilterList: async ({filters, userId }) => {
      const conn = await pool.getConnection();

      try {

      const { whereSql, params } = ModelHelper.buildWhere(module.exports.listFields, filters);

         const [results] = await conn.query(`
         SELECT 
            (SELECT CONCAT(company.name,' <i class="fa fa-caret-right"></i> ', user.username) FROM user user INNER JOIN company company ON user.company_id = company.id WHERE user.id = service_offering.offering_user) as owner_left_filter, 
            count(*) AS total
         ${module.exports.fromSql}
         ${whereSql}
         GROUP BY 
            (SELECT CONCAT(company.name,' <i class="fa fa-caret-right"></i> ', user.username) FROM user user INNER JOIN company company ON user.company_id = company.id WHERE user.id = service_offering.offering_user)`
         , params);

         return results;

      } catch (err) {
         throw err;
      } finally {
         conn.release();
      }
   },

   getGfDataSharingMethodList: async ({filters, userId }) => {
      const conn = await pool.getConnection();

      try {

      const { whereSql, params } = ModelHelper.buildWhere(module.exports.listFields, filters);

         const [results] = await conn.query(`
         SELECT 
            service_app_view.data_sharing_method as gf_data_sharing_method, 
            count(*) AS total
         ${module.exports.fromSql}
         ${whereSql}
         GROUP BY 
            service_app_view.data_sharing_method`
         , params);

         return results;

      } catch (err) {
         throw err;
      } finally {
         conn.release();
      }
   }

}

