const pool = require('../../db');
const ModelHelper = require('../../helpers/ModelHelper');

module.exports = {

   listFields: {
      type: { virtual: false, db_table: 'relathionship_type', db_field: 'type', section: 'column', type: 'varchar', primary: true, autoIncrement: false, filterOperator: 'like' },
      propagation: { virtual: false, db_table: 'relathionship_type', db_field: 'propagation', section: 'column', type: 'double', primary: false, autoIncrement: false, filterOperator: '=' },
      of_sort_order: { virtual: false, db_table: 'relathionship_type', db_field: 'sort_order', section: 'orderby', type: 'bigint', primary: false, autoIncrement: false, filterOperator: '=' }
   },

   fromSql:
      `FROM
         relathionship_type relathionship_type`,

   getList: async ({ filters, userId }) => {
      const conn = await pool.getConnection();

      try {

         const { whereSql, params } = ModelHelper.buildWhere(module.exports.listFields, filters);
         const orderBySql = ModelHelper.buildOrderBy(module.exports.listFields, filters);

         const [results] = await conn.query(`
         SELECT 
            relathionship_type.type as type, 
            relathionship_type.propagation as propagation
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

