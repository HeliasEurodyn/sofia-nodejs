const pool = require('../../db');
const ModelHelper = require('../../helpers/ModelHelper');

module.exports = {

   listFields: {
      cf_id: { virtual: false,  db_table: 'service',  db_field: 'id',  section: 'column',  type: 'varchar',  primary: true,  autoIncrement: false },
      cf_title: { virtual: false,  db_table: 'service',  db_field: 'title',  section: 'column',  type: 'varchar',  primary: false,  autoIncrement: false },
      cf_data_sharing_method: { virtual: false,  db_table: 'service',  db_field: 'data_sharing_method',  section: 'column',  type: 'varchar',  primary: false,  autoIncrement: false },
      cf_type: { virtual: false,  db_table: 'service',  db_field: 'type',  section: 'column',  type: 'varchar',  primary: false,  autoIncrement: false },
      sql_business_tags: { virtual: true,  db_table: '',  db_field: '',  section: 'column',  type: 'varchar',  primary: false,  autoIncrement: false },
      sql_process_tags: { virtual: true,  db_table: '',  db_field: '',  section: 'column',  type: 'varchar',  primary: false,  autoIncrement: false },
      cf_user_profile: { virtual: false,  db_table: 'service',  db_field: 'user_profile',  section: 'column',  type: 'int',  primary: false,  autoIncrement: false },
      cf_energy_profile: { virtual: false,  db_table: 'service',  db_field: 'energy_profile',  section: 'column',  type: 'int',  primary: false,  autoIncrement: false },
      cf_building_profile: { virtual: false,  db_table: 'service',  db_field: 'building_profile',  section: 'column',  type: 'int',  primary: false,  autoIncrement: false },
      sql_vocabulary_keywords: { virtual: true,  db_table: '',  db_field: '',  section: 'column',  type: 'varchar',  primary: false,  autoIncrement: false },
      cf_sharing_type: { virtual: false,  db_table: 'service',  db_field: 'sharing_type',  section: 'column',  type: 'varchar',  primary: false,  autoIncrement: false }
   },

   fromSql:
      `FROM
         service service`,

   getList: async (filters) => {
      const conn = await pool.getConnection();

      try {

         const { whereSql, params } = ModelHelper.buildWhere(module.exports.listFields, filters);

         const [results] = await conn.query(`
         SELECT 
            service.id as cf_id, 
            service.title as cf_title, 
            service.data_sharing_method as cf_data_sharing_method, 
            service.type as cf_type, 
            service.user_profile as cf_user_profile, 
            service.energy_profile as cf_energy_profile, 
            service.building_profile as cf_building_profile, 
            service.sharing_type as cf_sharing_type, 
            ( SELECT JSON_ARRAYAGG(bt.title) FROM service_business_tag sbt INNER JOIN business_tag bt ON sbt.business_tag_id = bt.id WHERE sbt.service_id = service.id) as sql_business_tags, 
            ( SELECT JSON_ARRAYAGG(bt.title) FROM service_process_tag sbt INNER JOIN process_tag bt ON sbt.process_tag_id = bt.id WHERE sbt.service_id = service.id) as sql_process_tags, 
            ( SELECT JSON_ARRAYAGG(bt.title) FROM service_vocabulary_keyword sbt INNER JOIN vocabulary_keywords bt ON sbt.vocabulary_keyword_id = bt.id WHERE sbt.service_id = service.id) as sql_vocabulary_keywords
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

