const pool = require('../../db');
const ModelHelper = require('../../helpers/ModelHelper');

module.exports = {

   listFields: {
      cf_id: { virtual: false,  db_table: 'data_catalog_data_requests',  db_field: 'id',  section: 'column',  type: 'varchar',  primary: true,  autoIncrement: false },
      sqlf_4: { virtual: true,  db_table: '',  db_field: '',  section: 'column',  type: 'varchar',  primary: false,  autoIncrement: false },
      sqlf_6: { virtual: true,  db_table: '',  db_field: '',  section: 'column',  type: 'varchar',  primary: false,  autoIncrement: false },
      sqlf_9: { virtual: true,  db_table: '',  db_field: '',  section: 'column',  type: 'varchar',  primary: false,  autoIncrement: false },
      sqlf_8: { virtual: true,  db_table: '',  db_field: '',  section: 'column',  type: 'varchar',  primary: false,  autoIncrement: false },
      cf_status: { virtual: false,  db_table: 'data_catalog_data_requests',  db_field: 'status',  section: 'column',  type: 'varchar',  primary: false,  autoIncrement: false },
      cf_input_profile: { virtual: false,  db_table: 'data_catalog_data_requests',  db_field: 'input_profile',  section: 'column',  type: 'varchar',  primary: false,  autoIncrement: false },
      cf_input_data_source: { virtual: false,  db_table: 'data_catalog_data_requests',  db_field: 'input_data_source',  section: 'column',  type: 'varchar',  primary: false,  autoIncrement: false },
      cf_id_1: { virtual: false,  db_table: 'data_catalog_category',  db_field: 'id',  section: 'column',  type: 'varchar',  primary: true,  autoIncrement: false },
      cf_id_2: { virtual: false,  db_table: 'user',  db_field: 'id',  section: 'column',  type: 'varchar',  primary: true,  autoIncrement: false },
      cf_id_3: { virtual: false,  db_table: 'company',  db_field: 'id',  section: 'column',  type: 'varchar',  primary: true,  autoIncrement: false },
      cf_id_4: { virtual: false,  db_table: 'company',  db_field: 'id',  section: 'column',  type: 'varchar',  primary: true,  autoIncrement: false },
      of_created_on: { virtual: false,  db_table: 'data_catalog_data_requests',  db_field: 'created_on',  section: 'orderby',  type: 'datetime',  primary: false,  autoIncrement: false },
      ft_id: { virtual: false,  db_table: 'data_catalog_category',  db_field: 'id',  section: 'filter',  type: 'varchar',  primary: true,  autoIncrement: false },
      ft_id_1: { virtual: false,  db_table: 'data_catalog_service',  db_field: 'id',  section: 'filter',  type: 'varchar',  primary: true,  autoIncrement: false },
      ft_id_2: { virtual: false,  db_table: 'data_catalog_business_object',  db_field: 'id',  section: 'filter',  type: 'varchar',  primary: true,  autoIncrement: false },
      ft_owner_id: { virtual: false,  db_table: 'data_catalog_data_requests',  db_field: 'owner_id',  section: 'filter',  type: 'varchar',  primary: false,  autoIncrement: false },
      ft_created_by_1: { virtual: false,  db_table: 'data_catalog_data_offerings',  db_field: 'created_by',  section: 'filter',  type: 'varchar',  primary: false,  autoIncrement: false },
      ft_created_on: { virtual: false,  db_table: 'data_catalog_data_requests',  db_field: 'created_on',  section: 'filter',  type: 'datetime',  primary: false,  autoIncrement: false },
      sqlgf_1_1: { virtual: true,  db_table: '',  db_field: '',  section: 'leftgroup',  type: 'varchar',  primary: false,  autoIncrement: false },
      sqlgf_1: { virtual: true,  db_table: '',  db_field: '',  section: 'leftgroup',  type: 'varchar',  primary: false,  autoIncrement: false },
      sqlgf_2: { virtual: true,  db_table: '',  db_field: '',  section: 'leftgroup',  type: 'varchar',  primary: false,  autoIncrement: false },
      sqlgf_3: { virtual: true,  db_table: '',  db_field: '',  section: 'leftgroup',  type: 'varchar',  primary: false,  autoIncrement: false }
   },

   fromSql:
      `FROM
         data_catalog_data_requests data_catalog_data_requests
         LEFT OUTER JOIN data_catalog_data_offerings data_catalog_data_offerings ON data_catalog_data_offerings.id = data_catalog_data_requests.data_catalog_data_offering_id
         LEFT OUTER JOIN data_catalog_business_object data_catalog_business_object ON data_catalog_business_object.id = data_catalog_data_offerings.data_catalog_business_object_id
         LEFT OUTER JOIN data_catalog_service data_catalog_service ON data_catalog_service.id = data_catalog_business_object.data_catalog_service_id
         LEFT OUTER JOIN data_catalog_category data_catalog_category ON data_catalog_category.id = data_catalog_service.data_catalog_category_id
         LEFT OUTER JOIN user user_offering ON user_offering.id = data_catalog_data_offerings.created_by
         LEFT OUTER JOIN company company ON company.id = user_offering.company_id
         LEFT OUTER JOIN user user_requesting ON user_requesting.id = data_catalog_data_requests.owner_id
         LEFT OUTER JOIN company company_requesting ON company_requesting.id = user_requesting.company_id`,

   getList: async (filters) => {
      const conn = await pool.getConnection();

      try {

         const { whereSql, params } = ModelHelper.buildWhere(module.exports.listFields, filters);

         const [results] = await conn.query(`
         SELECT 
            data_catalog_data_requests.id as cf_id, 
            data_catalog_data_requests.status as cf_status, 
            data_catalog_data_requests.input_profile as cf_input_profile, 
            data_catalog_data_requests.input_data_source as cf_input_data_source, 
            data_catalog_category.id as cf_id_1, 
            user_offering.id as cf_id_2, 
            company.id as cf_id_3, 
            company_requesting.id as cf_id_4, 
            (SELECT CONCAT(data_catalog_category.name,' <i class="fa fa-caret-right"></i> ', data_catalog_service.name,' <i class="fa fa-caret-right"></i> ', data_catalog_business_object.name)) as sqlf_4, 
            (SELECT CONCAT(company.name,' <i class="fa fa-caret-right"></i> ', user_offering.username)) as sqlf_6, 
            (SELECT CONCAT(company_requesting.name,' <i class="fa fa-caret-right"></i> ', user_requesting.username)) as sqlf_9, 
            (date_format(data_catalog_data_requests.created_on,'%d/%m/%Y %H:%i')) as sqlf_8
         ${module.exports.fromSql}
         ${whereSql}`, params);

         return results;

      } catch (err) {
         throw err;
      } finally {
         conn.release();
      }
   },

   getSqlgf11List: async (filters) => {
      const conn = await pool.getConnection();

      try {

      const { whereSql, params } = ModelHelper.buildWhere(module.exports.listFields, filters);

         const [results] = await conn.query(`
         SELECT 
            (SELECT CONCAT(data_catalog_category.code,' - ', data_catalog_category.name)) as sqlgf_1_1, 
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

   getSqlgf1List: async (filters) => {
      const conn = await pool.getConnection();

      try {

      const { whereSql, params } = ModelHelper.buildWhere(module.exports.listFields, filters);

         const [results] = await conn.query(`
         SELECT 
            (SELECT CONCAT(data_catalog_service.code,' - ',data_catalog_service.name)) as sqlgf_1, 
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

   getSqlgf2List: async (filters) => {
      const conn = await pool.getConnection();

      try {

      const { whereSql, params } = ModelHelper.buildWhere(module.exports.listFields, filters);

         const [results] = await conn.query(`
         SELECT 
            (SELECT CONCAT(data_catalog_business_object.code,' - ', data_catalog_business_object.name)) as sqlgf_2, 
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

   getSqlgf3List: async (filters) => {
      const conn = await pool.getConnection();

      try {

      const { whereSql, params } = ModelHelper.buildWhere(module.exports.listFields, filters);

         const [results] = await conn.query(`
         SELECT 
            (SELECT CONCAT(user_offering.username,' - ', company.name)) as sqlgf_3, 
            count(*) AS total
         ${module.exports.fromSql}
         ${whereSql}
         GROUP BY 
            (SELECT CONCAT(user_offering.username,' - ', company.name))`
         , params);

         return results;

      } catch (err) {
         throw err;
      } finally {
         conn.release();
      }
   }

}

