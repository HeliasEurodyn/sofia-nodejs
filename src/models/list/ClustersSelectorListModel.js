const pool = require('../../db');
const ModelHelper = require('../../helpers/ModelHelper');

module.exports = {

   listFields: {
      cf_id: { virtual: false,  db_table: 'cluster',  db_field: 'id',  section: 'column',  type: 'bigint',  primary: true,  autoIncrement: true },
      cf_name: { virtual: false,  db_table: 'cluster',  db_field: 'name',  section: 'column',  type: 'varchar',  primary: false,  autoIncrement: false },
      cf_modified_on: { virtual: false,  db_table: 'cluster',  db_field: 'modified_on',  section: 'column',  type: 'datetime',  primary: false,  autoIncrement: false },
      of_modified_on: { virtual: false,  db_table: 'cluster',  db_field: 'modified_on',  section: 'orderby',  type: 'datetime',  primary: false,  autoIncrement: false }
   },

   fromSql:
      `FROM
         cluster cluster`,

   getList: async (filters) => {
      const conn = await pool.getConnection();

      try {

         const { whereSql, params } = ModelHelper.buildWhere(module.exports.listFields, filters);

         const [results] = await conn.query(`
         SELECT 
            cluster.id as cf_id, 
            cluster.name as cf_name, 
            cluster.modified_on as cf_modified_on
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

