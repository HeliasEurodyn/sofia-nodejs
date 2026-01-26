const pool = require('../../db');
const ModelHelper = require('../../helpers/ModelHelper');

module.exports = {

   listFields: {
      cf_id: { virtual: false, db_table: 'data_catalog_business_object', db_field: 'id', section: 'column', type: 'varchar', primary: true, autoIncrement: false, filterOperator: '=' },
      cf_code_2: { virtual: false, db_table: 'data_catalog_category', db_field: 'code', section: 'column', type: 'varchar', primary: false, autoIncrement: false, filterOperator: 'like' },
      cf_name_2: { virtual: false, db_table: 'data_catalog_category', db_field: 'name', section: 'column', type: 'varchar', primary: false, autoIncrement: false, filterOperator: 'like' },
      cf_code_1: { virtual: false, db_table: 'data_catalog_service', db_field: 'code', section: 'column', type: 'varchar', primary: false, autoIncrement: false, filterOperator: 'like' },
      cf_name_1: { virtual: false, db_table: 'data_catalog_service', db_field: 'name', section: 'column', type: 'varchar', primary: false, autoIncrement: false, filterOperator: 'like' },
      cf_code: { virtual: false, db_table: 'data_catalog_business_object', db_field: 'code', section: 'column', type: 'varchar', primary: false, autoIncrement: false, filterOperator: 'like' },
      cf_name: { virtual: false, db_table: 'data_catalog_business_object', db_field: 'name', section: 'column', type: 'varchar', primary: false, autoIncrement: false, filterOperator: 'like' },
      of_id: { virtual: false, db_table: 'data_catalog_business_object', db_field: 'id', section: 'orderby', type: 'varchar', primary: true, autoIncrement: false, filterOperator: '=' },
      sqlgf_2: { virtual: true, db_table: '', db_field: '', section: 'leftgroup', type: 'varchar', primary: false, autoIncrement: false, filterOperator: '=' },
      sqlgf_3: { virtual: true, db_table: '', db_field: '', section: 'leftgroup', type: 'varchar', primary: false, autoIncrement: false, filterOperator: '=' }
   },

   fromSql:
      `FROM
         data_catalog_business_object data_catalog_business_object
         LEFT OUTER JOIN data_catalog_service data_catalog_service ON data_catalog_service.id = data_catalog_business_object.data_catalog_service_id
         LEFT OUTER JOIN data_catalog_category data_catalog_category ON data_catalog_category.id = data_catalog_service.data_catalog_category_id`,

   getList: async ({ filters, userId }) => {
      const conn = await pool.getConnection();

      try {

         const { whereSql, params } = ModelHelper.buildWhere(module.exports.listFields, filters);
         const orderBySql = ModelHelper.buildOrderBy(module.exports.listFields, filters);

         const [results] = await conn.query(`
         SELECT 
            data_catalog_business_object.id as cf_id, 
            data_catalog_category.code as cf_code_2, 
            data_catalog_category.name as cf_name_2, 
            data_catalog_service.code as cf_code_1, 
            data_catalog_service.name as cf_name_1, 
            data_catalog_business_object.code as cf_code, 
            data_catalog_business_object.name as cf_name
         ${module.exports.fromSql}
         ${whereSql} ${orderBySql}`, params);

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
            (SELECT CONCAT(data_catalog_category.code,' - ',data_catalog_category.name)) as sqlgf_2, 
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

   getSqlgf3List: async ({filters, userId }) => {
      const conn = await pool.getConnection();

      try {

      const { whereSql, params } = ModelHelper.buildWhere(module.exports.listFields, filters);

         const [results] = await conn.query(`
         SELECT 
            (SELECT CONCAT(data_catalog_service.code,' - ',data_catalog_service.name)) as sqlgf_3, 
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

