const pool = require('../../db');
const ModelHelper = require('../../helpers/ModelHelper');

module.exports = {

   listFields: {
      cf_id: { virtual: false,  db_table: 'cloud_connector_settings',  db_field: 'id',  section: 'column',  type: 'varchar',  primary: true,  autoIncrement: false },
      cf_name: { virtual: false,  db_table: 'cloud_connector_settings',  db_field: 'name',  section: 'column',  type: 'varchar',  primary: false,  autoIncrement: false },
      cf_handler_url: { virtual: false,  db_table: 'cloud_connector_settings',  db_field: 'handler_url',  section: 'column',  type: 'varchar',  primary: false,  autoIncrement: false }
   },

   fromSql:
      `FROM
         cloud_connector_settings cloud_connector_settings`,

   getList: async (filters) => {
      const conn = await pool.getConnection();

      try {

         const { whereSql, params } = ModelHelper.buildWhere(module.exports.listFields, filters);

         const [results] = await conn.query(`
         SELECT 
            cloud_connector_settings.id as cf_id, 
            cloud_connector_settings.name as cf_name, 
            cloud_connector_settings.handler_url as cf_handler_url
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

