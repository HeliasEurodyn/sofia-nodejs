const pool = require('../../db');
const ModelHelper = require('../../helpers/ModelHelper');

module.exports = {

   listFields: {
      cf_id: { virtual: false, db_table: 'subscription', db_field: 'id', section: 'column', type: 'varchar', primary: true, autoIncrement: false, filterOperator: 'like' },
      cf_status: { virtual: false, db_table: 'subscription', db_field: 'status', section: 'column', type: 'varchar', primary: false, autoIncrement: false, filterOperator: 'like' },
      header_label: { virtual: false, db_table: 'offering_app_view', db_field: 'offering_title', section: 'column', type: 'varchar', primary: false, autoIncrement: false, filterOperator: 'like' },
      header_icon_class: { virtual: false, db_table: 'offering_app_view', db_field: 'type_code', section: 'column', type: 'varchar', primary: false, autoIncrement: false, filterOperator: 'like' },
      header_icon: { virtual: false, db_table: 'offering_app_view', db_field: 'type_code', section: 'column', type: 'varchar', primary: false, autoIncrement: false, filterOperator: 'like' },
      header_image_path: { virtual: false, db_table: 'offering_app_view', db_field: 'type_code', section: 'column', type: 'varchar', primary: false, autoIncrement: false, filterOperator: 'like' },
      description: { virtual: true, db_table: '', db_field: '', section: 'column', type: 'varchar', primary: false, autoIncrement: false, filterOperator: '=' },
      footer_label_: { virtual: true, db_table: '', db_field: '', section: 'column', type: 'varchar', primary: false, autoIncrement: false, filterOperator: '=' },
      cf_type: { virtual: false, db_table: 'offering_app_view', db_field: 'type_code', section: 'column', type: 'varchar', primary: false, autoIncrement: false, filterOperator: 'like' },
      footer_label: { virtual: false, db_table: 'offering_app_view', db_field: 'offering_user', section: 'column', type: 'varchar', primary: false, autoIncrement: false, filterOperator: 'like' },
      business_tags: { virtual: true, db_table: '', db_field: '', section: 'column', type: 'varchar', primary: false, autoIncrement: false, filterOperator: '=' },
      process_tags: { virtual: true, db_table: '', db_field: '', section: 'column', type: 'varchar', primary: false, autoIncrement: false, filterOperator: '=' },
      vocabolary_keywords: { virtual: true, db_table: '', db_field: '', section: 'column', type: 'varchar', primary: false, autoIncrement: false, filterOperator: '=' },
      user_profile: { virtual: false, db_table: 'offering_app_view', db_field: 'user_profile', section: 'column', type: 'int', primary: false, autoIncrement: false, filterOperator: '=' },
      energy_profile: { virtual: false, db_table: 'offering_app_view', db_field: 'energy_profile', section: 'column', type: 'int', primary: false, autoIncrement: false, filterOperator: '=' },
      building_profile: { virtual: false, db_table: 'offering_app_view', db_field: 'building_profile', section: 'column', type: 'int', primary: false, autoIncrement: false, filterOperator: '=' },
      of_created_on: { virtual: false, db_table: 'subscription', db_field: 'created_on', section: 'orderby', type: 'datetime', primary: false, autoIncrement: false, filterOperator: '=' },
      ft_subscription_user: { virtual: false, db_table: 'subscription', db_field: 'subscription_user', section: 'filter', type: 'varchar', primary: false, autoIncrement: false, filterOperator: '=' }
   },

   fromSql:
      `FROM
         subscription subscription
         LEFT OUTER JOIN (SELECT sof.id AS id, srv.id AS service_id, srv.title AS service_title, CASE WHEN srv.data_sharing_method = 'one_way' THEN '<i class="fa fa-arrow-right"></i> One Way' WHEN srv.data_sharing_method = 'two_way' THEN '<i class="fa fa-arrow-right-arrow-left"></i> Two Ways' ELSE '' END AS data_sharing_method, CASE WHEN srv.type = 'building_to_grid' THEN '<i class="fa fa-building"></i> Building-to-Grid (B2G) Service' WHEN srv.type = 'grid_to_building' THEN '<i class="fa fa-plug"></i> Grid-to-Building (G2B) Service' WHEN srv.type = 'human_to' THEN '<i class="fa fa-users"></i> Human-to-Building Interface & Interactivity' WHEN srv.type = 'system_int' THEN '<i class="fa fa-network-wired"></i> Systems Interoperability' WHEN srv.type = 'building_data' THEN '<i class="fa fa-database"></i> Building-to-Data-Consumers Service' ELSE '' END AS type, (SELECT GROUP_CONCAT(CONCAT('<i class="fa fa-tags"></i> ', bt.title, '<br>') SEPARATOR '') FROM service_business_tag sbt INNER JOIN business_tag bt ON sbt.business_tag_id = bt.id WHERE sbt.service_id = srv.id ) AS business_tags, (SELECT GROUP_CONCAT(CONCAT('<i class="fa fa-tag"></i> ', bt.title, '<br>') SEPARATOR '') FROM service_process_tag sbt INNER JOIN process_tag bt ON sbt.process_tag_id = bt.id WHERE sbt.service_id = srv.id) AS process_tags, (SELECT GROUP_CONCAT(CONCAT('<i class="fa fa-hashtag"></i> ', bt.title, '<br>') SEPARATOR '') FROM service_vocabulary_keyword sbt INNER JOIN vocabulary_keywords bt ON sbt.vocabulary_keyword_id = bt.id WHERE sbt.service_id = srv.id) AS vocabulary_keywords, CONCAT( CASE WHEN srv.user_profile = 1 THEN '<i class="fa fa-toggle-on enabled-toggle"></i> User Profile <br>' ELSE '<i class="fa fa-toggle-off disabled-toggle"></i> User Profile <br>' END, CASE WHEN srv.building_profile = 1 THEN '<i class="fa fa-toggle-on enabled-toggle"></i> Building Profile <br>' ELSE '<i class="fa fa-toggle-off disabled-toggle"></i> Building Profile <br>' END, CASE WHEN srv.energy_profile = 1 THEN '<i class="fa fa-toggle-on enabled-toggle"></i> Energy Profile <br>' ELSE '<i class="fa fa-toggle-off disabled-toggle"></i> Energy Profile <br>' END ) AS profiles, (SELECT CONCAT( ( CASE WHEN country.name = 'Greece' AND sof.country = 1 THEN '<img src="./assets/img/flags/1x1/gr.svg">' WHEN country.name = 'Finland' AND sof.country = 1 THEN '<img src="./assets/img/flags/1x1/fi.svg">' WHEN country.name = 'France' AND sof.country = 1 THEN '<img src="./assets/img/flags/1x1/fr.svg">' WHEN country.name = 'Sweden' AND sof.country = 1 THEN '<img src="./assets/img/flags/1x1/se.svg">' WHEN country.name = 'Slovenia' AND sof.country = 1 THEN '<img src="./assets/img/flags/1x1/si.svg">' WHEN country.name = 'Germany' AND sof.country = 1 THEN '<img src="./assets/img/flags/1x1/de.svg">' ELSE '' END ) ,' ', user.username) FROM user user INNER JOIN country country on country.id = user.country_id WHERE user.id = sof.offering_user ) AS offering_user, sof.offering_user AS offering_user_id, CASE WHEN sof.sharing_type = 'wizard' THEN '<i class="fa fa-hat-wizard"></i> Wizard' WHEN sof.sharing_type = 'files' THEN '<i class="fa fa-file-lines"></i> Files' ELSE '' END AS sharing_type, sof.sharing_type AS sharing_type_code, srv.wizard_desctiption, sof.title AS offering_title, srv.user_profile, srv.building_profile, srv.energy_profile, srv.sharing_type AS sharing_type_id, srv.type AS type_code, sof.country, sof_user.handler_url FROM service srv INNER JOIN service_offering sof on sof.service_id = srv.id INNER JOIN user sof_user ON sof_user.id = sof.offering_user )offering_app_view ON offering_app_view.id = subscription.offering_id`,

   getList: async ({ filters, userId }) => {
      const conn = await pool.getConnection();

      try {

         const { whereSql, params } = ModelHelper.buildWhere(module.exports.listFields, filters);
         const orderBySql = ModelHelper.buildOrderBy(module.exports.listFields, filters);

         const [results] = await conn.query(`
         SELECT 
            subscription.id as cf_id, 
            subscription.status as cf_status, 
            offering_app_view.offering_title as header_label, 
            offering_app_view.type_code as header_icon_class, 
            offering_app_view.type_code as header_icon, 
            offering_app_view.type_code as header_image_path, 
            offering_app_view.type_code as cf_type, 
            offering_app_view.offering_user as footer_label, 
            offering_app_view.user_profile as user_profile, 
            offering_app_view.energy_profile as energy_profile, 
            offering_app_view.building_profile as building_profile, 
            (SELECT CONCAT( (CASE WHEN subscription.status = 'pending' THEN '<span class="pending-label">Status: <i class="fa-solid fa-spinner rotate"></i> Pending</span>' WHEN subscription.status = 'accept' THEN '<span class="accept-label">Status: <i class="fa fa-check accept"></i> Accepted</span>' WHEN subscription.status = 'reject' THEN '<span class="reject-label">Status: <i class="fa fa-times reject"></i> Rejected</span>' ELSE '' END), ifnull((SELECT CONCAT('<div><b>Business Tags</b>: ', GROUP_CONCAT(CONCAT('<i class="fa fa-tag"></i> ', bt.title) SEPARATOR ' '), '</div>') AS tags FROM service_business_tag sbt INNER JOIN business_tag bt ON sbt.business_tag_id = bt.id WHERE sbt.service_id = offering_app_view.service_id),'') , ifnull((SELECT CONCAT('<div><b>Process Tags</b>: ', GROUP_CONCAT(CONCAT('<i class="fa fa-tags"></i> ', bt.title) SEPARATOR ' '), '</div>') AS tags FROM service_process_tag sbt INNER JOIN process_tag bt ON sbt.process_tag_id = bt.id WHERE sbt.service_id = offering_app_view.service_id),'') , ifnull((SELECT CONCAT('<div><b>Vocabolary Keywords</b>: ', GROUP_CONCAT(CONCAT('<i class="fa fa-hashtag"></i> ', bt.title) SEPARATOR ' '), '</div>') AS tags FROM service_vocabulary_keyword sbt INNER JOIN vocabulary_keywords bt ON sbt.vocabulary_keyword_id = bt.id WHERE sbt.service_id = offering_app_view.service_id),'') , (CASE WHEN offering_app_view.user_profile = '1' THEN '<b><i class="fa fa-toggle-on enabled-toggle"></i> User Profile Used</b>' ELSE '' END) , (CASE WHEN offering_app_view.energy_profile = '1' THEN '<b><i class="fa fa-toggle-on enabled-toggle"></i> Energy Profile Used</b>' ELSE '' END) , (CASE WHEN offering_app_view.building_profile = '1' THEN '<b><i class="fa fa-toggle-on enabled-toggle"></i> Building Profile Used</b>' ELSE '' END) ) ) as description, 
            (SELECT CONCAT( ( CASE WHEN country.name = 'Greece' AND offering_app_view.country = 1 THEN '<img src="./assets/img/flags/1x1/gr.svg">' WHEN country.name = 'Finland' AND offering_app_view.country = 1 THEN '<img src="./assets/img/flags/1x1/fi.svg">' WHEN country.name = 'France' AND offering_app_view.country = 1 THEN '<img src="./assets/img/flags/1x1/fr.svg">' WHEN country.name = 'Sweden' AND offering_app_view.country = 1 THEN '<img src="./assets/img/flags/1x1/se.svg">' WHEN country.name = 'Slovenia' AND offering_app_view.country = 1 THEN '<img src="./assets/img/flags/1x1/si.svg">' WHEN country.name = 'Germany' AND offering_app_view.country = 1 THEN '<img src="./assets/img/flags/1x1/de.svg">' ELSE '' END ), ' ', user.username) FROM user user INNER JOIN country country on country.id = user.country_id WHERE user.id = offering_app_view.offering_user) as footer_label_, 
            (SELECT JSON_ARRAYAGG(JSON_OBJECT('title', bt.title)) AS titles_json FROM service_business_tag sbt INNER JOIN business_tag bt ON sbt.business_tag_id = bt.id WHERE sbt.service_id = offering_app_view.service_id) as business_tags, 
            (SELECT JSON_ARRAYAGG( JSON_OBJECT('title', bt.title) ) AS titles_json FROM service_process_tag sbt INNER JOIN process_tag bt ON sbt.process_tag_id = bt.id WHERE sbt.service_id = offering_app_view.service_id) as process_tags, 
            (SELECT JSON_ARRAYAGG( JSON_OBJECT('title', bt.title) ) AS titles_json FROM service_vocabulary_keyword sbt INNER JOIN vocabulary_keywords bt ON sbt.vocabulary_keyword_id = bt.id WHERE sbt.service_id = offering_app_view.service_id) as vocabolary_keywords
         ${module.exports.fromSql}
         ${whereSql} ${orderBySql}`, params);

         return results;

      } catch (err) {
         throw err;
      } finally {
         conn.release();
      }
   }

}

