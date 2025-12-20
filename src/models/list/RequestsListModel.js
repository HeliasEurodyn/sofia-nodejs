const pool = require('../../db');
const ModelHelper = require('../../helpers/ModelHelper');

module.exports = {

   listFields: {
      request_id: { virtual: false,  db_table: 'data_catalog_data_requests',  db_field: 'id',  section: 'column',  type: 'varchar',  primary: true,  autoIncrement: false },
      category: { virtual: true,  db_table: '',  db_field: '',  section: 'column',  type: 'varchar',  primary: false,  autoIncrement: false },
      title: { virtual: false,  db_table: 'data_catalog_data_offerings',  db_field: 'title',  section: 'column',  type: 'varchar',  primary: false,  autoIncrement: false },
      user_requesting: { virtual: true,  db_table: '',  db_field: '',  section: 'column',  type: 'varchar',  primary: false,  autoIncrement: false },
      status: { virtual: false,  db_table: 'data_catalog_data_requests',  db_field: 'status',  section: 'column',  type: 'varchar',  primary: false,  autoIncrement: false },
      created_on: { virtual: true,  db_table: '',  db_field: '',  section: 'column',  type: 'varchar',  primary: false,  autoIncrement: false },
      data_catalog_category_id: { virtual: false,  db_table: 'data_catalog_category',  db_field: 'id',  section: 'column',  type: 'varchar',  primary: true,  autoIncrement: false },
      user_offering_id: { virtual: false,  db_table: 'user',  db_field: 'id',  section: 'column',  type: 'varchar',  primary: true,  autoIncrement: false },
      company_id: { virtual: false,  db_table: 'company',  db_field: 'id',  section: 'column',  type: 'varchar',  primary: true,  autoIncrement: false },
      cf_viewed_by_offering_owner: { virtual: false,  db_table: 'data_catalog_data_requests',  db_field: 'viewed_by_offering_owner',  section: 'column',  type: 'int',  primary: false,  autoIncrement: false },
      cf_comments: { virtual: false,  db_table: 'data_catalog_data_requests',  db_field: 'comments',  section: 'column',  type: 'text',  primary: false,  autoIncrement: false },
      of_created_on: { virtual: false,  db_table: 'data_catalog_data_requests',  db_field: 'created_on',  section: 'orderby',  type: 'datetime',  primary: false,  autoIncrement: false },
      ft_id_offering: { virtual: false,  db_table: 'data_catalog_data_offerings',  db_field: 'id',  section: 'filter',  type: 'varchar',  primary: true,  autoIncrement: false },
      ft_category_id: { virtual: false,  db_table: 'data_catalog_category',  db_field: 'id',  section: 'filter',  type: 'varchar',  primary: true,  autoIncrement: false },
      ft_service_id: { virtual: false,  db_table: 'data_catalog_service',  db_field: 'id',  section: 'filter',  type: 'varchar',  primary: true,  autoIncrement: false },
      ft_business_object_id: { virtual: false,  db_table: 'data_catalog_business_object',  db_field: 'id',  section: 'filter',  type: 'varchar',  primary: true,  autoIncrement: false },
      ft_owner_id: { virtual: false,  db_table: 'data_catalog_data_requests',  db_field: 'owner_id',  section: 'filter',  type: 'varchar',  primary: false,  autoIncrement: false },
      ft_created_on: { virtual: false,  db_table: 'data_catalog_data_requests',  db_field: 'created_on',  section: 'filter',  type: 'datetime',  primary: false,  autoIncrement: false },
      ft_created_by: { virtual: false,  db_table: 'data_catalog_data_offerings',  db_field: 'created_by',  section: 'filter',  type: 'varchar',  primary: false,  autoIncrement: false },
      category_grouping: { virtual: true,  db_table: '',  db_field: '',  section: 'leftgroup',  type: 'varchar',  primary: false,  autoIncrement: false },
      service_grouping: { virtual: true,  db_table: '',  db_field: '',  section: 'leftgroup',  type: 'varchar',  primary: false,  autoIncrement: false },
      business_object_grouping: { virtual: true,  db_table: '',  db_field: '',  section: 'leftgroup',  type: 'varchar',  primary: false,  autoIncrement: false },
      users_grouping: { virtual: true,  db_table: '',  db_field: '',  section: 'leftgroup',  type: 'varchar',  primary: false,  autoIncrement: false }
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

   getList: async (filters) => {
      const conn = await pool.getConnection();

      try {

         const { whereSql, params } = ModelHelper.buildWhere(module.exports.listFields, filters);

         const [results] = await conn.query(`
         SELECT 
            data_catalog_data_requests.id as request_id, 
            data_catalog_data_offerings.title as title, 
            data_catalog_data_requests.status as status, 
            data_catalog_category.id as data_catalog_category_id, 
            user_offering.id as user_offering_id, 
            company.id as company_id, 
            data_catalog_data_requests.viewed_by_offering_owner as cf_viewed_by_offering_owner, 
            data_catalog_data_requests.comments as cf_comments, 
            (SELECT CONCAT(data_catalog_category.name,' <i class="fa fa-caret-right"></i> ', data_catalog_service.name,' <i class="fa fa-caret-right"></i> ', data_catalog_business_object.name)) as category, 
            (SELECT CONCAT(company_requesting.name,' <i class="fa fa-caret-right"></i> ', user_requesting.username)) as user_requesting, 
            (date_format(data_catalog_data_requests.created_on,'%d/%m/%Y %H:%i')) as created_on
         ${module.exports.fromSql}
         ${whereSql}`, params);

         return results;

      } catch (err) {
         throw err;
      } finally {
         conn.release();
      }
   },

   getCategoryGroupingList: async (filters) => {
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

   getServiceGroupingList: async (filters) => {
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

   getBusinessObjectGroupingList: async (filters) => {
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

   getUsersGroupingList: async (filters) => {
      const conn = await pool.getConnection();

      try {

      const { whereSql, params } = ModelHelper.buildWhere(module.exports.listFields, filters);

         const [results] = await conn.query(`
         SELECT 
            (SELECT CONCAT(user_requesting.username,' - ', company_requesting.name)) as users_grouping, 
            count(*) AS total
         ${module.exports.fromSql}
         ${whereSql}
         GROUP BY 
            (SELECT CONCAT(user_requesting.username,' - ', company_requesting.name))`
         , params);

         return results;

      } catch (err) {
         throw err;
      } finally {
         conn.release();
      }
   }

}

