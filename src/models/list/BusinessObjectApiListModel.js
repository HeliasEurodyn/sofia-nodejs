const pool = require('../../db');
const ModelHelper = require('../../helpers/ModelHelper');

module.exports = {

   listFields: {
      business_object_id: { virtual: false,  db_table: 'data_catalog_business_object',  db_field: 'id',  section: 'column',  type: 'varchar',  primary: true,  autoIncrement: false },
      category_code: { virtual: false,  db_table: 'data_catalog_category',  db_field: 'code',  section: 'column',  type: 'varchar',  primary: false,  autoIncrement: false },
      category_name: { virtual: false,  db_table: 'data_catalog_category',  db_field: 'name',  section: 'column',  type: 'varchar',  primary: false,  autoIncrement: false },
      service_code: { virtual: false,  db_table: 'data_catalog_service',  db_field: 'code',  section: 'column',  type: 'varchar',  primary: false,  autoIncrement: false },
      service_name: { virtual: false,  db_table: 'data_catalog_service',  db_field: 'name',  section: 'column',  type: 'varchar',  primary: false,  autoIncrement: false },
      code: { virtual: false,  db_table: 'data_catalog_business_object',  db_field: 'code',  section: 'column',  type: 'varchar',  primary: false,  autoIncrement: false },
      name: { virtual: false,  db_table: 'data_catalog_business_object',  db_field: 'name',  section: 'column',  type: 'varchar',  primary: false,  autoIncrement: false },
      category_id: { virtual: false,  db_table: 'data_catalog_category',  db_field: 'id',  section: 'column',  type: 'varchar',  primary: true,  autoIncrement: false },
      service_id: { virtual: false,  db_table: 'data_catalog_service',  db_field: 'id',  section: 'column',  type: 'varchar',  primary: true,  autoIncrement: false },
      of_id: { virtual: false,  db_table: 'data_catalog_business_object',  db_field: 'id',  section: 'orderby',  type: 'varchar',  primary: true,  autoIncrement: false },
      category_grouping: { virtual: true,  db_table: '',  db_field: '',  section: 'leftgroup',  type: 'varchar',  primary: false,  autoIncrement: false },
      service_grouping: { virtual: true,  db_table: '',  db_field: '',  section: 'leftgroup',  type: 'varchar',  primary: false,  autoIncrement: false }
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
            data_catalog_business_object.id as business_object_id, 
            data_catalog_category.code as category_code, 
            data_catalog_category.name as category_name, 
            data_catalog_service.code as service_code, 
            data_catalog_service.name as service_name, 
            data_catalog_business_object.code as code, 
            data_catalog_business_object.name as name, 
            data_catalog_category.id as category_id, 
            data_catalog_service.id as service_id
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
            (SELECT CONCAT(data_catalog_category.code,' - ',data_catalog_category.name)) as category_grouping, 
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
   }

}

