const pool = require('../../db');
const ModelHelper = require('../../helpers/ModelHelper');

module.exports = {

   listFields: {
      id: { virtual: false,  db_table: 'data_catalog_data_offerings',  db_field: 'id',  section: 'column',  type: 'varchar',  primary: true,  autoIncrement: false },
      file_schema: { virtual: false,  db_table: 'data_catalog_data_offerings',  db_field: 'file_schema',  section: 'column',  type: 'longtext',  primary: false,  autoIncrement: false },
      file_schema_filename: { virtual: false,  db_table: 'data_catalog_data_offerings',  db_field: 'file_schema_filename',  section: 'column',  type: 'varchar',  primary: false,  autoIncrement: false },
      file_schema_sample: { virtual: false,  db_table: 'data_catalog_data_offerings',  db_field: 'file_schema_sample',  section: 'column',  type: 'longtext',  primary: false,  autoIncrement: false },
      file_schema_sample_filename: { virtual: false,  db_table: 'data_catalog_data_offerings',  db_field: 'file_schema_sample_filename',  section: 'column',  type: 'varchar',  primary: false,  autoIncrement: false },
      profile_description: { virtual: false,  db_table: 'data_catalog_data_offerings',  db_field: 'profile_description',  section: 'column',  type: 'varchar',  primary: false,  autoIncrement: false },
      profile_format: { virtual: false,  db_table: 'data_catalog_data_offerings',  db_field: 'input_profile',  section: 'column',  type: 'varchar',  primary: false,  autoIncrement: false },
      data_catalog_business_object_id: { virtual: false,  db_table: 'data_catalog_business_object',  db_field: 'id',  section: 'column',  type: 'varchar',  primary: true,  autoIncrement: false },
      data_catalog_business_object_code: { virtual: false,  db_table: 'data_catalog_business_object',  db_field: 'code',  section: 'column',  type: 'varchar',  primary: false,  autoIncrement: false },
      data_catalog_business_object_name: { virtual: false,  db_table: 'data_catalog_business_object',  db_field: 'name',  section: 'column',  type: 'varchar',  primary: false,  autoIncrement: false },
      data_catalog_service_id: { virtual: false,  db_table: 'data_catalog_service',  db_field: 'id',  section: 'column',  type: 'varchar',  primary: true,  autoIncrement: false },
      data_catalog_service_code: { virtual: false,  db_table: 'data_catalog_service',  db_field: 'code',  section: 'column',  type: 'varchar',  primary: false,  autoIncrement: false },
      data_catalog_category_id: { virtual: false,  db_table: 'data_catalog_category',  db_field: 'id',  section: 'column',  type: 'varchar',  primary: true,  autoIncrement: false },
      data_catalog_category_code: { virtual: false,  db_table: 'data_catalog_category',  db_field: 'code',  section: 'column',  type: 'varchar',  primary: false,  autoIncrement: false },
      title: { virtual: false,  db_table: 'data_catalog_data_offerings',  db_field: 'title',  section: 'column',  type: 'varchar',  primary: false,  autoIncrement: false },
      of_created_on: { virtual: false,  db_table: 'data_catalog_data_offerings',  db_field: 'created_on',  section: 'orderby',  type: 'datetime',  primary: false,  autoIncrement: false },
      ft_created_by: { virtual: false,  db_table: 'data_catalog_data_offerings',  db_field: 'created_by',  section: 'filter',  type: 'varchar',  primary: false,  autoIncrement: false }
   },

   fromSql:
      `FROM
         data_catalog_data_offerings data_catalog_data_offerings
         LEFT OUTER JOIN data_catalog_business_object data_catalog_business_object ON data_catalog_business_object.id = data_catalog_data_offerings.data_catalog_business_object_id
         LEFT OUTER JOIN data_catalog_service data_catalog_service ON data_catalog_service.id = data_catalog_business_object.data_catalog_service_id
         LEFT OUTER JOIN data_catalog_category data_catalog_category ON data_catalog_category.id = data_catalog_service.data_catalog_category_id`,

   getList: async (filters) => {
      const conn = await pool.getConnection();

      try {

         const { whereSql, params } = ModelHelper.buildWhere(module.exports.listFields, filters);

         const [results] = await conn.query(`
         SELECT 
            data_catalog_data_offerings.id as id, 
            data_catalog_data_offerings.file_schema as file_schema, 
            data_catalog_data_offerings.file_schema_filename as file_schema_filename, 
            data_catalog_data_offerings.file_schema_sample as file_schema_sample, 
            data_catalog_data_offerings.file_schema_sample_filename as file_schema_sample_filename, 
            data_catalog_data_offerings.profile_description as profile_description, 
            data_catalog_data_offerings.input_profile as profile_format, 
            data_catalog_business_object.id as data_catalog_business_object_id, 
            data_catalog_business_object.code as data_catalog_business_object_code, 
            data_catalog_business_object.name as data_catalog_business_object_name, 
            data_catalog_service.id as data_catalog_service_id, 
            data_catalog_service.code as data_catalog_service_code, 
            data_catalog_category.id as data_catalog_category_id, 
            data_catalog_category.code as data_catalog_category_code, 
            data_catalog_data_offerings.title as title
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

