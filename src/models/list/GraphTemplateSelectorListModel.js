const pool = require('../../db');
const ModelHelper = require('../../helpers/ModelHelper');

module.exports = {

   listFields: {
      cf_id: { virtual: false, db_table: 'graph_template', db_field: 'id', section: 'column', type: 'varchar', primary: true, autoIncrement: false, filterOperator: 'like' },
      cf_name: { virtual: false, db_table: 'graph_template', db_field: 'name', section: 'column', type: 'varchar', primary: false, autoIncrement: false, filterOperator: 'like' },
      of_sort_order: { virtual: false, db_table: 'graph_template', db_field: 'sort_order', section: 'orderby', type: 'int', primary: false, autoIncrement: false, filterOperator: '=' }
   },

   fromSql:
      `FROM
         graph_template graph_template`,

   getList: async ({ filters, userId }) => {
      const conn = await pool.getConnection();

      try {

         const { whereSql, params } = ModelHelper.buildWhere(module.exports.listFields, filters);
         const orderBySql = ModelHelper.buildOrderBy(module.exports.listFields, filters);

         const [results] = await conn.query(`
         SELECT 
            graph_template.id as cf_id, 
            graph_template.name as cf_name
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

