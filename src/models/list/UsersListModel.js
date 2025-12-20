const pool = require('../../db');
const ModelHelper = require('../../helpers/ModelHelper');

module.exports = {

   listFields: {
      cf_id: { virtual: false,  db_table: 'user',  db_field: 'id',  section: 'column',  type: 'varchar',  primary: false,  autoIncrement: false },
      cf_email: { virtual: false,  db_table: 'user',  db_field: 'email',  section: 'column',  type: 'varchar',  primary: false,  autoIncrement: false },
      cf_username: { virtual: false,  db_table: 'user',  db_field: 'username',  section: 'column',  type: 'varchar',  primary: false,  autoIncrement: false },
      of_id: { virtual: false,  db_table: 'user',  db_field: 'id',  section: 'orderby',  type: 'varchar',  primary: false,  autoIncrement: false }
   },

   fromSql:
      `FROM
         (SELECT `id`, `username`, `email` FROM `user` )user`,

   getList: async (filters) => {
      const conn = await pool.getConnection();

      try {

         const { whereSql, params } = ModelHelper.buildWhere(module.exports.listFields, filters);

         const [results] = await conn.query(`
         SELECT 
            user.id as cf_id, 
            user.email as cf_email, 
            user.username as cf_username
         ${module.exports.fromSql}
         ${whereSql}`, params);

         return results;

      } catch (err) {
         throw err;
      } finally {
         conn.release();
      }
   }

}

