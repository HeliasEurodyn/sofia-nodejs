const pool = require('../../db');
const ModelHelper = require('../../helpers/ModelHelper');

module.exports = {

   listFields: {
      cf_files_total: { virtual: false, db_table: 'date_users_transuctions', db_field: 'files_total', section: 'column', type: 'bigint', primary: false, autoIncrement: false, filterOperator: '=' },
      of_created_on: { virtual: false, db_table: 'date_users_transuctions', db_field: 'created_on', section: 'orderby', type: 'date', primary: false, autoIncrement: false, filterOperator: '=' },
      gf_provider: { virtual: false, db_table: 'date_users_transuctions', db_field: 'provider', section: 'leftgroup', type: 'text', primary: false, autoIncrement: false, filterOperator: '=' },
      gf_offering_title: { virtual: false, db_table: 'date_users_transuctions', db_field: 'offering_title', section: 'leftgroup', type: 'varchar', primary: false, autoIncrement: false, filterOperator: '=' },
      tgf_consumer: { virtual: false, db_table: 'date_users_transuctions', db_field: 'consumer', section: 'topgroup', type: 'text', primary: false, autoIncrement: false, filterOperator: '=' },
      sqltgf_2: { virtual: true, db_table: '', db_field: '', section: 'topgroup', type: 'varchar', primary: false, autoIncrement: false, filterOperator: '=' }
   },

   fromSql:
      `FROM
         (SELECT (SELECT CONCAT( IF(cr.id IS NOT NULL, CONCAT(cr.name, ' <i class="fa fa-caret-right"></i> '), ''), ur.username ) AS name FROM user ur LEFT JOIN company cr ON cr.id = ur.company_id WHERE ur.id = tc.subscription_user ) AS consumer, (SELECT CONCAT( IF(cr.id IS NOT NULL, CONCAT(cr.name, ' <i class="fa fa-caret-right"></i> '), ''), ur.username ) AS name FROM user ur LEFT JOIN company cr ON cr.id = ur.company_id WHERE ur.id = tc.provide_user ) AS provider, tc.created_on, tc.offering_title, tc.files_total FROM (SELECT COUNT(p.id) AS files_total, DATE(p.created_on) AS created_on, s.subscription_user, p.provide_user, so.title as offering_title FROM provide_data p INNER JOIN service_offering so ON p.service_offering_id = so.id INNER JOIN subscription s ON s.offering_id = so.id WHERE s.status = 'accept' GROUP BY DATE(p.created_on), s.subscription_user, p.provide_user,so.title ORDER BY DATE(p.created_on) DESC ) tc )date_users_transuctions`,

   getList: async ({ filters, userId }) => {
      const conn = await pool.getConnection();

      try {

         const { whereSql, params } = ModelHelper.buildWhere(module.exports.listFields, filters);
         const orderBySql = ModelHelper.buildOrderBy(module.exports.listFields, filters);

         const [results] = await conn.query(`
         SELECT 
            date_users_transuctions.files_total as cf_files_total
         ${module.exports.fromSql}
         ${whereSql} ${orderBySql}`, params);

         return results;

      } catch (err) {
         throw err;
      } finally {
         conn.release();
      }
   },

   getGfProviderList: async ({filters, userId }) => {
      const conn = await pool.getConnection();

      try {

      const { whereSql, params } = ModelHelper.buildWhere(module.exports.listFields, filters);

         const [results] = await conn.query(`
         SELECT 
            date_users_transuctions.provider as gf_provider, 
            count(*) AS total
         ${module.exports.fromSql}
         ${whereSql}
         GROUP BY 
            date_users_transuctions.provider`
         , params);

         return results;

      } catch (err) {
         throw err;
      } finally {
         conn.release();
      }
   },

   getGfOfferingTitleList: async ({filters, userId }) => {
      const conn = await pool.getConnection();

      try {

      const { whereSql, params } = ModelHelper.buildWhere(module.exports.listFields, filters);

         const [results] = await conn.query(`
         SELECT 
            date_users_transuctions.offering_title as gf_offering_title, 
            count(*) AS total
         ${module.exports.fromSql}
         ${whereSql}
         GROUP BY 
            date_users_transuctions.offering_title`
         , params);

         return results;

      } catch (err) {
         throw err;
      } finally {
         conn.release();
      }
   }

}

