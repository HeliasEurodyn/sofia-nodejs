const pool = require('../../db');
const ModelHelper = require('../../helpers/ModelHelper');

module.exports = {

   listFields: {
      cf_id: { virtual: false,  db_table: 'company',  db_field: 'id',  section: 'column',  type: 'varchar',  primary: true,  autoIncrement: false },
      cf_name: { virtual: false,  db_table: 'company',  db_field: 'name',  section: 'column',  type: 'varchar',  primary: false,  autoIncrement: false },
      cf_address: { virtual: false,  db_table: 'company',  db_field: 'address',  section: 'column',  type: 'varchar',  primary: false,  autoIncrement: false },
      cf_phone: { virtual: false,  db_table: 'company',  db_field: 'phone',  section: 'column',  type: 'varchar',  primary: false,  autoIncrement: false },
      of_created_on: { virtual: false,  db_table: 'company',  db_field: 'created_on',  section: 'orderby',  type: 'datetime',  primary: false,  autoIncrement: false }
   },

   fromSql:
      `FROM
         company company`,

   getList: async (filters) => {
      const conn = await pool.getConnection();

      try {

         const { whereSql, params } = ModelHelper.buildWhere(module.exports.listFields, filters);

         const [results] = await conn.query(`
         SELECT 
            company.id as cf_id, 
            company.name as cf_name, 
            company.address as cf_address, 
            company.phone as cf_phone
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

