const pool = require('../../db');
const ModelHelper = require('../../helpers/ModelHelper');

module.exports = {

   listFields: {
      sqlf_7: { virtual: true,  db_table: '',  db_field: '',  section: 'column',  type: 'varchar',  primary: false,  autoIncrement: false },
      cf_username: { virtual: false,  db_table: 'user',  db_field: 'username',  section: 'column',  type: 'varchar',  primary: false,  autoIncrement: false },
      cf_email: { virtual: false,  db_table: 'user',  db_field: 'email',  section: 'column',  type: 'varchar',  primary: false,  autoIncrement: false },
      cf_title: { virtual: false,  db_table: 'data_catalog_business_object_comments',  db_field: 'title',  section: 'column',  type: 'varchar',  primary: false,  autoIncrement: false },
      sqlf_5: { virtual: true,  db_table: '',  db_field: '',  section: 'column',  type: 'varchar',  primary: false,  autoIncrement: false },
      cf_status: { virtual: false,  db_table: 'data_catalog_business_object_comments',  db_field: 'status',  section: 'column',  type: 'varchar',  primary: false,  autoIncrement: false },
      cf_id_2: { virtual: false,  db_table: 'data_catalog_category',  db_field: 'id',  section: 'column',  type: 'varchar',  primary: true,  autoIncrement: false },
      cf_id: { virtual: false,  db_table: 'data_catalog_business_object_comments',  db_field: 'id',  section: 'column',  type: 'varchar',  primary: true,  autoIncrement: false },
      of_created_on: { virtual: false,  db_table: 'data_catalog_business_object_comments',  db_field: 'created_on',  section: 'orderby',  type: 'datetime',  primary: false,  autoIncrement: false }
   },

   fromSql:
      `FROM
         data_catalog_business_object_comments data_catalog_business_object_comments
         LEFT OUTER JOIN (SELECT `id`, `username`, `email` FROM `user` )user ON user.id = data_catalog_business_object_comments.created_by
         LEFT OUTER JOIN data_catalog_business_object data_catalog_business_object ON data_catalog_business_object.id = data_catalog_business_object_comments.data_catalog_business_object_id
         LEFT OUTER JOIN data_catalog_service data_catalog_service ON data_catalog_service.id = data_catalog_business_object.data_catalog_service_id
         LEFT OUTER JOIN data_catalog_category data_catalog_category ON data_catalog_category.id = data_catalog_service.data_catalog_category_id`,

   getList: async (filters) => {
      const conn = await pool.getConnection();

      try {

         const { whereSql, params } = ModelHelper.buildWhere(module.exports.listFields, filters);

         const [results] = await conn.query(`
         SELECT 
            user.username as cf_username, 
            user.email as cf_email, 
            data_catalog_business_object_comments.title as cf_title, 
            data_catalog_business_object_comments.status as cf_status, 
            data_catalog_category.id as cf_id_2, 
            data_catalog_business_object_comments.id as cf_id, 
            (CONCAT('<div class="datec">', date_format(data_catalog_business_object_comments.created_on,'%d/%m/%Y %H:%i'), '</div>')) as sqlf_7, 
            (SELECT CONCAT('<div class="datec">', data_catalog_category.name,' <i class="fa fa-caret-right"></i> ', data_catalog_service.name,' <i class="fa fa-caret-right"></i> ', data_catalog_business_object.name, '</div>')) as sqlf_5
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

