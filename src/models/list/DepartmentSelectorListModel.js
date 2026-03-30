const pool = require('../../db');
const ModelHelper = require('../../helpers/ModelHelper');

module.exports = {

   listFields: {
      id: { virtual: false, db_table: 'department', db_field: 'id', section: 'column', type: 'bigint', primary: true, autoIncrement: true, filterOperator: '=' },
      title: { virtual: false, db_table: 'department', db_field: 'title', section: 'column', type: 'varchar', primary: false, autoIncrement: false, filterOperator: 'like' },
      description: { virtual: false, db_table: 'department', db_field: 'description', section: 'column', type: 'text', primary: false, autoIncrement: false, filterOperator: 'like' },
      security_impact: { virtual: false, db_table: 'department', db_field: 'security_impact', section: 'column', type: 'text', primary: false, autoIncrement: false, filterOperator: 'like' }
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
            department.id as id, 
            department.title as title, 
            department.description as description, 
            department.security_impact as security_impact
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

