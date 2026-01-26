const pool = require('../../db');
const ModelHelper = require('../../helpers/ModelHelper');

module.exports = {

   listFields: {
      cf_id: { virtual: false, db_table: 'data_send', db_field: 'id', section: 'column', type: 'varchar', primary: true, autoIncrement: false, filterOperator: 'like' },
      of_created_on: { virtual: false, db_table: 'data_send', db_field: 'created_on', section: 'orderby', type: 'datetime', primary: false, autoIncrement: false, filterOperator: '=' },
      ft_id: { virtual: false, db_table: 'data_catalog_category', db_field: 'id', section: 'filter', type: 'varchar', primary: true, autoIncrement: false, filterOperator: '=' },
      ft_id_1: { virtual: false, db_table: 'data_catalog_service', db_field: 'id', section: 'filter', type: 'varchar', primary: true, autoIncrement: false, filterOperator: '=' },
      ft_id_2: { virtual: false, db_table: 'data_catalog_business_object', db_field: 'id', section: 'filter', type: 'varchar', primary: true, autoIncrement: false, filterOperator: '=' },
      ft_id_3: { virtual: false, db_table: 'user', db_field: 'id', section: 'filter', type: 'varchar', primary: true, autoIncrement: false, filterOperator: '=' },
      ft_created_on: { virtual: false, db_table: 'data_send', db_field: 'created_on', section: 'filter', type: 'datetime', primary: false, autoIncrement: false, filterOperator: '>=' },
      ft_created_on_1: { virtual: false, db_table: 'data_send', db_field: 'created_on', section: 'filter', type: 'datetime', primary: false, autoIncrement: false, filterOperator: '<=' },
      sqlgf_1: { virtual: true, db_table: '', db_field: '', section: 'leftgroup', type: 'varchar', primary: false, autoIncrement: false, filterOperator: '=' },
      sqlgf_2: { virtual: true, db_table: '', db_field: '', section: 'leftgroup', type: 'varchar', primary: false, autoIncrement: false, filterOperator: '=' },
      sqlgf_3: { virtual: true, db_table: '', db_field: '', section: 'leftgroup', type: 'varchar', primary: false, autoIncrement: false, filterOperator: '=' },
      gf_name: { virtual: false, db_table: 'company', db_field: 'name', section: 'leftgroup', type: 'varchar', primary: false, autoIncrement: false, filterOperator: '=' },
      gf_username: { virtual: false, db_table: 'user', db_field: 'username', section: 'leftgroup', type: 'varchar', primary: false, autoIncrement: false, filterOperator: '=' },
      sqltgf_1: { virtual: true, db_table: '', db_field: '', section: 'topgroup', type: 'varchar', primary: false, autoIncrement: false, filterOperator: '=' },
      sqltgf_2: { virtual: true, db_table: '', db_field: '', section: 'topgroup', type: 'varchar', primary: false, autoIncrement: false, filterOperator: '=' }
   },

   fromSql:
      `FROM
         data_send data_send
         LEFT OUTER JOIN data_catalog_data_offerings data_catalog_data_offerings ON data_catalog_data_offerings.id = data_send.data_catalog_data_offerings_id
         LEFT OUTER JOIN data_catalog_business_object data_catalog_business_object ON data_catalog_business_object.id = data_catalog_data_offerings.data_catalog_business_object_id
         LEFT OUTER JOIN data_catalog_service data_catalog_service ON data_catalog_service.id = data_catalog_business_object.data_catalog_service_id
         LEFT OUTER JOIN data_catalog_category data_catalog_category ON data_catalog_category.id = data_catalog_service.data_catalog_category_id
         LEFT OUTER JOIN data_catalog_data_requests data_catalog_data_requests ON data_catalog_data_requests.data_catalog_data_offering_id = data_catalog_data_offerings.id AND data_catalog_data_requests.owner_id = :userid
         LEFT OUTER JOIN user user_offering ON user_offering.id = data_catalog_data_offerings.created_by
         LEFT OUTER JOIN company company_offering ON company_offering.id = user_offering.company_id`,

   getList: async ({ filters, userId }) => {
      const conn = await pool.getConnection();

      try {

         const { whereSql, params } = ModelHelper.buildWhere(module.exports.listFields, filters);
         const orderBySql = ModelHelper.buildOrderBy(module.exports.listFields, filters);

         const [results] = await conn.query(`
         SELECT 
            data_send.id as cf_id
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
            (SELECT CONCAT('<p>', data_catalog_category.id,'</p><span class="min-fields">',data_catalog_category.code,'</span> ',data_catalog_category.name)) as sqlgf_1, 
            count(*) AS total
         ${module.exports.fromSql}
         ${whereSql}
         GROUP BY 
            (SELECT CONCAT('<p>', data_catalog_category.id,'</p><span class="min-fields">',data_catalog_category.code,'</span> ',data_catalog_category.name))`
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
            (SELECT CONCAT('<p>', data_catalog_service.id,'</p><span class="min-fields">',data_catalog_service.code,'</span> ',data_catalog_service.name)) as sqlgf_2, 
            count(*) AS total
         ${module.exports.fromSql}
         ${whereSql}
         GROUP BY 
            (SELECT CONCAT('<p>', data_catalog_service.id,'</p><span class="min-fields">',data_catalog_service.code,'</span> ',data_catalog_service.name))`
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
            (SELECT CONCAT('<p>', data_catalog_business_object.id,'</p><span class="min-fields">',data_catalog_business_object.code,'</span> ',data_catalog_business_object.name)) as sqlgf_3, 
            count(*) AS total
         ${module.exports.fromSql}
         ${whereSql}
         GROUP BY 
            (SELECT CONCAT('<p>', data_catalog_business_object.id,'</p><span class="min-fields">',data_catalog_business_object.code,'</span> ',data_catalog_business_object.name))`
         , params);

         return results;

      } catch (err) {
         throw err;
      } finally {
         conn.release();
      }
   },

   getGfNameList: async ({filters, userId }) => {
      const conn = await pool.getConnection();

      try {

      const { whereSql, params } = ModelHelper.buildWhere(module.exports.listFields, filters);

         const [results] = await conn.query(`
         SELECT 
            company_offering.name as gf_name, 
            count(*) AS total
         ${module.exports.fromSql}
         ${whereSql}
         GROUP BY 
            company_offering.name`
         , params);

         return results;

      } catch (err) {
         throw err;
      } finally {
         conn.release();
      }
   },

   getGfUsernameList: async ({filters, userId }) => {
      const conn = await pool.getConnection();

      try {

      const { whereSql, params } = ModelHelper.buildWhere(module.exports.listFields, filters);

         const [results] = await conn.query(`
         SELECT 
            user_offering.username as gf_username, 
            count(*) AS total
         ${module.exports.fromSql}
         ${whereSql}
         GROUP BY 
            user_offering.username`
         , params);

         return results;

      } catch (err) {
         throw err;
      } finally {
         conn.release();
      }
   }

}

