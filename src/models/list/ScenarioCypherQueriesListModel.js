const pool = require('../../db');
const ModelHelper = require('../../helpers/ModelHelper');

module.exports = {

   listFields: {
      cf_id: { virtual: false, db_table: 'cypher_query_template', db_field: 'id', section: 'column', type: 'varchar', primary: true, autoIncrement: false, filterOperator: 'like' },
      cf_name: { virtual: false, db_table: 'cypher_query_template', db_field: 'name', section: 'column', type: 'varchar', primary: false, autoIncrement: false, filterOperator: 'like' },
      cf_node_query: { virtual: false, db_table: 'cypher_query_template', db_field: 'node_query', section: 'column', type: 'text', primary: false, autoIncrement: false, filterOperator: 'like' },
      cf_relathionship_query: { virtual: false, db_table: 'cypher_query_template', db_field: 'relathionship_query', section: 'column', type: 'text', primary: false, autoIncrement: false, filterOperator: 'like' },
      cf_sort_order: { virtual: false, db_table: 'cypher_query_template', db_field: 'sort_order', section: 'column', type: 'int', primary: false, autoIncrement: false, filterOperator: '=' },
      cf_is_default: { virtual: false, db_table: 'cypher_query_template', db_field: 'is_default', section: 'column', type: 'int', primary: false, autoIncrement: false, filterOperator: '=' },
      cf_cypher_query_template_type: { virtual: false, db_table: 'cypher_query_template', db_field: 'cypher_query_template_type', section: 'column', type: 'varchar', primary: false, autoIncrement: false, filterOperator: 'like' },
      of_sort_order: { virtual: false, db_table: 'cypher_query_template', db_field: 'sort_order', section: 'orderby', type: 'int', primary: false, autoIncrement: false, filterOperator: '=' },
      ft_cypher_query_template_type: { virtual: false, db_table: 'cypher_query_template', db_field: 'cypher_query_template_type', section: 'filter', type: 'varchar', primary: false, autoIncrement: false, filterOperator: '=' }
   },

   fromSql:
      `FROM
         cypher_query_template cypher_query_template`,

   getList: async ({ filters, userId }) => {
      const conn = await pool.getConnection();

      try {

         const { whereSql, params } = ModelHelper.buildWhere(module.exports.listFields, filters);
         const orderBySql = ModelHelper.buildOrderBy(module.exports.listFields, filters);

         const [results] = await conn.query(`
         SELECT 
            cypher_query_template.id as cf_id, 
            cypher_query_template.name as cf_name, 
            cypher_query_template.node_query as cf_node_query, 
            cypher_query_template.relathionship_query as cf_relathionship_query, 
            cypher_query_template.sort_order as cf_sort_order, 
            cypher_query_template.is_default as cf_is_default, 
            cypher_query_template.cypher_query_template_type as cf_cypher_query_template_type
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

