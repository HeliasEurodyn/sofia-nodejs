const pool = require('../../db');
const ModelHelper = require('../../helpers/ModelHelper');

module.exports = {

   listFields: {
      category_id: { virtual: false,  db_table: 'data_catalog_category',  db_field: 'id',  section: 'column',  type: 'varchar',  primary: true,  autoIncrement: false },
      code: { virtual: false,  db_table: 'data_catalog_category',  db_field: 'code',  section: 'column',  type: 'varchar',  primary: false,  autoIncrement: false },
      name: { virtual: false,  db_table: 'data_catalog_category',  db_field: 'name',  section: 'column',  type: 'varchar',  primary: false,  autoIncrement: false },
      of_id: { virtual: false,  db_table: 'data_catalog_category',  db_field: 'id',  section: 'orderby',  type: 'varchar',  primary: true,  autoIncrement: false }
   },

   fromSql:
      `FROM
         data_catalog_category data_catalog_category`,

   getList: async (filters) => {
      const conn = await pool.getConnection();

      try {

         const { whereSql, params } = ModelHelper.buildWhere(module.exports.listFields, filters);

         const [results] = await conn.query(`
         SELECT 
            data_catalog_category.id as category_id, 
            data_catalog_category.code as code, 
            data_catalog_category.name as name
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

