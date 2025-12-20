const pool = require('../../db');
const ModelHelper = require('../../helpers/ModelHelper');

module.exports = {

   listFields: {
      cf_id: { virtual: false,  db_table: 'vocabulary_keywords',  db_field: 'id',  section: 'column',  type: 'varchar',  primary: true,  autoIncrement: false },
      cf_title: { virtual: false,  db_table: 'vocabulary_keywords',  db_field: 'title',  section: 'column',  type: 'varchar',  primary: false,  autoIncrement: false }
   },

   fromSql:
      `FROM
         vocabulary_keywords vocabulary_keywords`,

   getList: async (filters) => {
      const conn = await pool.getConnection();

      try {

         const { whereSql, params } = ModelHelper.buildWhere(module.exports.listFields, filters);

         const [results] = await conn.query(`
         SELECT 
            vocabulary_keywords.id as cf_id, 
            vocabulary_keywords.title as cf_title
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

