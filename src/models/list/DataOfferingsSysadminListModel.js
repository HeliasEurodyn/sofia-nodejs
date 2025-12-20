const pool = require('../../db');
const ModelHelper = require('../../helpers/ModelHelper');

module.exports = {

   listFields: {
      cf_id: { virtual: false,  db_table: 'data_catalog_data_offerings',  db_field: 'id',  section: 'column',  type: 'varchar',  primary: true,  autoIncrement: false },
      sqlf_10: { virtual: true,  db_table: '',  db_field: '',  section: 'column',  type: 'varchar',  primary: false,  autoIncrement: false },
      sqlf_11: { virtual: true,  db_table: '',  db_field: '',  section: 'column',  type: 'varchar',  primary: false,  autoIncrement: false },
      sqlf_9: { virtual: true,  db_table: '',  db_field: '',  section: 'column',  type: 'varchar',  primary: false,  autoIncrement: false },
      cf_username: { virtual: false,  db_table: 'user',  db_field: 'username',  section: 'column',  type: 'varchar',  primary: false,  autoIncrement: false },
      cf_name: { virtual: false,  db_table: 'company',  db_field: 'name',  section: 'column',  type: 'varchar',  primary: false,  autoIncrement: false },
      cf_input_profile: { virtual: false,  db_table: 'data_catalog_data_offerings',  db_field: 'input_profile',  section: 'column',  type: 'varchar',  primary: false,  autoIncrement: false },
      cf_input_data_source: { virtual: false,  db_table: 'data_catalog_data_offerings',  db_field: 'input_data_source',  section: 'column',  type: 'varchar',  primary: false,  autoIncrement: false },
      cf_id_1: { virtual: false,  db_table: 'data_catalog_service',  db_field: 'id',  section: 'column',  type: 'varchar',  primary: true,  autoIncrement: false },
      cf_id_2: { virtual: false,  db_table: 'data_catalog_category',  db_field: 'id',  section: 'column',  type: 'varchar',  primary: true,  autoIncrement: false },
      cf_email: { virtual: false,  db_table: 'user',  db_field: 'email',  section: 'column',  type: 'varchar',  primary: false,  autoIncrement: false },
      of_created_on: { virtual: false,  db_table: 'data_catalog_data_offerings',  db_field: 'created_on',  section: 'orderby',  type: 'datetime',  primary: false,  autoIncrement: false },
      ft_id: { virtual: false,  db_table: 'data_catalog_category',  db_field: 'id',  section: 'filter',  type: 'varchar',  primary: true,  autoIncrement: false },
      ft_id_1: { virtual: false,  db_table: 'data_catalog_service',  db_field: 'id',  section: 'filter',  type: 'varchar',  primary: true,  autoIncrement: false },
      ft_data_catalog_business_object_id: { virtual: false,  db_table: 'data_catalog_data_offerings',  db_field: 'data_catalog_business_object_id',  section: 'filter',  type: 'bigint',  primary: false,  autoIncrement: false },
      ft_created_by: { virtual: false,  db_table: 'data_catalog_data_offerings',  db_field: 'created_by',  section: 'filter',  type: 'varchar',  primary: false,  autoIncrement: false },
      ft_created_on: { virtual: false,  db_table: 'data_catalog_data_offerings',  db_field: 'created_on',  section: 'filter',  type: 'datetime',  primary: false,  autoIncrement: false },
      ft_created_on_1: { virtual: false,  db_table: 'data_catalog_data_offerings',  db_field: 'created_on',  section: 'filter',  type: 'datetime',  primary: false,  autoIncrement: false },
      sqlgf_1: { virtual: true,  db_table: '',  db_field: '',  section: 'leftgroup',  type: 'varchar',  primary: false,  autoIncrement: false },
      sqlgf_2: { virtual: true,  db_table: '',  db_field: '',  section: 'leftgroup',  type: 'varchar',  primary: false,  autoIncrement: false },
      sqlgf_3: { virtual: true,  db_table: '',  db_field: '',  section: 'leftgroup',  type: 'varchar',  primary: false,  autoIncrement: false },
      sqlgf_4: { virtual: true,  db_table: '',  db_field: '',  section: 'leftgroup',  type: 'varchar',  primary: false,  autoIncrement: false }
   },

   fromSql:
      `FROM
         data_catalog_data_offerings data_catalog_data_offerings
         LEFT OUTER JOIN data_catalog_business_object data_catalog_business_object ON data_catalog_business_object.id = data_catalog_data_offerings.data_catalog_business_object_id
         LEFT OUTER JOIN data_catalog_service data_catalog_service ON data_catalog_service.id = data_catalog_business_object.data_catalog_service_id
         LEFT OUTER JOIN data_catalog_category data_catalog_category ON data_catalog_category.id = data_catalog_service.data_catalog_category_id
         LEFT OUTER JOIN (SELECT `id`, `username`, `email` FROM `user` )user_1_1 ON user_1_1.id = data_catalog_data_offerings.created_by
         LEFT OUTER JOIN user user ON user.id = data_catalog_data_offerings.created_by
         LEFT OUTER JOIN company company ON company.id = user.company_id`,

   getList: async (filters) => {
      const conn = await pool.getConnection();

      try {

         const { whereSql, params } = ModelHelper.buildWhere(module.exports.listFields, filters);

         const [results] = await conn.query(`
         SELECT 
            data_catalog_data_offerings.id as cf_id, 
            user_1_1.username as cf_username, 
            company.name as cf_name, 
            data_catalog_data_offerings.input_profile as cf_input_profile, 
            data_catalog_data_offerings.input_data_source as cf_input_data_source, 
            data_catalog_service.id as cf_id_1, 
            data_catalog_category.id as cf_id_2, 
            user_1_1.email as cf_email, 
            (SELECT CONCAT(data_catalog_category.name,' <i class="fa fa-caret-right"></i> ', data_catalog_service.name,' <i class="fa fa-caret-right"></i> ', data_catalog_business_object.name)) as sqlf_10, 
            (SELECT CONCAT(company.name,' <i class="fa fa-caret-right"></i> ', user.username)) as sqlf_11, 
            (date_format(data_catalog_data_offerings.created_on,'%d/%m/%Y %H:%i')) as sqlf_9
         ${module.exports.fromSql}
         ${whereSql}`, params);

         return results;

      } catch (err) {
         throw err;
      } finally {
         conn.release();
      }
   },

   getSqlgf1List: async (filters) => {
      const conn = await pool.getConnection();

      try {

      const { whereSql, params } = ModelHelper.buildWhere(module.exports.listFields, filters);

         const [results] = await conn.query(`
         SELECT 
            (SELECT CONCAT(data_catalog_category.code,' - ', data_catalog_category.name)) as sqlgf_1, 
            count(*) AS total
         ${module.exports.fromSql}
         ${whereSql}
         GROUP BY 
            (SELECT CONCAT(data_catalog_category.code,' - ', data_catalog_category.name))`
         , params);

         return results;

      } catch (err) {
         throw err;
      } finally {
         conn.release();
      }
   },

   getSqlgf2List: async (filters) => {
      const conn = await pool.getConnection();

      try {

      const { whereSql, params } = ModelHelper.buildWhere(module.exports.listFields, filters);

         const [results] = await conn.query(`
         SELECT 
            (SELECT CONCAT(data_catalog_service.code,' - ',data_catalog_service.name)) as sqlgf_2, 
            count(*) AS total
         ${module.exports.fromSql}
         ${whereSql}
         GROUP BY 
            (SELECT CONCAT(data_catalog_service.code,' - ',data_catalog_service.name))`
         , params);

         return results;

      } catch (err) {
         throw err;
      } finally {
         conn.release();
      }
   },

   getSqlgf3List: async (filters) => {
      const conn = await pool.getConnection();

      try {

      const { whereSql, params } = ModelHelper.buildWhere(module.exports.listFields, filters);

         const [results] = await conn.query(`
         SELECT 
            (SELECT CONCAT(data_catalog_business_object.code,' - ', data_catalog_business_object.name)) as sqlgf_3, 
            count(*) AS total
         ${module.exports.fromSql}
         ${whereSql}
         GROUP BY 
            (SELECT CONCAT(data_catalog_business_object.code,' - ', data_catalog_business_object.name))`
         , params);

         return results;

      } catch (err) {
         throw err;
      } finally {
         conn.release();
      }
   },

   getSqlgf4List: async (filters) => {
      const conn = await pool.getConnection();

      try {

      const { whereSql, params } = ModelHelper.buildWhere(module.exports.listFields, filters);

         const [results] = await conn.query(`
         SELECT 
            (SELECT CONCAT(user.username,' - ', company.name)) as sqlgf_4, 
            count(*) AS total
         ${module.exports.fromSql}
         ${whereSql}
         GROUP BY 
            (SELECT CONCAT(user.username,' - ', company.name))`
         , params);

         return results;

      } catch (err) {
         throw err;
      } finally {
         conn.release();
      }
   }

}

