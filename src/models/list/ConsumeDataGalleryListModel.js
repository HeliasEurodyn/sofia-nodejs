const pool = require('../../db');
const ModelHelper = require('../../helpers/ModelHelper');

module.exports = {

   listFields: {
      cf_provide_data_id: { virtual: false, db_table: 'consume_data_app_view', db_field: 'provide_data_id', section: 'column', type: 'varchar', primary: true, autoIncrement: false, filterOperator: '=' },
      provider: { virtual: true, db_table: '', db_field: '', section: 'column', type: 'varchar', primary: false, autoIncrement: false, filterOperator: '=' },
      header_icon_class: { virtual: false, db_table: 'consume_data_app_view', db_field: 'type_code', section: 'column', type: 'varchar', primary: false, autoIncrement: false, filterOperator: 'like' },
      header_icon_old: { virtual: false, db_table: 'consume_data_app_view', db_field: 'type_code', section: 'column', type: 'varchar', primary: false, autoIncrement: false, filterOperator: 'like' },
      header_image_path: { virtual: false, db_table: 'consume_data_app_view', db_field: 'type_code', section: 'column', type: 'varchar', primary: false, autoIncrement: false, filterOperator: 'like' },
      header_label: { virtual: false, db_table: 'consume_data_app_view', db_field: 'title', section: 'column', type: 'varchar', primary: false, autoIncrement: false, filterOperator: 'like' },
      offering_title: { virtual: false, db_table: 'consume_data_app_view', db_field: 'service_offering_title', section: 'column', type: 'varchar', primary: false, autoIncrement: false, filterOperator: 'like' },
      cf_data_sharing_method_html: { virtual: false, db_table: 'consume_data_app_view', db_field: 'data_sharing_method_html', section: 'column', type: 'varchar', primary: false, autoIncrement: false, filterOperator: 'like' },
      cf_type_html: { virtual: false, db_table: 'consume_data_app_view', db_field: 'type_html', section: 'column', type: 'varchar', primary: false, autoIncrement: false, filterOperator: 'like' },
      description: { virtual: false, db_table: 'consume_data_app_view', db_field: 'business_tags_html', section: 'column', type: 'mediumtext', primary: false, autoIncrement: false, filterOperator: '=' },
      cf_process_tags_html: { virtual: false, db_table: 'consume_data_app_view', db_field: 'process_tags_html', section: 'column', type: 'mediumtext', primary: false, autoIncrement: false, filterOperator: '=' },
      cf_profiles_html: { virtual: false, db_table: 'consume_data_app_view', db_field: 'profiles_html', section: 'column', type: 'varchar', primary: false, autoIncrement: false, filterOperator: 'like' },
      cf_vocabulary_keywords_html: { virtual: false, db_table: 'consume_data_app_view', db_field: 'vocabulary_keywords_html', section: 'column', type: 'mediumtext', primary: false, autoIncrement: false, filterOperator: '=' },
      footer_label: { virtual: false, db_table: 'consume_data_app_view', db_field: 'created_on', section: 'column', type: 'timestamp', primary: false, autoIncrement: false, filterOperator: '=' },
      cf_sharing_type: { virtual: false, db_table: 'consume_data_app_view', db_field: 'sharing_type', section: 'column', type: 'varchar', primary: false, autoIncrement: false, filterOperator: 'like' },
      cf_offering_id: { virtual: false, db_table: 'consume_data_app_view', db_field: 'offering_id', section: 'column', type: 'varchar', primary: false, autoIncrement: false, filterOperator: 'like' },
      cf_file_name: { virtual: false, db_table: 'consume_data_app_view', db_field: 'file_name', section: 'column', type: 'varchar', primary: false, autoIncrement: false, filterOperator: 'like' },
      header_icon: { virtual: true, db_table: '', db_field: '', section: 'column', type: 'varchar', primary: false, autoIncrement: false, filterOperator: '=' },
      of_created_on: { virtual: false, db_table: 'consume_data_app_view', db_field: 'created_on', section: 'orderby', type: 'timestamp', primary: false, autoIncrement: false, filterOperator: '=' },
      ft_subscription_user_id: { virtual: false, db_table: 'consume_data_app_view', db_field: 'subscription_user_id', section: 'filter', type: 'varchar', primary: false, autoIncrement: false, filterOperator: '=' },
      ft_created_on: { virtual: false, db_table: 'consume_data_app_view', db_field: 'created_on', section: 'filter', type: 'timestamp', primary: false, autoIncrement: false, filterOperator: '>=' },
      ft_created_on_1: { virtual: false, db_table: 'consume_data_app_view', db_field: 'created_on', section: 'filter', type: 'timestamp', primary: false, autoIncrement: false, filterOperator: '<=' },
      ft_title: { virtual: false, db_table: 'consume_data_app_view', db_field: 'title', section: 'filter', type: 'varchar', primary: false, autoIncrement: false, filterOperator: 'like' },
      ft_service_offering_title: { virtual: false, db_table: 'consume_data_app_view', db_field: 'service_offering_title', section: 'filter', type: 'varchar', primary: false, autoIncrement: false, filterOperator: 'like' },
      ft_file_name: { virtual: false, db_table: 'consume_data_app_view', db_field: 'file_name', section: 'filter', type: 'varchar', primary: false, autoIncrement: false, filterOperator: 'like' },
      lg_provider: { virtual: true, db_table: '', db_field: '', section: 'leftgroup', type: 'varchar', primary: false, autoIncrement: false, filterOperator: '=' },
      gf_service_offering_title: { virtual: false, db_table: 'consume_data_app_view', db_field: 'service_offering_title', section: 'leftgroup', type: 'varchar', primary: false, autoIncrement: false, filterOperator: '=' },
      gf_type_html: { virtual: false, db_table: 'consume_data_app_view', db_field: 'type_html', section: 'leftgroup', type: 'varchar', primary: false, autoIncrement: false, filterOperator: '=' },
      gf_service_offering_title_1: { virtual: false, db_table: 'consume_data_app_view', db_field: 'service_offering_title', section: 'leftgroup_part', type: 'varchar', primary: false, autoIncrement: false, filterOperator: '=' }
   },

   fromSql:
      `FROM
         (SELECT p.id AS provide_data_id, s.id AS subscription_id, s.offering_id, s.subscription_user AS subscription_user_id, s.status AS subscription_status, so.status AS offering_status, so.offering_user AS offering_user_id, p.file, p.file_name, p.file_size, p.title, p.description, p.created_on, (SELECT CONCAT(company.name,' <i class="fa fa-caret-right"></i> ', user.username) FROM user user INNER JOIN company company ON user.company_id = company.id WHERE user.id = s.subscription_user ) AS subscription_user, (SELECT CONCAT(company.name,' <i class="fa fa-caret-right"></i> ', user.username) FROM user user INNER JOIN company company ON user.company_id = company.id WHERE user.id = so.offering_user ) AS offering_user, CASE WHEN s.status = 'pending' THEN '<span class="pending-label"><i class="fa-solid fa-spinner rotate"></i> Pending</span>' WHEN s.status = 'accept' THEN '<span class="accept-label"><i class="fa fa-check accept"></i> Accepted</span>' WHEN s.status = 'reject' THEN '<span class="reject-label"><i class="fa fa-times reject"></i> Rejected</span>' ELSE '' END AS subscription_status_html, CASE WHEN so.status = 'pending' THEN '<span class="pending-label"><i class="fa-solid fa-spinner rotate"></i> Pending</span>' WHEN so.status = 'accept' THEN '<span class="accept-label"><i class="fa fa-check accept"></i> Accepted</span>' WHEN so.status = 'reject' THEN '<span class="reject-label"><i class="fa fa-times reject"></i> Rejected</span>' ELSE '' END AS offering_status_html, CASE WHEN srv.data_sharing_method = 'one_way' THEN '<i class="fa fa-arrow-right"></i> One Way' WHEN srv.data_sharing_method = 'two_way' THEN '<i class="fa fa-arrow-right-arrow-left"></i> Two Ways' ELSE '' END AS data_sharing_method_html, CASE WHEN srv.type = 'building_to_grid' THEN '<i class="fa fa-building"></i> Building-to-Grid (B2G) Service' WHEN srv.type = 'grid_to_building' THEN '<i class="fa fa-plug"></i> Grid-to-Building (G2B) Service' WHEN srv.type = 'human_to' THEN '<i class="fa fa-users"></i> Human-to-Building Interface & Interactivity' WHEN srv.type = 'system_int' THEN '<i class="fa fa-network-wired"></i> Systems Interoperability' WHEN srv.type = 'building_data' THEN '<i class="fa fa-database"></i> Building-to-Data-Consumers Service' ELSE '' END AS type_html, (SELECT GROUP_CONCAT(CONCAT('<i class="fa fa-tags"></i> ', bt.title, '<br>') SEPARATOR '') FROM service_business_tag sbt INNER JOIN business_tag bt ON sbt.business_tag_id = bt.id WHERE sbt.service_id = srv.id ) AS business_tags_html, (SELECT GROUP_CONCAT(CONCAT('<i class="fa fa-tag"></i> ', bt.title, '<br>') SEPARATOR '') FROM service_process_tag sbt INNER JOIN process_tag bt ON sbt.process_tag_id = bt.id WHERE sbt.service_id = srv.id) AS process_tags_html, (SELECT GROUP_CONCAT(CONCAT('<i class="fa fa-hashtag"></i> ', bt.title, '<br>') SEPARATOR '') FROM service_vocabulary_keyword sbt INNER JOIN vocabulary_keywords bt ON sbt.vocabulary_keyword_id = bt.id WHERE sbt.service_id = srv.id) AS vocabulary_keywords_html, CONCAT( CASE WHEN srv.user_profile = 1 THEN '<i class="fa fa-toggle-on enabled-toggle"></i> User Profile <br>' ELSE '<i class="fa fa-toggle-off disabled-toggle"></i> User Profile <br>' END, CASE WHEN srv.building_profile = 1 THEN '<i class="fa fa-toggle-on enabled-toggle"></i> Building Profile <br>' ELSE '<i class="fa fa-toggle-off disabled-toggle"></i> Building Profile <br>' END, CASE WHEN srv.energy_profile = 1 THEN '<i class="fa fa-toggle-on enabled-toggle"></i> Energy Profile <br>' ELSE '<i class="fa fa-toggle-off disabled-toggle"></i> Energy Profile <br>' END ) AS profiles_html, CASE WHEN so.sharing_type = 'wizard' THEN '<i class="fa fa-hat-wizard"></i> Wizard' WHEN so.sharing_type = 'files' THEN '<i class="fa fa-file-lines"></i> Files' ELSE '' END AS sharing_type, so.sharing_type AS sharing_type_code, srv.wizard_desctiption, p.provide_user, so.title AS service_offering_title, srv.type AS type_code FROM provide_data p INNER JOIN service_offering so ON p.service_offering_id = so.id INNER JOIN subscription s ON s.offering_id = so.id INNER JOIN service srv ON so.service_id = srv.id WHERE s.status = 'accept' )consume_data_app_view`,

   getList: async ({ filters, userId }) => {
      const conn = await pool.getConnection();

      try {

         const { whereSql, params } = ModelHelper.buildWhere(module.exports.listFields, filters);
         const orderBySql = ModelHelper.buildOrderBy(module.exports.listFields, filters);

         const [results] = await conn.query(`
         SELECT 
            consume_data_app_view.provide_data_id as cf_provide_data_id, 
            consume_data_app_view.type_code as header_icon_class, 
            consume_data_app_view.type_code as header_icon_old, 
            consume_data_app_view.type_code as header_image_path, 
            consume_data_app_view.title as header_label, 
            consume_data_app_view.service_offering_title as offering_title, 
            consume_data_app_view.data_sharing_method_html as cf_data_sharing_method_html, 
            consume_data_app_view.type_html as cf_type_html, 
            consume_data_app_view.business_tags_html as description, 
            consume_data_app_view.process_tags_html as cf_process_tags_html, 
            consume_data_app_view.profiles_html as cf_profiles_html, 
            consume_data_app_view.vocabulary_keywords_html as cf_vocabulary_keywords_html, 
            consume_data_app_view.created_on as footer_label, 
            consume_data_app_view.sharing_type as cf_sharing_type, 
            consume_data_app_view.offering_id as cf_offering_id, 
            consume_data_app_view.file_name as cf_file_name, 
            (SELECT CASE WHEN company.name IS NULL THEN user.username ELSE CONCAT(company.name, ' <i class="fa fa-caret-right"></i> ', user.username) END FROM user user LEFT OUTER JOIN company company ON user.company_id = company.id WHERE user.id = consume_data_app_view.provide_user) as provider, 
            (SELECT 'fa fa-cloud-download') as header_icon
         ${module.exports.fromSql}
         ${whereSql} ${orderBySql}`, params);

         return results;

      } catch (err) {
         throw err;
      } finally {
         conn.release();
      }
   },

   getLgProviderList: async ({filters, userId }) => {
      const conn = await pool.getConnection();

      try {

      const { whereSql, params } = ModelHelper.buildWhere(module.exports.listFields, filters);

         const [results] = await conn.query(`
         SELECT 
            (SELECT CASE WHEN company.name IS NULL THEN user.username ELSE CONCAT(company.name, ' <i class="fa fa-caret-right"></i> ', user.username) END FROM user user LEFT OUTER JOIN company company ON user.company_id = company.id WHERE user.id = consume_data_app_view.provide_user) as lg_provider, 
            consume_data_app_view.service_offering_title as gf_service_offering_title_1, 
            count(*) AS total
         ${module.exports.fromSql}
         ${whereSql}
         GROUP BY 
            (SELECT CASE WHEN company.name IS NULL THEN user.username ELSE CONCAT(company.name, ' <i class="fa fa-caret-right"></i> ', user.username) END FROM user user LEFT OUTER JOIN company company ON user.company_id = company.id WHERE user.id = consume_data_app_view.provide_user), 
            consume_data_app_view.service_offering_title`
         , params);

         return results;

      } catch (err) {
         throw err;
      } finally {
         conn.release();
      }
   },

   getGfServiceOfferingTitleList: async ({filters, userId }) => {
      const conn = await pool.getConnection();

      try {

      const { whereSql, params } = ModelHelper.buildWhere(module.exports.listFields, filters);

         const [results] = await conn.query(`
         SELECT 
            consume_data_app_view.service_offering_title as gf_service_offering_title, 
            count(*) AS total
         ${module.exports.fromSql}
         ${whereSql}
         GROUP BY 
            consume_data_app_view.service_offering_title`
         , params);

         return results;

      } catch (err) {
         throw err;
      } finally {
         conn.release();
      }
   },

   getGfTypeHtmlList: async ({filters, userId }) => {
      const conn = await pool.getConnection();

      try {

      const { whereSql, params } = ModelHelper.buildWhere(module.exports.listFields, filters);

         const [results] = await conn.query(`
         SELECT 
            consume_data_app_view.type_html as gf_type_html, 
            count(*) AS total
         ${module.exports.fromSql}
         ${whereSql}
         GROUP BY 
            consume_data_app_view.type_html`
         , params);

         return results;

      } catch (err) {
         throw err;
      } finally {
         conn.release();
      }
   }

}

