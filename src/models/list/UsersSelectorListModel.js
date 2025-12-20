const pool = require('../../db');
const ModelHelper = require('../../helpers/ModelHelper');

module.exports = {

   listFields: {
      cf_id: { virtual: false,  db_table: 'user',  db_field: 'id',  section: 'column',  type: 'varchar',  primary: true,  autoIncrement: false },
      cf_email: { virtual: false,  db_table: 'user',  db_field: 'email',  section: 'column',  type: 'varchar',  primary: false,  autoIncrement: false },
      cf_username: { virtual: false,  db_table: 'user',  db_field: 'username',  section: 'column',  type: 'varchar',  primary: false,  autoIncrement: false },
      cf_status: { virtual: false,  db_table: 'user',  db_field: 'status',  section: 'column',  type: 'varchar',  primary: false,  autoIncrement: false },
      cf_company_id: { virtual: false,  db_table: 'user',  db_field: 'company_id',  section: 'column',  type: 'varchar',  primary: false,  autoIncrement: false },
      cf_name: { virtual: false,  db_table: 'company',  db_field: 'name',  section: 'column',  type: 'varchar',  primary: false,  autoIncrement: false },
      gf_name: { virtual: false,  db_table: 'company',  db_field: 'name',  section: 'leftgroup',  type: 'varchar',  primary: false,  autoIncrement: false }
   },

   fromSql:
      `FROM
         user user
         LEFT OUTER JOIN company company ON company.id = user.company_id`,

   getList: async (filters) => {
      const conn = await pool.getConnection();

      try {

         const { whereSql, params } = ModelHelper.buildWhere(module.exports.listFields, filters);

         const [results] = await conn.query(`
         SELECT 
            user.id as cf_id, 
            user.email as cf_email, 
            user.username as cf_username, 
            user.status as cf_status, 
            user.company_id as cf_company_id, 
            company.name as cf_name
         ${module.exports.fromSql}
         ${whereSql}`, params);

         return results;

      } catch (err) {
         throw err;
      } finally {
         conn.release();
      }
   },

   getGfNameList: async (filters) => {
      const conn = await pool.getConnection();

      try {

      const { whereSql, params } = ModelHelper.buildWhere(module.exports.listFields, filters);

         const [results] = await conn.query(`
         SELECT 
            company.name as gf_name, 
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

