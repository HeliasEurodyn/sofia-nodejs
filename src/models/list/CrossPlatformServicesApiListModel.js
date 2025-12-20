const pool = require('../../db');
const ModelHelper = require('../../helpers/ModelHelper');

module.exports = {

   listFields: {
      cross_platform_service_id: { virtual: false,  db_table: 'data_catalog_business_object',  db_field: 'id',  section: 'column',  type: 'varchar',  primary: true,  autoIncrement: false },
      category: { virtual: false,  db_table: 'data_catalog_category',  db_field: 'code',  section: 'column',  type: 'varchar',  primary: false,  autoIncrement: false },
      category_name: { virtual: false,  db_table: 'data_catalog_category',  db_field: 'name',  section: 'column',  type: 'varchar',  primary: false,  autoIncrement: false },
      service: { virtual: false,  db_table: 'data_catalog_service',  db_field: 'code',  section: 'column',  type: 'varchar',  primary: false,  autoIncrement: false },
      service_description: { virtual: false,  db_table: 'data_catalog_service',  db_field: 'short_description',  section: 'column',  type: 'varchar',  primary: false,  autoIncrement: false },
      service_name: { virtual: false,  db_table: 'data_catalog_service',  db_field: 'name',  section: 'column',  type: 'varchar',  primary: false,  autoIncrement: false },
      business_object_code: { virtual: false,  db_table: 'data_catalog_business_object',  db_field: 'code',  section: 'column',  type: 'varchar',  primary: false,  autoIncrement: false },
      business_object_name: { virtual: false,  db_table: 'data_catalog_business_object',  db_field: 'name',  section: 'column',  type: 'varchar',  primary: false,  autoIncrement: false },
      profile_selector: { virtual: false,  db_table: 'data_catalog_business_object',  db_field: 'profile_selector',  section: 'column',  type: 'varchar',  primary: false,  autoIncrement: false },
      status: { virtual: false,  db_table: 'data_catalog_business_object',  db_field: 'status',  section: 'column',  type: 'varchar',  primary: false,  autoIncrement: false },
      of_id: { virtual: false,  db_table: 'data_catalog_business_object',  db_field: 'id',  section: 'orderby',  type: 'varchar',  primary: true,  autoIncrement: false },
      of_status: { virtual: false,  db_table: 'data_catalog_business_object',  db_field: 'status',  section: 'orderby',  type: 'varchar',  primary: false,  autoIncrement: false },
      ft_status: { virtual: false,  db_table: 'data_catalog_business_object',  db_field: 'status',  section: 'filter',  type: 'varchar',  primary: false,  autoIncrement: false },
      category_group: { virtual: true,  db_table: '',  db_field: '',  section: 'leftgroup',  type: 'varchar',  primary: false,  autoIncrement: false },
      service_group: { virtual: true,  db_table: '',  db_field: '',  section: 'leftgroup',  type: 'varchar',  primary: false,  autoIncrement: false }
   },

   fromSql:
      `FROM
         data_catalog_business_object data_catalog_business_object
         LEFT OUTER JOIN data_catalog_service data_catalog_service ON data_catalog_service.id = data_catalog_business_object.data_catalog_service_id
         LEFT OUTER JOIN data_catalog_category data_catalog_category ON data_catalog_category.id = data_catalog_service.data_catalog_category_id`,

   getList: async (filters) => {
      const conn = await pool.getConnection();

      try {

         const { whereSql, params } = ModelHelper.buildWhere(module.exports.listFields, filters);

         const [results] = await conn.query(`
         SELECT 
            data_catalog_business_object.id as cross_platform_service_id, 
            data_catalog_category.code as category, 
            data_catalog_category.name as category_name, 
            data_catalog_service.code as service, 
            data_catalog_service.short_description as service_description, 
            data_catalog_service.name as service_name, 
            data_catalog_business_object.code as business_object_code, 
            data_catalog_business_object.name as business_object_name, 
            data_catalog_business_object.profile_selector as profile_selector, 
            data_catalog_business_object.status as status
         ${module.exports.fromSql}
         ${whereSql}`, params);

         return results;

      } catch (err) {
         throw err;
      } finally {
         conn.release();
      }
   },

   getCategoryGroupList: async (filters) => {
      const conn = await pool.getConnection();

      try {

      const { whereSql, params } = ModelHelper.buildWhere(module.exports.listFields, filters);

         const [results] = await conn.query(`
         SELECT 
            (SELECT CONCAT(data_catalog_category.code,' - ',data_catalog_category.name)) as category_group, 
            count(*) AS total
         ${module.exports.fromSql}
         ${whereSql}
         GROUP BY 
            (SELECT CONCAT(data_catalog_category.code,' - ',data_catalog_category.name))`
         , params);

         return results;

      } catch (err) {
         throw err;
      } finally {
         conn.release();
      }
   },

   getServiceGroupList: async (filters) => {
      const conn = await pool.getConnection();

      try {

      const { whereSql, params } = ModelHelper.buildWhere(module.exports.listFields, filters);

         const [results] = await conn.query(`
         SELECT 
            (SELECT CONCAT(data_catalog_service.code,' - ',data_catalog_service.name)) as service_group, 
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
   }

}

