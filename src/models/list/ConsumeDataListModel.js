const pool = require('../../db');
const ModelHelper = require('../../helpers/ModelHelper');

module.exports = {

   listFields: {
      cf_id: { virtual: false,  db_table: 'data_send',  db_field: 'id',  section: 'column',  type: 'varchar',  primary: true,  autoIncrement: false },
      cf_id_1: { virtual: false,  db_table: 'data_catalog_category',  db_field: 'id',  section: 'column',  type: 'varchar',  primary: true,  autoIncrement: false },
      sqlf_5: { virtual: true,  db_table: '',  db_field: '',  section: 'column',  type: 'varchar',  primary: false,  autoIncrement: false },
      cf_title_1: { virtual: false,  db_table: 'data_catalog_data_offerings',  db_field: 'title',  section: 'column',  type: 'varchar',  primary: false,  autoIncrement: false },
      sqlf_7: { virtual: true,  db_table: '',  db_field: '',  section: 'column',  type: 'varchar',  primary: false,  autoIncrement: false },
      cf_created_on: { virtual: false,  db_table: 'data_send',  db_field: 'created_on',  section: 'column',  type: 'datetime',  primary: false,  autoIncrement: false },
      cf_title: { virtual: false,  db_table: 'data_send',  db_field: 'title',  section: 'column',  type: 'varchar',  primary: false,  autoIncrement: false },
      cf_description: { virtual: false,  db_table: 'data_send',  db_field: 'description',  section: 'column',  type: 'varchar',  primary: false,  autoIncrement: false },
      total_views: { virtual: true,  db_table: '',  db_field: '',  section: 'column',  type: 'varchar',  primary: false,  autoIncrement: false },
      of_created_on: { virtual: false,  db_table: 'data_send',  db_field: 'created_on',  section: 'orderby',  type: 'datetime',  primary: false,  autoIncrement: false },
      ft_status: { virtual: false,  db_table: 'data_catalog_data_requests',  db_field: 'status',  section: 'filter',  type: 'varchar',  primary: false,  autoIncrement: false },
      ft_owner_id: { virtual: false,  db_table: 'data_catalog_data_requests',  db_field: 'owner_id',  section: 'filter',  type: 'varchar',  primary: false,  autoIncrement: false },
      ft_id: { virtual: false,  db_table: 'data_catalog_category',  db_field: 'id',  section: 'filter',  type: 'varchar',  primary: true,  autoIncrement: false },
      ft_id_1: { virtual: false,  db_table: 'data_catalog_service',  db_field: 'id',  section: 'filter',  type: 'varchar',  primary: true,  autoIncrement: false },
      ft_id_2: { virtual: false,  db_table: 'data_catalog_business_object',  db_field: 'id',  section: 'filter',  type: 'varchar',  primary: true,  autoIncrement: false },
      ft_id_3: { virtual: false,  db_table: 'user',  db_field: 'id',  section: 'filter',  type: 'varchar',  primary: true,  autoIncrement: false },
      ft_status_1: { virtual: false,  db_table: 'data_send',  db_field: 'status',  section: 'filter',  type: 'varchar',  primary: false,  autoIncrement: false },
      sqlgf_1: { virtual: true,  db_table: '',  db_field: '',  section: 'leftgroup',  type: 'varchar',  primary: false,  autoIncrement: false },
      sqlgf_2: { virtual: true,  db_table: '',  db_field: '',  section: 'leftgroup',  type: 'varchar',  primary: false,  autoIncrement: false },
      sqlgf_3: { virtual: true,  db_table: '',  db_field: '',  section: 'leftgroup',  type: 'varchar',  primary: false,  autoIncrement: false }
   },

   fromSql:
      `FROM
         data_send data_send
         LEFT OUTER JOIN data_catalog_data_offerings data_catalog_data_offerings ON data_catalog_data_offerings.id = data_send.data_catalog_data_offerings_id
         LEFT OUTER JOIN data_catalog_business_object data_catalog_business_object ON data_catalog_business_object.id = data_catalog_data_offerings.data_catalog_business_object_id
         LEFT OUTER JOIN data_catalog_service data_catalog_service ON data_catalog_service.id = data_catalog_business_object.data_catalog_service_id
         LEFT OUTER JOIN data_catalog_category data_catalog_category ON data_catalog_category.id = data_catalog_service.data_catalog_category_id
         LEFT OUTER JOIN data_catalog_data_requests data_catalog_data_requests ON data_catalog_data_requests.data_catalog_data_offering_id = data_catalog_data_offerings.id AND data_catalog_data_requests.owner_id = :userid
         LEFT OUTER JOIN user user_offering ON user_offering.id = data_catalog_data_offerings.created_by`,

   getList: async (filters) => {
      const conn = await pool.getConnection();

      try {

         const { whereSql, params } = ModelHelper.buildWhere(module.exports.listFields, filters);

         const [results] = await conn.query(`
         SELECT 
            data_send.id as cf_id, 
            data_catalog_category.id as cf_id_1, 
            data_catalog_data_offerings.title as cf_title_1, 
            data_send.created_on as cf_created_on, 
            data_send.title as cf_title, 
            data_send.description as cf_description, 
            (SELECT CONCAT(data_catalog_category.name,' <i class="fa fa-caret-right"></i> ', data_catalog_service.name,' <i class="fa fa-caret-right"></i> ', data_catalog_business_object.name)) as sqlf_5, 
            (SELECT CONCAT(company_offering.name,' <i class="fa fa-caret-right"></i> ', user_offering.username)) as sqlf_7, 
            (SELECT COUNT(dv.id) AS total FROM data_views dv WHERE dv.user_id = data_catalog_data_requests.created_by AND dv.data_id = data_send.id) as total_views
         ${module.exports.fromSql}
         ${whereSql}`, params);

         return results;

      } catch (err) {
         throw err;
      } finally {
         conn.release();
      }
   },

   getSqlgf1List: async (filters) => {
      const conn = await pool.getConnection();

      try {

      const { whereSql, params } = ModelHelper.buildWhere(module.exports.listFields, filters);

         const [results] = await conn.query(`
         SELECT 
            (SELECT CONCAT(data_catalog_category.code,' - ', data_catalog_category.name)) as sqlgf_1, 
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

   getSqlgf2List: async (filters) => {
      const conn = await pool.getConnection();

      try {

      const { whereSql, params } = ModelHelper.buildWhere(module.exports.listFields, filters);

         const [results] = await conn.query(`
         SELECT 
            (SELECT CONCAT(data_catalog_service.code,' - ',data_catalog_service.name)) as sqlgf_2, 
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

   getSqlgf3List: async (filters) => {
      const conn = await pool.getConnection();

      try {

      const { whereSql, params } = ModelHelper.buildWhere(module.exports.listFields, filters);

         const [results] = await conn.query(`
         SELECT 
            (SELECT CONCAT(data_catalog_business_object.code,' - ', data_catalog_business_object.name)) as sqlgf_3, 
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
   }

}

