const pool = require('../../db');
const ModelHelper = require('../../helpers/ModelHelper');

module.exports = {

   listFields: {
      a_id: { virtual: false, db_table: 'ids_resources', db_field: 'id', section: 'column', type: 'bigint', primary: true, autoIncrement: true, filterOperator: '=' },
      cf_title: { virtual: false, db_table: 'ids_resources', db_field: 'title', section: 'column', type: 'varchar', primary: false, autoIncrement: false, filterOperator: 'like' },
      cf_description: { virtual: false, db_table: 'ids_resources', db_field: 'description', section: 'column', type: 'varchar', primary: false, autoIncrement: false, filterOperator: 'like' },
      cf_source_type: { virtual: false, db_table: 'ids_resources', db_field: 'source_type', section: 'column', type: 'varchar', primary: false, autoIncrement: false, filterOperator: 'like' },
      cf_policy: { virtual: false, db_table: 'ids_resources', db_field: 'policy', section: 'column', type: 'varchar', primary: false, autoIncrement: false, filterOperator: 'like' },
      cf_onenet_id: { virtual: false, db_table: 'ids_resources', db_field: 'onenet_id', section: 'column', type: 'varchar', primary: false, autoIncrement: false, filterOperator: 'like' },
      of_id: { virtual: false, db_table: 'ids_resources', db_field: 'id', section: 'orderby', type: 'bigint', primary: true, autoIncrement: true, filterOperator: '=' },
      ft_onenet_type: { virtual: false, db_table: 'ids_resources', db_field: 'onenet_type', section: 'filter', type: 'varchar', primary: false, autoIncrement: false, filterOperator: 'like' },
      ft_created_by: { virtual: false, db_table: 'ids_resources', db_field: 'created_by', section: 'filter', type: 'varchar', primary: false, autoIncrement: false, filterOperator: 'like' }
   },

   fromSql:
      `FROM
         ids_resources ids_resources`,

   getList: async ({ filters, userId }) => {
      const conn = await pool.getConnection();

      try {

         const { whereSql, params } = ModelHelper.buildWhere(module.exports.listFields, filters);
         const orderBySql = ModelHelper.buildOrderBy(module.exports.listFields, filters);

         const [results] = await conn.query(`
         SELECT 
            ids_resources.id as a_id, 
            ids_resources.title as cf_title, 
            ids_resources.description as cf_description, 
            ids_resources.source_type as cf_source_type, 
            ids_resources.policy as cf_policy, 
            ids_resources.onenet_id as cf_onenet_id
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

