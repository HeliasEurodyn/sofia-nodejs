const pool = require('../../db');
const ModelHelper = require('../../helpers/ModelHelper');

module.exports = {

   listFields: {
      cf_id: { virtual: false, db_table: 'service_offering', db_field: 'id', section: 'column', type: 'varchar', primary: true, autoIncrement: false, filterOperator: 'like' },
      header_label: { virtual: false, db_table: 'service_offering', db_field: 'title', section: 'column', type: 'varchar', primary: false, autoIncrement: false, filterOperator: 'like' },
      header_icon_class: { virtual: false, db_table: 'service_app_view', db_field: 'type_code', section: 'column', type: 'varchar', primary: false, autoIncrement: false, filterOperator: 'like' },
      header_icon: { virtual: false, db_table: 'service_app_view', db_field: 'type_code', section: 'column', type: 'varchar', primary: false, autoIncrement: false, filterOperator: 'like' },
      header_image_path: { virtual: false, db_table: 'service_app_view', db_field: 'type_code', section: 'column', type: 'varchar', primary: false, autoIncrement: false, filterOperator: 'like' },
      cf_title_1: { virtual: false, db_table: 'service_offering', db_field: 'title', section: 'column', type: 'varchar', primary: false, autoIncrement: false, filterOperator: 'like' },
      cf_title: { virtual: false, db_table: 'service_app_view', db_field: 'title', section: 'column', type: 'varchar', primary: false, autoIncrement: false, filterOperator: 'like' },
      cf_data_sharing_method: { virtual: false, db_table: 'service_app_view', db_field: 'data_sharing_method', section: 'column', type: 'varchar', primary: false, autoIncrement: false, filterOperator: 'like' },
      cf_type: { virtual: false, db_table: 'service_app_view', db_field: 'type', section: 'column', type: 'varchar', primary: false, autoIncrement: false, filterOperator: 'like' },
      cf_business_tags: { virtual: false, db_table: 'service_app_view', db_field: 'business_tags', section: 'column', type: 'mediumtext', primary: false, autoIncrement: false, filterOperator: '=' },
      cf_process_tags: { virtual: false, db_table: 'service_app_view', db_field: 'process_tags', section: 'column', type: 'mediumtext', primary: false, autoIncrement: false, filterOperator: '=' },
      cf_profiles: { virtual: false, db_table: 'service_app_view', db_field: 'profiles', section: 'column', type: 'varchar', primary: false, autoIncrement: false, filterOperator: 'like' },
      cf_vocabulary_keywords: { virtual: false, db_table: 'service_app_view', db_field: 'vocabulary_keywords', section: 'column', type: 'mediumtext', primary: false, autoIncrement: false, filterOperator: '=' },
      cf_created_on: { virtual: false, db_table: 'service_offering', db_field: 'created_on', section: 'column', type: 'datetime', primary: false, autoIncrement: false, filterOperator: '=' },
      cf_sharing_type: { virtual: false, db_table: 'service_offering', db_field: 'sharing_type', section: 'column', type: 'varchar', primary: false, autoIncrement: false, filterOperator: 'like' },
      sqlf_11: { virtual: true, db_table: '', db_field: '', section: 'column', type: 'varchar', primary: false, autoIncrement: false, filterOperator: '=' },
      business_tags: { virtual: true, db_table: '', db_field: '', section: 'column', type: 'varchar', primary: false, autoIncrement: false, filterOperator: '=' },
      process_tags: { virtual: true, db_table: '', db_field: '', section: 'column', type: 'varchar', primary: false, autoIncrement: false, filterOperator: '=' },
      vocabolary_keywords: { virtual: true, db_table: '', db_field: '', section: 'column', type: 'varchar', primary: false, autoIncrement: false, filterOperator: '=' },
      user_profile: { virtual: false, db_table: 'service_app_view', db_field: 'user_profile', section: 'column', type: 'int', primary: false, autoIncrement: false, filterOperator: '=' },
      energy_profile: { virtual: false, db_table: 'service_app_view', db_field: 'energy_profile', section: 'column', type: 'int', primary: false, autoIncrement: false, filterOperator: '=' },
      active_subscribers: { virtual: true, db_table: '', db_field: '', section: 'column', type: 'varchar', primary: false, autoIncrement: false, filterOperator: '=' },
      building_profile: { virtual: false, db_table: 'service_app_view', db_field: 'building_profile', section: 'column', type: 'int', primary: false, autoIncrement: false, filterOperator: '=' },
      inactive_subscribers: { virtual: true, db_table: '', db_field: '', section: 'column', type: 'varchar', primary: false, autoIncrement: false, filterOperator: '=' },
      description: { virtual: true, db_table: '', db_field: '', section: 'column', type: 'varchar', primary: false, autoIncrement: false, filterOperator: '=' },
      footer_label: { virtual: true, db_table: '', db_field: '', section: 'column', type: 'varchar', primary: false, autoIncrement: false, filterOperator: '=' },
      of_created_on: { virtual: false, db_table: 'service_offering', db_field: 'created_on', section: 'orderby', type: 'datetime', primary: false, autoIncrement: false, filterOperator: '=' },
      ft_offering_user: { virtual: false, db_table: 'service_offering', db_field: 'offering_user', section: 'filter', type: 'varchar', primary: false, autoIncrement: false, filterOperator: '=' },
      sqlgf_1: { virtual: true, db_table: '', db_field: '', section: 'leftgroup', type: 'varchar', primary: false, autoIncrement: false, filterOperator: '=' },
      sqlgf_2: { virtual: true, db_table: '', db_field: '', section: 'leftgroup', type: 'varchar', primary: false, autoIncrement: false, filterOperator: '=' },
      gf_title: { virtual: false, db_table: 'service_offering', db_field: 'title', section: 'leftgroup', type: 'varchar', primary: false, autoIncrement: false, filterOperator: '=' }
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
            service_offering.title as header_label, 
            service_app_view.type_code as header_icon_class, 
            service_app_view.type_code as header_icon, 
            service_app_view.type_code as header_image_path, 
            service_offering.title as cf_title_1, 
            service_app_view.title as cf_title, 
            service_app_view.data_sharing_method as cf_data_sharing_method, 
            service_app_view.type as cf_type, 
            service_app_view.business_tags as cf_business_tags, 
            service_app_view.process_tags as cf_process_tags, 
            service_app_view.profiles as cf_profiles, 
            service_app_view.vocabulary_keywords as cf_vocabulary_keywords, 
            service_offering.created_on as cf_created_on, 
            service_offering.sharing_type as cf_sharing_type, 
            service_app_view.user_profile as user_profile, 
            service_app_view.energy_profile as energy_profile, 
            service_app_view.building_profile as building_profile, 
            (SELECT GROUP_CONCAT(tbl.name SEPARATOR '<br>') FROM ( SELECT tbl1.offering_id, tbl1.name FROM ( SELECT dr.offering_id AS offering_id, CONCAT( '<span class="active"> <i class="fa-solid fa-circle"></i> ', IF(cr.id IS NOT NULL, CONCAT(cr.name, ' <i class="fa fa-caret-right"></i> '), ''), ur.username, '</span> ' ) AS name FROM subscription dr INNER JOIN user ur ON ur.id = dr.subscription_user LEFT JOIN company cr ON cr.id = ur.company_id WHERE dr.status = 'accept' ) tbl1 UNION ALL SELECT tbl2.offering_id, tbl2.name FROM ( SELECT dr.offering_id AS offering_id, CONCAT( '<span class="inactive"> <i class="fa-solid fa-circle"></i> ', IF(cr.id IS NOT NULL, CONCAT(cr.name, ' <i class="fa fa-caret-right"></i> '), ''), ur.username, '</span> ' ) AS name FROM subscription dr INNER JOIN user ur ON ur.id = dr.subscription_user LEFT JOIN company cr ON cr.id = ur.company_id WHERE dr.status != 'accept' ) tbl2 ) tbl WHERE tbl.offering_id = service_offering.id) as sqlf_11, 
            (SELECT JSON_ARRAYAGG( JSON_OBJECT('title', bt.title) ) AS titles_json FROM service_business_tag sbt INNER JOIN business_tag bt ON sbt.business_tag_id = bt.id WHERE sbt.service_id = service_app_view.id ) as business_tags, 
            (SELECT JSON_ARRAYAGG( JSON_OBJECT('title', bt.title) ) AS titles_json FROM service_process_tag sbt INNER JOIN process_tag bt ON sbt.process_tag_id = bt.id WHERE sbt.service_id = service_app_view.id) as process_tags, 
            (SELECT JSON_ARRAYAGG( JSON_OBJECT('title', bt.title) ) AS titles_json FROM service_vocabulary_keyword sbt INNER JOIN vocabulary_keywords bt ON sbt.vocabulary_keyword_id = bt.id WHERE sbt.service_id = service_app_view.id) as vocabolary_keywords, 
            (SELECT ifnull(JSON_ARRAYAGG( JSON_OBJECT('user', tbl.name) ),'[]') AS titles_json FROM (SELECT tbl1.offering_id, tbl1.name FROM (SELECT dr.offering_id AS offering_id, Concat( cr.name, ' -> ', ur.username ) AS name FROM subscription dr INNER JOIN user ur ON ur.id = dr.subscription_user INNER JOIN company cr ON cr.id = ur.company_id WHERE dr.status = 'accept') tbl1 ) tbl WHERE tbl.offering_id = service_offering.id ) as active_subscribers, 
            (SELECT ifnull(JSON_ARRAYAGG( JSON_OBJECT('user', tbl.name) ),'[]') AS titles_json FROM (SELECT tbl1.offering_id, tbl1.name FROM (SELECT dr.offering_id AS offering_id, Concat( cr.name, ' -> ', ur.username ) AS name FROM subscription dr INNER JOIN user ur ON ur.id = dr.subscription_user INNER JOIN company cr ON cr.id = ur.company_id WHERE dr.status != 'accept') tbl1 ) tbl WHERE tbl.offering_id = service_offering.id ) as inactive_subscribers, 
            (SELECT '') as description, 
            (SELECT '') as footer_label
         ${module.exports.fromSql}
         ${whereSql} ${orderBySql}`, params);

         return results;

      } catch (err) {
         throw err;
      } finally {
         conn.release();
      }
   },

   getSqlgf1List: async ({filters, userId }) => {
      const conn = await pool.getConnection();

      try {

      const { whereSql, params } = ModelHelper.buildWhere(module.exports.listFields, filters);

         const [results] = await conn.query(`
         SELECT 
            (SELECT CASE WHEN service_app_view.type_code = 'building_to_grid' THEN 'Building-to-Grid (B2G) Service' WHEN service_app_view.type_code = 'grid_to_building' THEN 'Grid-to-Building (G2B) Service' WHEN service_app_view.type_code = 'human_to' THEN 'Human-to-Building Interface & Interactivity' WHEN service_app_view.type_code = 'system_int' THEN 'Systems Interoperability' WHEN service_app_view.type_code = 'building_data' THEN 'Building-to-Data-Consumers Service' ELSE service_app_view.type_code END) as sqlgf_1, 
            count(*) AS total
         ${module.exports.fromSql}
         ${whereSql}
         GROUP BY 
            (SELECT CASE WHEN service_app_view.type_code = 'building_to_grid' THEN 'Building-to-Grid (B2G) Service' WHEN service_app_view.type_code = 'grid_to_building' THEN 'Grid-to-Building (G2B) Service' WHEN service_app_view.type_code = 'human_to' THEN 'Human-to-Building Interface & Interactivity' WHEN service_app_view.type_code = 'system_int' THEN 'Systems Interoperability' WHEN service_app_view.type_code = 'building_data' THEN 'Building-to-Data-Consumers Service' ELSE service_app_view.type_code END)`
         , params);

         return results;

      } catch (err) {
         throw err;
      } finally {
         conn.release();
      }
   },

   getSqlgf2List: async ({filters, userId }) => {
      const conn = await pool.getConnection();

      try {

      const { whereSql, params } = ModelHelper.buildWhere(module.exports.listFields, filters);

         const [results] = await conn.query(`
         SELECT 
            (SELECT CONCAT( ( CASE WHEN country.name = 'Greece' AND service_offering.country = 1 THEN '<img src="./assets/img/flags/1x1/gr.svg">' WHEN country.name = 'Finland' AND service_offering.country = 1 THEN '<img src="./assets/img/flags/1x1/fi.svg">' WHEN country.name = 'France' AND service_offering.country = 1 THEN '<img src="./assets/img/flags/1x1/fr.svg">' WHEN country.name = 'Sweden' AND service_offering.country = 1 THEN '<img src="./assets/img/flags/1x1/se.svg">' WHEN country.name = 'Slovenia' AND service_offering.country = 1 THEN '<img src="./assets/img/flags/1x1/si.svg">' WHEN country.name = 'Germany' AND service_offering.country = 1 THEN '<img src="./assets/img/flags/1x1/de.svg">' ELSE '' END ), ' ', user.username) FROM user user INNER JOIN country country on country.id = user.country_id WHERE user.id = service_offering.offering_user) as sqlgf_2, 
            count(*) AS total
         ${module.exports.fromSql}
         ${whereSql}
         GROUP BY 
            (SELECT CONCAT( ( CASE WHEN country.name = 'Greece' AND service_offering.country = 1 THEN '<img src="./assets/img/flags/1x1/gr.svg">' WHEN country.name = 'Finland' AND service_offering.country = 1 THEN '<img src="./assets/img/flags/1x1/fi.svg">' WHEN country.name = 'France' AND service_offering.country = 1 THEN '<img src="./assets/img/flags/1x1/fr.svg">' WHEN country.name = 'Sweden' AND service_offering.country = 1 THEN '<img src="./assets/img/flags/1x1/se.svg">' WHEN country.name = 'Slovenia' AND service_offering.country = 1 THEN '<img src="./assets/img/flags/1x1/si.svg">' WHEN country.name = 'Germany' AND service_offering.country = 1 THEN '<img src="./assets/img/flags/1x1/de.svg">' ELSE '' END ), ' ', user.username) FROM user user INNER JOIN country country on country.id = user.country_id WHERE user.id = service_offering.offering_user)`
         , params);

         return results;

      } catch (err) {
         throw err;
      } finally {
         conn.release();
      }
   },

   getGfTitleList: async ({filters, userId }) => {
      const conn = await pool.getConnection();

      try {

      const { whereSql, params } = ModelHelper.buildWhere(module.exports.listFields, filters);

         const [results] = await conn.query(`
         SELECT 
            service_offering.title as gf_title, 
            count(*) AS total
         ${module.exports.fromSql}
         ${whereSql}
         GROUP BY 
            service_offering.title`
         , params);

         return results;

      } catch (err) {
         throw err;
      } finally {
         conn.release();
      }
   }

}

