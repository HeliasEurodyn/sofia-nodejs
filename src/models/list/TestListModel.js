const pool = require('../../db');
const ModelHelper = require('../../helpers/ModelHelper');

module.exports = {

   listFields: {
      cf_version: { virtual: false, db_table: 'cpes', db_field: 'version', section: 'column', type: 'varchar', primary: false, autoIncrement: false, filterOperator: 'like' },
      cf_product: { virtual: false, db_table: 'cpes', db_field: 'product', section: 'column', type: 'varchar', primary: false, autoIncrement: false, filterOperator: 'like' }
   },

   fromSql:
      `FROM
         (SELECT ' ' AS cpe, ' ' AS vendor, ' ' AS product, ' ' AS version )cpes`,

   getList: async ({ filters, userId }) => {
      const conn = await pool.getConnection();

      try {

         const { whereSql, params } = ModelHelper.buildWhere(module.exports.listFields, filters);
         const orderBySql = ModelHelper.buildOrderBy(module.exports.listFields, filters);

         const [results] = await conn.query(`
         SELECT 
            cpes.version as cf_version, 
            cpes.product as cf_product
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

