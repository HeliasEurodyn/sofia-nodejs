const pool = require('../../db');
const ModelHelper = require('../../helpers/ModelHelper');

module.exports = {

   listFields: {
      cf_id: { virtual: false,  db_table: 'service_offering',  db_field: 'id',  section: 'column',  type: 'varchar',  primary: true,  autoIncrement: false },
      header_label: { virtual: false,  db_table: 'service_offering',  db_field: 'title',  section: 'column',  type: 'varchar',  primary: false,  autoIncrement: false },
      header_icon_class: { virtual: false,  db_table: 'service_app_view',  db_field: 'type_code',  section: 'column',  type: 'varchar',  primary: false,  autoIncrement: false },
      header_icon: { virtual: false,  db_table: 'service_app_view',  db_field: 'type_code',  section: 'column',  type: 'varchar',  primary: false,  autoIncrement: false },
      header_image_path: { virtual: false,  db_table: 'service_app_view',  db_field: 'type_code',  section: 'column',  type: 'varchar',  primary: false,  autoIncrement: false },
      description_old: { virtual: true,  db_table: '',  db_field: '',  section: 'column',  type: 'varchar',  primary: false,  autoIncrement: false },
      footer_label: { virtual: true,  db_table: '',  db_field: '',  section: 'column',  type: 'varchar',  primary: false,  autoIncrement: false },
      cf_type: { virtual: false,  db_table: 'service_app_view',  db_field: 'type_code',  section: 'column',  type: 'varchar',  primary: false,  autoIncrement: false },
      username: { virtual: true,  db_table: '',  db_field: '',  section: 'column',  type: 'varchar',  primary: false,  autoIncrement: false },
      usercountry: { virtual: true,  db_table: '',  db_field: '',  section: 'column',  type: 'varchar',  primary: false,  autoIncrement: false },
      usercountrycode: { virtual: true,  db_table: '',  db_field: '',  section: 'column',  type: 'varchar',  primary: false,  autoIncrement: false },
      business_tags: { virtual: true,  db_table: '',  db_field: '',  section: 'column',  type: 'varchar',  primary: false,  autoIncrement: false },
      process_tags: { virtual: true,  db_table: '',  db_field: '',  section: 'column',  type: 'varchar',  primary: false,  autoIncrement: false },
      vocabolary_keywords: { virtual: true,  db_table: '',  db_field: '',  section: 'column',  type: 'varchar',  primary: false,  autoIncrement: false },
      user_profile: { virtual: false,  db_table: 'service_app_view',  db_field: 'user_profile',  section: 'column',  type: 'int',  primary: false,  autoIncrement: false },
      energy_profile: { virtual: false,  db_table: 'service_app_view',  db_field: 'energy_profile',  section: 'column',  type: 'int',  primary: false,  autoIncrement: false },
      building_profile: { virtual: false,  db_table: 'service_app_view',  db_field: 'building_profile',  section: 'column',  type: 'int',  primary: false,  autoIncrement: false },
      description: { virtual: true,  db_table: '',  db_field: '',  section: 'column',  type: 'varchar',  primary: false,  autoIncrement: false },
      of_created_on: { virtual: false,  db_table: 'service_offering',  db_field: 'created_on',  section: 'orderby',  type: 'datetime',  primary: false,  autoIncrement: false },
      service_id: { virtual: false,  db_table: 'service_offering',  db_field: 'service_id',  section: 'filter',  type: 'varchar',  primary: false,  autoIncrement: false },
      ft_type: { virtual: false,  db_table: 'service_app_view',  db_field: 'type_code',  section: 'filter',  type: 'varchar',  primary: false,  autoIncrement: false },
      ft_data_sharing_method_code: { virtual: false,  db_table: 'service_app_view',  db_field: 'data_sharing_method_code',  section: 'filter',  type: 'varchar',  primary: false,  autoIncrement: false },
      ft_user_profile: { virtual: false,  db_table: 'service_app_view',  db_field: 'user_profile_code',  section: 'filter',  type: 'int',  primary: false,  autoIncrement: false },
      ft_energy_profile: { virtual: false,  db_table: 'service_app_view',  db_field: 'energy_profile_code',  section: 'filter',  type: 'int',  primary: false,  autoIncrement: false },
      ft_building_profile: { virtual: false,  db_table: 'service_app_view',  db_field: 'building_profile_code',  section: 'filter',  type: 'int',  primary: false,  autoIncrement: false },
      ft_vocabulary_keyword_id: { virtual: true,  db_table: '',  db_field: '',  section: 'filter',  type: 'varchar',  primary: false,  autoIncrement: false },
      ft_business_tag_id: { virtual: true,  db_table: '',  db_field: '',  section: 'filter',  type: 'varchar',  primary: false,  autoIncrement: false },
      ft_process_tag_id: { virtual: true,  db_table: '',  db_field: '',  section: 'filter',  type: 'varchar',  primary: false,  autoIncrement: false },
      ft_country_id: { virtual: true,  db_table: '',  db_field: '',  section: 'filter',  type: 'varchar',  primary: false,  autoIncrement: false },
      ft_offering_user: { virtual: false,  db_table: 'service_offering',  db_field: 'offering_user',  section: 'filter',  type: 'varchar',  primary: false,  autoIncrement: false },
      ft_id: { virtual: false,  db_table: 'service_offering',  db_field: 'id',  section: 'filter',  type: 'varchar',  primary: true,  autoIncrement: false },
      sqlgf_3: { virtual: true,  db_table: '',  db_field: '',  section: 'leftgroup',  type: 'varchar',  primary: false,  autoIncrement: false },
      sqlgf_2: { virtual: true,  db_table: '',  db_field: '',  section: 'leftgroup',  type: 'varchar',  primary: false,  autoIncrement: false },
      gf_title: { virtual: false,  db_table: 'service_offering',  db_field: 'title',  section: 'leftgroup',  type: 'varchar',  primary: false,  autoIncrement: false },
      gf_title_1: { virtual: false,  db_table: 'service_offering',  db_field: 'title',  section: 'leftgroup_part',  type: 'varchar',  primary: false,  autoIncrement: false }
   },

   fromSql:
      `FROM
         service_offering service_offering
         LEFT OUTER JOIN (SELECT srv.id AS id, srv.title AS title, CASE WHEN srv.data_sharing_method = 'one_way' THEN '<i class="fa fa-arrow-right"></i> One Way' WHEN srv.data_sharing_method = 'two_way' THEN '<i class="fa fa-arrow-right-arrow-left"></i> Two Ways' ELSE '' END AS data_sharing_method, CASE WHEN srv.type = 'building_to_grid' THEN '<i class="fa fa-building"></i> Building-to-Grid (B2G) Service' WHEN srv.type = 'grid_to_building' THEN '<i class="fa fa-plug"></i> Grid-to-Building (G2B) Service' WHEN srv.type = 'human_to' THEN '<i class="fa fa-users"></i> Human-to-Building Interface & Interactivity' WHEN srv.type = 'system_int' THEN '<i class="fa fa-network-wired"></i> Systems Interoperability' WHEN srv.type = 'building_data' THEN '<i class="fa fa-database"></i> Building-to-Data-Consumers Service' ELSE '' END AS type, srv.user_profile AS profile, (SELECT GROUP_CONCAT(CONCAT('<i class="fa fa-tags"></i> ', bt.title, '<br>') SEPARATOR '') FROM service_business_tag sbt INNER JOIN business_tag bt ON sbt.business_tag_id = bt.id WHERE sbt.service_id = srv.id ) AS business_tags, (SELECT GROUP_CONCAT(CONCAT('<i class="fa fa-tag"></i> ', bt.title, '<br>') SEPARATOR '') FROM service_process_tag sbt INNER JOIN process_tag bt ON sbt.process_tag_id = bt.id WHERE sbt.service_id = srv.id) AS process_tags, (SELECT GROUP_CONCAT(CONCAT('<i class="fa fa-hashtag"></i> ', bt.title, '<br>') SEPARATOR '') FROM service_vocabulary_keyword sbt INNER JOIN vocabulary_keywords bt ON sbt.vocabulary_keyword_id = bt.id WHERE sbt.service_id = srv.id) AS vocabulary_keywords, CONCAT( CASE WHEN srv.user_profile = 1 THEN '<i class="fa fa-toggle-on enabled-toggle"></i> User Profile <br>' ELSE '<i class="fa fa-toggle-off disabled-toggle"></i> User Profile <br>' END, CASE WHEN srv.building_profile = 1 THEN '<i class="fa fa-toggle-on enabled-toggle"></i> Building Profile <br>' ELSE '<i class="fa fa-toggle-off disabled-toggle"></i> Building Profile <br>' END, CASE WHEN srv.energy_profile = 1 THEN '<i class="fa fa-toggle-on enabled-toggle"></i> Energy Profile <br>' ELSE '<i class="fa fa-toggle-off disabled-toggle"></i> Energy Profile <br>' END ) AS profiles, CASE WHEN srv.sharing_type = 'wizard' THEN '<i class="fa fa-hat-wizard"></i> Wizard' WHEN srv.sharing_type = 'files' THEN '<i class="fa fa-file-lines"></i> Files' ELSE '' END AS sharing_type, srv.user_profile, srv.building_profile, srv.energy_profile, srv.sharing_type AS sharing_type_id, srv.type AS type_code, srv.data_sharing_method AS data_sharing_method_code, srv.user_profile AS user_profile_code, srv.energy_profile AS energy_profile_code, srv.building_profile AS building_profile_code FROM service srv )service_app_view ON service_app_view.id = service_offering.service_id`,

   getList: async (filters) => {
      const conn = await pool.getConnection();

      try {

         const { whereSql, params } = ModelHelper.buildWhere(module.exports.listFields, filters);

         const [results] = await conn.query(`
         SELECT 
            service_offering.id as cf_id, 
            service_offering.title as header_label, 
            service_app_view.type_code as header_icon_class, 
            service_app_view.type_code as header_icon, 
            service_app_view.type_code as header_image_path, 
            service_app_view.type_code as cf_type, 
            service_app_view.user_profile as user_profile, 
            service_app_view.energy_profile as energy_profile, 
            service_app_view.building_profile as building_profile, 
            (SELECT CONCAT( ifnull((SELECT CONCAT('<div><b>Business Tags</b>: ', GROUP_CONCAT(CONCAT('<i class="fa fa-tag"></i> ', bt.title) SEPARATOR ' '), '</div>') AS tags FROM service_business_tag sbt INNER JOIN business_tag bt ON sbt.business_tag_id = bt.id WHERE sbt.service_id = service_app_view.id),'') , ifnull((SELECT CONCAT('<div><b>Process Tags</b>: ', GROUP_CONCAT(CONCAT('<i class="fa fa-tags"></i> ', bt.title) SEPARATOR ' '), '</div>') AS tags FROM service_process_tag sbt INNER JOIN process_tag bt ON sbt.process_tag_id = bt.id WHERE sbt.service_id = service_app_view.id),'') , ifnull((SELECT CONCAT('<div><b>Vocabolary Keywords</b>: ', GROUP_CONCAT(CONCAT('<i class="fa fa-hashtag"></i> ', bt.title) SEPARATOR ' '), '</div>') AS tags FROM service_vocabulary_keyword sbt INNER JOIN vocabulary_keywords bt ON sbt.vocabulary_keyword_id = bt.id WHERE sbt.service_id = service_app_view.id),'') , (CASE WHEN service_app_view.user_profile = '1' THEN '<b><i class="fa fa-toggle-on enabled-toggle"></i> User Profile Used</b>' ELSE '' END) , (CASE WHEN service_app_view.energy_profile = '1' THEN '<b><i class="fa fa-toggle-on enabled-toggle"></i> Energy Profile Used</b>' ELSE '' END) , (CASE WHEN service_app_view.building_profile = '1' THEN '<b><i class="fa fa-toggle-on enabled-toggle"></i> Building Profile Used</b>' ELSE '' END) ) ) as description_old, 
            (SELECT CONCAT( ( CASE WHEN country.name = 'Greece' AND service_offering.country = 1 THEN '<img src="./assets/img/flags/1x1/gr.svg">' WHEN country.name = 'Finland' AND service_offering.country = 1 THEN '<img src="./assets/img/flags/1x1/fi.svg">' WHEN country.name = 'France' AND service_offering.country = 1 THEN '<img src="./assets/img/flags/1x1/fr.svg">' WHEN country.name = 'Sweden' AND service_offering.country = 1 THEN '<img src="./assets/img/flags/1x1/se.svg">' WHEN country.name = 'Slovenia' AND service_offering.country = 1 THEN '<img src="./assets/img/flags/1x1/si.svg">' WHEN country.name = 'Germany' AND service_offering.country = 1 THEN '<img src="./assets/img/flags/1x1/de.svg">' ELSE '' END ), ' ', user.username) FROM user user INNER JOIN country country on country.id = user.country_id WHERE user.id = service_offering.offering_user) as footer_label, 
            (SELECT user.username FROM user user WHERE user.id = service_offering.offering_user) as username, 
            (SELECT country.name FROM user user INNER JOIN country country on country.id = user.country_id WHERE user.id = service_offering.offering_user AND service_offering.country = 1) as usercountry, 
            (SELECT CASE WHEN country.name = 'Greece' AND service_offering.country = 1 THEN 'gr' WHEN country.name = 'Finland' AND service_offering.country = 1 THEN 'fi' WHEN country.name = 'France' AND service_offering.country = 1 THEN 'fr' WHEN country.name = 'Sweden' AND service_offering.country = 1 THEN 'se' WHEN country.name = 'Slovenia' AND service_offering.country = 1 THEN 'si' WHEN country.name = 'Germany' AND service_offering.country = 1 THEN 'de' WHEN country.name = 'Spain' AND service_offering.country = 1 THEN 'es' ELSE '' END FROM user user INNER JOIN country country on country.id = user.country_id WHERE user.id = service_offering.offering_user) as usercountrycode, 
            (SELECT JSON_ARRAYAGG( JSON_OBJECT('title', bt.title) ) AS titles_json FROM service_business_tag sbt INNER JOIN business_tag bt ON sbt.business_tag_id = bt.id WHERE sbt.service_id = service_app_view.id ) as business_tags, 
            (SELECT JSON_ARRAYAGG( JSON_OBJECT('title', bt.title) ) AS titles_json FROM service_process_tag sbt INNER JOIN process_tag bt ON sbt.process_tag_id = bt.id WHERE sbt.service_id = service_app_view.id) as process_tags, 
            (SELECT JSON_ARRAYAGG( JSON_OBJECT('title', bt.title) ) AS titles_json FROM service_vocabulary_keyword sbt INNER JOIN vocabulary_keywords bt ON sbt.vocabulary_keyword_id = bt.id WHERE sbt.service_id = service_app_view.id) as vocabolary_keywords, 
            (SELECT '') as description
         ${module.exports.fromSql}
         ${whereSql}`, params);

         return results;

      } catch (err) {
         throw err;
      } finally {
         conn.release();
      }
   },

   getSqlgf3List: async (filters) => {
      const conn = await pool.getConnection();

      try {

      const { whereSql, params } = ModelHelper.buildWhere(module.exports.listFields, filters);

         const [results] = await conn.query(`
         SELECT 
            (SELECT CASE WHEN service_app_view.type_code = 'building_to_grid' THEN 'Building-to-Grid (B2G) Service' WHEN service_app_view.type_code = 'grid_to_building' THEN 'Grid-to-Building (G2B) Service' WHEN service_app_view.type_code = 'human_to' THEN 'Human-to-Building Interface & Interactivity' WHEN service_app_view.type_code = 'system_int' THEN 'Systems Interoperability' WHEN service_app_view.type_code = 'building_data' THEN 'Building-to-Data-Consumers Service' ELSE service_app_view.type_code END) as sqlgf_3, 
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

   getSqlgf2List: async (filters) => {
      const conn = await pool.getConnection();

      try {

      const { whereSql, params } = ModelHelper.buildWhere(module.exports.listFields, filters);

         const [results] = await conn.query(`
         SELECT 
            (SELECT CONCAT( ( CASE WHEN country.name = 'Greece' AND service_offering.country = 1 THEN '<img src="./assets/img/flags/1x1/gr.svg">' WHEN country.name = 'Finland' AND service_offering.country = 1 THEN '<img src="./assets/img/flags/1x1/fi.svg">' WHEN country.name = 'France' AND service_offering.country = 1 THEN '<img src="./assets/img/flags/1x1/fr.svg">' WHEN country.name = 'Sweden' AND service_offering.country = 1 THEN '<img src="./assets/img/flags/1x1/se.svg">' WHEN country.name = 'Slovenia' AND service_offering.country = 1 THEN '<img src="./assets/img/flags/1x1/si.svg">' WHEN country.name = 'Germany' AND service_offering.country = 1 THEN '<img src="./assets/img/flags/1x1/de.svg">' ELSE '' END ), ' ', user.username) FROM user user INNER JOIN country country on country.id = user.country_id WHERE user.id = service_offering.offering_user) as sqlgf_2, 
            service_offering.title as gf_title_1, 
            count(*) AS total
         ${module.exports.fromSql}
         ${whereSql}
         GROUP BY 
            (SELECT CONCAT( ( CASE WHEN country.name = 'Greece' AND service_offering.country = 1 THEN '<img src="./assets/img/flags/1x1/gr.svg">' WHEN country.name = 'Finland' AND service_offering.country = 1 THEN '<img src="./assets/img/flags/1x1/fi.svg">' WHEN country.name = 'France' AND service_offering.country = 1 THEN '<img src="./assets/img/flags/1x1/fr.svg">' WHEN country.name = 'Sweden' AND service_offering.country = 1 THEN '<img src="./assets/img/flags/1x1/se.svg">' WHEN country.name = 'Slovenia' AND service_offering.country = 1 THEN '<img src="./assets/img/flags/1x1/si.svg">' WHEN country.name = 'Germany' AND service_offering.country = 1 THEN '<img src="./assets/img/flags/1x1/de.svg">' ELSE '' END ), ' ', user.username) FROM user user INNER JOIN country country on country.id = user.country_id WHERE user.id = service_offering.offering_user), 
            service_offering.title`
         , params);

         return results;

      } catch (err) {
         throw err;
      } finally {
         conn.release();
      }
   },

   getGfTitleList: async (filters) => {
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

