const pool = require('../../db');
const ModelHelper = require('../../helpers/ModelHelper');

module.exports = {

   listFields: {
      my_subscription_id: { virtual: false, db_table: 'data_catalog_data_requests', db_field: 'id', section: 'column', type: 'varchar', primary: true, autoIncrement: false, filterOperator: 'like' },
      title: { virtual: false, db_table: 'data_catalog_data_offerings', db_field: 'title', section: 'column', type: 'varchar', primary: false, autoIncrement: false, filterOperator: 'like' },
      status: { virtual: false, db_table: 'data_catalog_data_requests', db_field: 'status', section: 'column', type: 'varchar', primary: false, autoIncrement: false, filterOperator: 'like' },
      comments: { virtual: false, db_table: 'data_catalog_data_requests', db_field: 'comments', section: 'column', type: 'text', primary: false, autoIncrement: false, filterOperator: 'like' },
      profile_selector: { virtual: false, db_table: 'data_catalog_data_offerings', db_field: 'profile_selector', section: 'column', type: 'varchar', primary: false, autoIncrement: false, filterOperator: 'like' },
      profile_description: { virtual: false, db_table: 'data_catalog_data_offerings', db_field: 'profile_description', section: 'column', type: 'varchar', primary: false, autoIncrement: false, filterOperator: 'like' },
      user_offering_id: { virtual: false, db_table: 'user', db_field: 'id', section: 'column', type: 'varchar', primary: true, autoIncrement: false, filterOperator: 'like' },
      company_id: { virtual: false, db_table: 'company', db_field: 'id', section: 'column', type: 'varchar', primary: true, autoIncrement: false, filterOperator: 'like' },
      category_id: { virtual: false, db_table: 'data_catalog_category', db_field: 'id', section: 'column', type: 'varchar', primary: true, autoIncrement: false, filterOperator: 'like' },
      service_id: { virtual: false, db_table: 'data_catalog_service', db_field: 'id', section: 'column', type: 'varchar', primary: true, autoIncrement: false, filterOperator: 'like' },
      business_object_id: { virtual: false, db_table: 'data_catalog_business_object', db_field: 'id', section: 'column', type: 'varchar', primary: true, autoIncrement: false, filterOperator: 'like' },
      created_on: { virtual: false, db_table: 'data_catalog_data_requests', db_field: 'created_on', section: 'column', type: 'datetime', primary: false, autoIncrement: false, filterOperator: '=' },
      category_code: { virtual: false, db_table: 'data_catalog_category', db_field: 'code', section: 'column', type: 'varchar', primary: false, autoIncrement: false, filterOperator: 'like' },
      category_name: { virtual: false, db_table: 'data_catalog_category', db_field: 'name', section: 'column', type: 'varchar', primary: false, autoIncrement: false, filterOperator: 'like' },
      of_created_on: { virtual: false, db_table: 'data_catalog_data_requests', db_field: 'created_on', section: 'orderby', type: 'datetime', primary: false, autoIncrement: false, filterOperator: '=' },
      ft_category_id: { virtual: false, db_table: 'data_catalog_category', db_field: 'id', section: 'filter', type: 'varchar', primary: true, autoIncrement: false, filterOperator: '=' },
      ft_service_id: { virtual: false, db_table: 'data_catalog_service', db_field: 'id', section: 'filter', type: 'varchar', primary: true, autoIncrement: false, filterOperator: '=' },
      ft_business_object_id: { virtual: false, db_table: 'data_catalog_business_object', db_field: 'id', section: 'filter', type: 'varchar', primary: true, autoIncrement: false, filterOperator: '=' },
      ft_owner_id: { virtual: false, db_table: 'data_catalog_data_requests', db_field: 'owner_id', section: 'filter', type: 'varchar', primary: false, autoIncrement: false, filterOperator: '=' },
      ft_created_on: { virtual: false, db_table: 'data_catalog_data_requests', db_field: 'created_on', section: 'filter', type: 'datetime', primary: false, autoIncrement: false, filterOperator: 'like' },
      ft_created_by_id: { virtual: false, db_table: 'data_catalog_data_offerings', db_field: 'created_by', section: 'filter', type: 'varchar', primary: false, autoIncrement: false, filterOperator: 'like' },
      category_grouping: { virtual: true, db_table: '', db_field: '', section: 'leftgroup', type: 'varchar', primary: false, autoIncrement: false, filterOperator: '=' },
      service_grouping: { virtual: true, db_table: '', db_field: '', section: 'leftgroup', type: 'varchar', primary: false, autoIncrement: false, filterOperator: '=' },
      business_object_grouping: { virtual: true, db_table: '', db_field: '', section: 'leftgroup', type: 'varchar', primary: false, autoIncrement: false, filterOperator: '=' },
      users_grouping: { virtual: true, db_table: '', db_field: '', section: 'leftgroup', type: 'varchar', primary: false, autoIncrement: false, filterOperator: '=' }
   },

   fromSql:
      `FROM
         data_catalog_data_requests data_catalog_data_requests
         LEFT OUTER JOIN data_catalog_data_offerings data_catalog_data_offerings ON data_catalog_data_offerings.id = data_catalog_data_requests.data_catalog_data_offering_id
         LEFT OUTER JOIN data_catalog_business_object data_catalog_business_object ON data_catalog_business_object.id = data_catalog_data_offerings.data_catalog_business_object_id
         LEFT OUTER JOIN data_catalog_service data_catalog_service ON data_catalog_service.id = data_catalog_business_object.data_catalog_service_id
         LEFT OUTER JOIN data_catalog_category data_catalog_category ON data_catalog_category.id = data_catalog_service.data_catalog_category_id
         LEFT OUTER JOIN user user_offering ON user_offering.id = data_catalog_data_offerings.created_by
         LEFT OUTER JOIN company company ON company.id = user_offering.company_id`,

   getList: async ({ filters, userId }) => {
      const conn = await pool.getConnection();

      try {

         const { whereSql, params } = ModelHelper.buildWhere(module.exports.listFields, filters);
         const orderBySql = ModelHelper.buildOrderBy(module.exports.listFields, filters);

         const [results] = await conn.query(`
         SELECT 
            data_catalog_data_requests.id as my_subscription_id, 
            data_catalog_data_offerings.title as title, 
            data_catalog_data_requests.status as status, 
            data_catalog_data_requests.comments as comments, 
            data_catalog_data_offerings.profile_selector as profile_selector, 
            data_catalog_data_offerings.profile_description as profile_description, 
            user_offering.id as user_offering_id, 
            company.id as company_id, 
            data_catalog_category.id as category_id, 
            data_catalog_service.id as service_id, 
            data_catalog_business_object.id as business_object_id, 
            data_catalog_data_requests.created_on as created_on, 
            data_catalog_category.code as category_code, 
            data_catalog_category.name as category_name
         ${module.exports.fromSql}
         ${whereSql} ${orderBySql}`, params);

         return results;

      } catch (err) {
         throw err;
      } finally {
         conn.release();
      }
   },

   getCategoryGroupingList: async ({filters, userId }) => {
      const conn = await pool.getConnection();

      try {

      const { whereSql, params } = ModelHelper.buildWhere(module.exports.listFields, filters);

         const [results] = await conn.query(`
         SELECT 
            (SELECT CONCAT(data_catalog_category.code,' - ', data_catalog_category.name)) as category_grouping, 
            count(*) AS total
         ${module.exports.fromSql}
         ${whereSql}
         GROUP BY 
            (SELECT CONCAT(data_catalog_category.code,' - ', data_catalog_category.name))`
         , params);

         return results;

      } catch (err) {
         throw err;
      } finally {
         conn.release();
      }
   },

   getServiceGroupingList: async ({filters, userId }) => {
      const conn = await pool.getConnection();

      try {

      const { whereSql, params } = ModelHelper.buildWhere(module.exports.listFields, filters);

         const [results] = await conn.query(`
         SELECT 
            (SELECT CONCAT(data_catalog_service.code,' - ',data_catalog_service.name)) as service_grouping, 
            count(*) AS total
         ${module.exports.fromSql}
         ${whereSql}
         GROUP BY 
            (SELECT CONCAT(data_catalog_service.code,' - ',data_catalog_service.name))`
         , params);

         return results;

      } catch (err) {
         throw err;
      } finally {
         conn.release();
      }
   },

   getBusinessObjectGroupingList: async ({filters, userId }) => {
      const conn = await pool.getConnection();

      try {

      const { whereSql, params } = ModelHelper.buildWhere(module.exports.listFields, filters);

         const [results] = await conn.query(`
         SELECT 
            (SELECT CONCAT(data_catalog_business_object.code,' - ', data_catalog_business_object.name)) as business_object_grouping, 
            count(*) AS total
         ${module.exports.fromSql}
         ${whereSql}
         GROUP BY 
            (SELECT CONCAT(data_catalog_business_object.code,' - ', data_catalog_business_object.name))`
         , params);

         return results;

      } catch (err) {
         throw err;
      } finally {
         conn.release();
      }
   },

   getUsersGroupingList: async ({filters, userId }) => {
      const conn = await pool.getConnection();

      try {

      const { whereSql, params } = ModelHelper.buildWhere(module.exports.listFields, filters);

         const [results] = await conn.query(`
         SELECT 
            (SELECT CONCAT(user_offering.username,' - ', company.name)) as users_grouping, 
            count(*) AS total
         ${module.exports.fromSql}
         ${whereSql}
         GROUP BY 
            (SELECT CONCAT(user_offering.username,' - ', company.name))`
         , params);

         return results;

      } catch (err) {
         throw err;
      } finally {
         conn.release();
      }
   }

}

