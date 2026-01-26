const pool = require('../../db');
const ModelHelper = require('../../helpers/ModelHelper');

module.exports = {

   listFields: {
      cf_id: { virtual: false, db_table: 'market', db_field: 'id', section: 'column', type: 'bigint', primary: true, autoIncrement: true, filterOperator: '=' },
      cf_name: { virtual: false, db_table: 'market', db_field: 'name', section: 'column', type: 'varchar', primary: false, autoIncrement: false, filterOperator: 'like' },
      cf_modified_on: { virtual: false, db_table: 'market', db_field: 'modified_on', section: 'column', type: 'datetime', primary: false, autoIncrement: false, filterOperator: '=' },
      of_modified_on: { virtual: false, db_table: 'market', db_field: 'modified_on', section: 'orderby', type: 'datetime', primary: false, autoIncrement: false, filterOperator: '=' }
   },

   fromSql:
      `FROM
         market market`,

   getList: async ({ filters, userId }) => {
      const conn = await pool.getConnection();

      try {

         const { whereSql, params } = ModelHelper.buildWhere(module.exports.listFields, filters);
         const orderBySql = ModelHelper.buildOrderBy(module.exports.listFields, filters);

         const [results] = await conn.query(`
         SELECT 
            market.id as cf_id, 
            market.name as cf_name, 
            market.modified_on as cf_modified_on
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

