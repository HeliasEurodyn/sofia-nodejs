const pool = require('../../db');
const ModelHelper = require('../../helpers/ModelHelper');

module.exports = {

   listFields: {
      cf_id: { virtual: false, db_table: 'department', db_field: 'id', section: 'column', type: 'bigint', primary: true, autoIncrement: true, filterOperator: '=' },
      cf_title: { virtual: false, db_table: 'department', db_field: 'title', section: 'column', type: 'varchar', primary: false, autoIncrement: false, filterOperator: 'like' },
      cf_description: { virtual: false, db_table: 'department', db_field: 'description', section: 'column', type: 'text', primary: false, autoIncrement: false, filterOperator: 'like' },
      cf_security_impact: { virtual: false, db_table: 'department', db_field: 'security_impact', section: 'column', type: 'text', primary: false, autoIncrement: false, filterOperator: 'like' }
   },

   fromSql:
      `FROM
         department department`,

   getList: async ({ filters, userId }) => {
      const conn = await pool.getConnection();

      try {

         const { whereSql, params } = ModelHelper.buildWhere(module.exports.listFields, filters);
         const orderBySql = ModelHelper.buildOrderBy(module.exports.listFields, filters);

         const [results] = await conn.query(`
         SELECT 
            department.id as cf_id, 
            department.title as cf_title, 
            department.description as cf_description, 
            department.security_impact as cf_security_impact
         ${module.exports.fromSql}
         ${whereSql} ${orderBySql}`, params);

         return results;

      } catch (err) {
         throw err;
      } finally {
         conn.release();
      }
   }

}

