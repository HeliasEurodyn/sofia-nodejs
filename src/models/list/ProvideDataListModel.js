const pool = require('../../db');
const ModelHelper = require('../../helpers/ModelHelper');

module.exports = {

   listFields: {
      cf_id: { virtual: false,  db_table: 'data_send',  db_field: 'id',  section: 'column',  type: 'varchar',  primary: true,  autoIncrement: false },
      cf_id_1: { virtual: false,  db_table: 'data_catalog_category',  db_field: 'id',  section: 'column',  type: 'varchar',  primary: true,  autoIncrement: false },
      sqlf_3: { virtual: true,  db_table: '',  db_field: '',  section: 'column',  type: 'varchar',  primary: false,  autoIncrement: false },
      cf_title_1: { virtual: false,  db_table: 'data_catalog_data_offerings',  db_field: 'title',  section: 'column',  type: 'varchar',  primary: false,  autoIncrement: false },
      cf_created_on: { virtual: false,  db_table: 'data_send',  db_field: 'created_on',  section: 'column',  type: 'datetime',  primary: false,  autoIncrement: false },
      cf_title: { virtual: false,  db_table: 'data_send',  db_field: 'title',  section: 'column',  type: 'varchar',  primary: false,  autoIncrement: false },
      cf_description: { virtual: false,  db_table: 'data_send',  db_field: 'description',  section: 'column',  type: 'varchar',  primary: false,  autoIncrement: false },
      of_created_on: { virtual: false,  db_table: 'data_send',  db_field: 'created_on',  section: 'orderby',  type: 'datetime',  primary: false,  autoIncrement: false },
      ft_created_by: { virtual: false,  db_table: 'data_send',  db_field: 'created_by',  section: 'filter',  type: 'varchar',  primary: false,  autoIncrement: false },
      ft_status: { virtual: false,  db_table: 'data_send',  db_field: 'status',  section: 'filter',  type: 'varchar',  primary: false,  autoIncrement: false },
      category_grouping: { virtual: true,  db_table: '',  db_field: '',  section: 'leftgroup',  type: 'varchar',  primary: false,  autoIncrement: false },
      service_grouping: { virtual: true,  db_table: '',  db_field: '',  section: 'leftgroup',  type: 'varchar',  primary: false,  autoIncrement: false },
      business_object_grouping: { virtual: true,  db_table: '',  db_field: '',  section: 'leftgroup',  type: 'varchar',  primary: false,  autoIncrement: false }
   },

   fromSql:
      `FROM
         data_send data_send
         LEFT OUTER JOIN data_catalog_data_offerings data_catalog_data_offerings ON data_catalog_data_offerings.id = data_send.data_catalog_data_offerings_id
         LEFT OUTER JOIN data_catalog_business_object data_catalog_business_object ON data_catalog_business_object.id = data_catalog_data_offerings.data_catalog_business_object_id
         LEFT OUTER JOIN data_catalog_service data_catalog_service ON data_catalog_service.id = data_catalog_business_object.data_catalog_service_id
         LEFT OUTER JOIN data_catalog_category data_catalog_category ON data_catalog_category.id = data_catalog_service.data_catalog_category_id`,

   getList: async (filters) => {
      const conn = await pool.getConnection();

      try {

         const { whereSql, params } = ModelHelper.buildWhere(module.exports.listFields, filters);

         const [results] = await conn.query(`
         SELECT 
            data_send.id as cf_id, 
            data_catalog_category.id as cf_id_1, 
            data_catalog_data_offerings.title as cf_title_1, 
            data_send.created_on as cf_created_on, 
            data_send.title as cf_title, 
            data_send.description as cf_description, 
            (SELECT CONCAT(data_catalog_category.name,' <i class="fa fa-caret-right"></i> ', data_catalog_service.name,' <i class="fa fa-caret-right"></i> ', data_catalog_business_object.name)) as sqlf_3
         ${module.exports.fromSql}
         ${whereSql}`, params);

         return results;

      } catch (err) {
         throw err;
      } finally {
         conn.release();
      }
   },

   getCategoryGroupingList: async (filters) => {
      const conn = await pool.getConnection();

      try {

      const { whereSql, params } = ModelHelper.buildWhere(module.exports.listFields, filters);

         const [results] = await conn.query(`
         SELECT 
            (SELECT CONCAT(data_catalog_category.code,' - ', data_catalog_category.name)) as category_grouping, 
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

   getServiceGroupingList: async (filters) => {
      const conn = await pool.getConnection();

      try {

      const { whereSql, params } = ModelHelper.buildWhere(module.exports.listFields, filters);

         const [results] = await conn.query(`
         SELECT 
            (SELECT CONCAT(data_catalog_service.code,' - ',data_catalog_service.name)) as service_grouping, 
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

   getBusinessObjectGroupingList: async (filters) => {
      const conn = await pool.getConnection();

      try {

      const { whereSql, params } = ModelHelper.buildWhere(module.exports.listFields, filters);

         const [results] = await conn.query(`
         SELECT 
            (SELECT CONCAT(data_catalog_business_object.code,' - ', data_catalog_business_object.name)) as business_object_grouping, 
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
   }

}

