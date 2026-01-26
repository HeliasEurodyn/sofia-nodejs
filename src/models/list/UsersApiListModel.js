const pool = require('../../db');
const ModelHelper = require('../../helpers/ModelHelper');

module.exports = {

   listFields: {
      user_id: { virtual: false, db_table: 'user', db_field: 'id', section: 'column', type: 'varchar', primary: true, autoIncrement: false, filterOperator: 'like' },
      email: { virtual: false, db_table: 'user', db_field: 'email', section: 'column', type: 'varchar', primary: false, autoIncrement: false, filterOperator: 'like' },
      username: { virtual: false, db_table: 'user', db_field: 'username', section: 'column', type: 'varchar', primary: false, autoIncrement: false, filterOperator: 'like' },
      status: { virtual: false, db_table: 'user', db_field: 'status', section: 'column', type: 'varchar', primary: false, autoIncrement: false, filterOperator: 'like' },
      company_id: { virtual: false, db_table: 'user', db_field: 'company_id', section: 'column', type: 'varchar', primary: false, autoIncrement: false, filterOperator: 'like' },
      name: { virtual: false, db_table: 'company', db_field: 'name', section: 'column', type: 'varchar', primary: false, autoIncrement: false, filterOperator: 'like' },
      company_name_grouping: { virtual: false, db_table: 'company', db_field: 'name', section: 'leftgroup', type: 'varchar', primary: false, autoIncrement: false, filterOperator: '=' }
   },

   fromSql:
      `FROM
         user user
         LEFT OUTER JOIN company company ON company.id = user.company_id`,

   getList: async ({ filters, userId }) => {
      const conn = await pool.getConnection();

      try {

         const { whereSql, params } = ModelHelper.buildWhere(module.exports.listFields, filters);
         const orderBySql = ModelHelper.buildOrderBy(module.exports.listFields, filters);

         const [results] = await conn.query(`
         SELECT 
            user.id as user_id, 
            user.email as email, 
            user.username as username, 
            user.status as status, 
            user.company_id as company_id, 
            company.name as name
         ${module.exports.fromSql}
         ${whereSql} ${orderBySql}`, params);

         return results;

      } catch (err) {
         throw err;
      } finally {
         conn.release();
      }
   },

   getCompanyNameGroupingList: async ({filters, userId }) => {
      const conn = await pool.getConnection();

      try {

      const { whereSql, params } = ModelHelper.buildWhere(module.exports.listFields, filters);

         const [results] = await conn.query(`
         SELECT 
            company.name as company_name_grouping, 
            count(*) AS total
         ${module.exports.fromSql}
         ${whereSql}
         GROUP BY 
            company.name`
         , params);

         return results;

      } catch (err) {
         throw err;
      } finally {
         conn.release();
      }
   }

}

