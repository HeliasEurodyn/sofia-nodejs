const pool = require('../../db');
const ModelHelper = require('../../helpers/ModelHelper');

module.exports = {

   listFields: {
      cf_id: { virtual: false, db_table: 'data_catalog_data_offerings', db_field: 'id', section: 'column', type: 'varchar', primary: true, autoIncrement: false, filterOperator: '=' },
      sqlf_10: { virtual: true, db_table: '', db_field: '', section: 'column', type: 'varchar', primary: false, autoIncrement: false, filterOperator: 'like' },
      cf_title: { virtual: false, db_table: 'data_catalog_data_offerings', db_field: 'title', section: 'column', type: 'varchar', primary: false, autoIncrement: false, filterOperator: 'like' },
      cf_username: { virtual: false, db_table: 'user', db_field: 'username', section: 'column', type: 'varchar', primary: false, autoIncrement: false, filterOperator: 'like' },
      cf_name: { virtual: false, db_table: 'company', db_field: 'name', section: 'column', type: 'varchar', primary: false, autoIncrement: false, filterOperator: 'like' },
      sqlf_9: { virtual: true, db_table: '', db_field: '', section: 'column', type: 'varchar', primary: false, autoIncrement: false, filterOperator: 'like' },
      cf_input_profile: { virtual: false, db_table: 'data_catalog_data_offerings', db_field: 'input_profile', section: 'column', type: 'varchar', primary: false, autoIncrement: false, filterOperator: 'like' },
      cf_input_data_source: { virtual: false, db_table: 'data_catalog_data_offerings', db_field: 'input_data_source', section: 'column', type: 'varchar', primary: false, autoIncrement: false, filterOperator: 'like' },
      cf_id_1: { virtual: false, db_table: 'data_catalog_service', db_field: 'id', section: 'column', type: 'varchar', primary: true, autoIncrement: false, filterOperator: 'like' },
      cf_id_2: { virtual: false, db_table: 'data_catalog_category', db_field: 'id', section: 'column', type: 'varchar', primary: true, autoIncrement: false, filterOperator: 'like' },
      of_id: { virtual: false, db_table: 'data_catalog_data_offerings', db_field: 'id', section: 'orderby', type: 'varchar', primary: true, autoIncrement: false, filterOperator: '=' },
      ft_id: { virtual: false, db_table: 'data_catalog_category', db_field: 'id', section: 'filter', type: 'varchar', primary: true, autoIncrement: false, filterOperator: '=' },
      ft_id_1: { virtual: false, db_table: 'data_catalog_service', db_field: 'id', section: 'filter', type: 'varchar', primary: true, autoIncrement: false, filterOperator: '=' },
      ft_data_catalog_business_object_id: { virtual: false, db_table: 'data_catalog_data_offerings', db_field: 'data_catalog_business_object_id', section: 'filter', type: 'bigint', primary: false, autoIncrement: false, filterOperator: '=' },
      ft_created_on: { virtual: false, db_table: 'data_catalog_data_offerings', db_field: 'created_on', section: 'filter', type: 'datetime', primary: false, autoIncrement: false, filterOperator: '=' },
      ft_created_by: { virtual: false, db_table: 'data_catalog_data_offerings', db_field: 'created_by', section: 'filter', type: 'varchar', primary: false, autoIncrement: false, filterOperator: '=' },
      ft_status: { virtual: false, db_table: 'data_catalog_data_offerings', db_field: 'status', section: 'filter', type: 'varchar', primary: false, autoIncrement: false, filterOperator: '=' },
      sqlgf_1: { virtual: true, db_table: '', db_field: '', section: 'leftgroup', type: 'varchar', primary: false, autoIncrement: false, filterOperator: '=' },
      sqlgf_2: { virtual: true, db_table: '', db_field: '', section: 'leftgroup', type: 'varchar', primary: false, autoIncrement: false, filterOperator: '=' },
      sqlgf_3: { virtual: true, db_table: '', db_field: '', section: 'leftgroup', type: 'varchar', primary: false, autoIncrement: false, filterOperator: '=' },
      sqlgf_4: { virtual: true, db_table: '', db_field: '', section: 'leftgroup', type: 'varchar', primary: false, autoIncrement: false, filterOperator: '=' }
   },

   fromSql:
      `FROM
         data_catalog_data_offerings data_catalog_data_offerings
         LEFT OUTER JOIN data_catalog_business_object data_catalog_business_object ON data_catalog_business_object.id = data_catalog_data_offerings.data_catalog_business_object_id
         LEFT OUTER JOIN data_catalog_service data_catalog_service ON data_catalog_service.id = data_catalog_business_object.data_catalog_service_id
         LEFT OUTER JOIN data_catalog_category data_catalog_category ON data_catalog_category.id = data_catalog_service.data_catalog_category_id
         LEFT OUTER JOIN user user ON user.id = data_catalog_data_offerings.created_by
         LEFT OUTER JOIN company company ON company.id = user.company_id`,

   getList: async ({ filters, userId }) => {
      const conn = await pool.getConnection();

      try {

         const { whereSql, params } = ModelHelper.buildWhere(module.exports.listFields, filters);
         const orderBySql = ModelHelper.buildOrderBy(module.exports.listFields, filters);

         const [results] = await conn.query(`
         SELECT 
            data_catalog_data_offerings.id as cf_id, 
            data_catalog_data_offerings.title as cf_title, 
            user.username as cf_username, 
            company.name as cf_name, 
            data_catalog_data_offerings.input_profile as cf_input_profile, 
            data_catalog_data_offerings.input_data_source as cf_input_data_source, 
            data_catalog_service.id as cf_id_1, 
            data_catalog_category.id as cf_id_2, 
            (SELECT CONCAT(data_catalog_category.name,' <i class="fa fa-caret-right"></i> ', data_catalog_service.name,' <i class="fa fa-caret-right"></i> ', data_catalog_business_object.name)) as sqlf_10, 
            (date_format(data_catalog_data_offerings.created_on,'%d/%m/%Y %H:%i')) as sqlf_9
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

   getSqlgf2List: async ({filters, userId }) => {
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

   getSqlgf3List: async ({filters, userId }) => {
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
   },

   getSqlgf4List: async ({filters, userId }) => {
      const conn = await pool.getConnection();

      try {

      const { whereSql, params } = ModelHelper.buildWhere(module.exports.listFields, filters);

         const [results] = await conn.query(`
         SELECT 
            (SELECT CONCAT(user.username,' - ', company.name)) as sqlgf_4, 
            count(*) AS total
         ${module.exports.fromSql}
         ${whereSql}
         GROUP BY 
            (SELECT CONCAT(user.username,' - ', company.name))`
         , params);

         return results;

      } catch (err) {
         throw err;
      } finally {
         conn.release();
      }
   }

}

