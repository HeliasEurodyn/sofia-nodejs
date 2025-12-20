const pool = require('../../db');
const ModelHelper = require('../../helpers/ModelHelper');

module.exports = {

   listFields: {
      a_id: { virtual: false,  db_table: 'ids_resources',  db_field: 'id',  section: 'column',  type: 'bigint',  primary: true,  autoIncrement: true },
      cf_title: { virtual: false,  db_table: 'ids_resources',  db_field: 'title',  section: 'column',  type: 'varchar',  primary: false,  autoIncrement: false },
      cf_description: { virtual: false,  db_table: 'ids_resources',  db_field: 'description',  section: 'column',  type: 'varchar',  primary: false,  autoIncrement: false },
      cf_source_type: { virtual: false,  db_table: 'ids_resources',  db_field: 'source_type',  section: 'column',  type: 'varchar',  primary: false,  autoIncrement: false },
      cf_policy: { virtual: false,  db_table: 'ids_resources',  db_field: 'policy',  section: 'column',  type: 'varchar',  primary: false,  autoIncrement: false },
      cf_onenet_id: { virtual: false,  db_table: 'ids_resources',  db_field: 'onenet_id',  section: 'column',  type: 'varchar',  primary: false,  autoIncrement: false },
      of_id: { virtual: false,  db_table: 'ids_resources',  db_field: 'id',  section: 'orderby',  type: 'bigint',  primary: true,  autoIncrement: true },
      ft_onenet_type: { virtual: false,  db_table: 'ids_resources',  db_field: 'onenet_type',  section: 'filter',  type: 'varchar',  primary: false,  autoIncrement: false },
      ft_created_by: { virtual: false,  db_table: 'ids_resources',  db_field: 'created_by',  section: 'filter',  type: 'varchar',  primary: false,  autoIncrement: false }
   },

   fromSql:
      `FROM
         ids_resources ids_resources`,

   getList: async (filters) => {
      const conn = await pool.getConnection();

      try {

         const { whereSql, params } = ModelHelper.buildWhere(module.exports.listFields, filters);

         const [results] = await conn.query(`
         SELECT 
            ids_resources.id as a_id, 
            ids_resources.title as cf_title, 
            ids_resources.description as cf_description, 
            ids_resources.source_type as cf_source_type, 
            ids_resources.policy as cf_policy, 
            ids_resources.onenet_id as cf_onenet_id
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

