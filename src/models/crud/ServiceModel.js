const pool = require('../db');
const { v4: uuid } = require('uuid');
const ModelHelper = require('../helpers/ModelHelper');

module.exports = {

   tables : {
      service: {
         user_profile: { type: 'int',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         data_type: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         sharing_type: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         wizard_desctiption: { type: 'text',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         energy_profile: { type: 'int',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         building_profile: { type: 'int',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         id: { type: 'varchar',  primary: true,  autoIncrement: false,  isSaveStatement: true,  insert: true,  update: true },
         data_sharing_method: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         title: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         description: { type: 'text',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         vocabulary_hub_link: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         type: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         lat: { type: 'double',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         lon: { type: 'double',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true }
      },
      service_process_tag: {
         id: { type: 'varchar',  primary: true,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         process_tag_id: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         service_id: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: true,  insert: true,  update: true }
      },
      process_tag: {
         id: { type: 'varchar',  primary: true,  autoIncrement: false,  isSaveStatement: true,  insert: true,  update: true },
         title: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true }
      },
      service_business_tag: {
         id: { type: 'varchar',  primary: true,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         business_tag_id: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         service_id: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: true,  insert: true,  update: true }
      },
      business_tag: {
         id: { type: 'varchar',  primary: true,  autoIncrement: false,  isSaveStatement: true,  insert: true,  update: true },
         title: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true }
      },
      service_vocabulary_keyword: {
         id: { type: 'varchar',  primary: true,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         vocabulary_keyword_id: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         service_id: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: true,  insert: true,  update: true }
      },
      vocabulary_keywords: {
         id: { type: 'varchar',  primary: true,  autoIncrement: false,  isSaveStatement: true,  insert: true,  update: true },
         title: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true }
      },
      service_wizard_fields: {
         id: { type: 'varchar',  primary: true,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         short_order: { type: 'bigint',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         service_id: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: true,  insert: true,  update: true },
         classes: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         name: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         description: { type: 'text',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         type: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         options: { type: 'text',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true }
      }
   },

   create: async (data) => {
      let sql, params, res;
      const conn = await pool.getConnection();

      try {
         await conn.beginTransaction();

         const service_obj = data.service_obj;
         service_obj.id = uuid();
         await ModelHelper.insert(conn, 'service', module.exports.tables['service'], service_obj);

         for (const service_process_tag_obj of service_obj.service_process_tag_obj)
            {

            service_process_tag_obj.id = uuid();
            service_process_tag_obj.service_id = service_obj.id;
            await ModelHelper.insert(conn, 'service_process_tag', module.exports.tables['service_process_tag'], service_process_tag_obj);

            }

         for (const service_business_tag_obj of service_obj.service_business_tag_obj)
            {

            service_business_tag_obj.id = uuid();
            service_business_tag_obj.service_id = service_obj.id;
            await ModelHelper.insert(conn, 'service_business_tag', module.exports.tables['service_business_tag'], service_business_tag_obj);

            }

         for (const service_vocabulary_keyword_obj of service_obj.service_vocabulary_keyword_obj)
            {

            service_vocabulary_keyword_obj.id = uuid();
            service_vocabulary_keyword_obj.service_id = service_obj.id;
            await ModelHelper.insert(conn, 'service_vocabulary_keyword', module.exports.tables['service_vocabulary_keyword'], service_vocabulary_keyword_obj);

            }

         for (const service_wizard_fields_obj of service_obj.service_wizard_fields_obj)
            {

            service_wizard_fields_obj.id = uuid();
            service_wizard_fields_obj.service_id = service_obj.id;
            await ModelHelper.insert(conn, 'service_wizard_fields', module.exports.tables['service_wizard_fields'], service_wizard_fields_obj);

            }

         await conn.commit();

         return data;

      } catch (err) {
         await conn.rollback();
         throw err;
      } finally {
         conn.release();
      }
   },

   update: async (data) => {
      let sql, params, res;
      const conn = await pool.getConnection();

      try {
         await conn.beginTransaction();

         const service_obj = data.service_obj;
         await ModelHelper.update(conn, 'service', module.exports.tables['service'], service_obj);

         for (const service_process_tag_obj of service_obj.service_process_tag_obj)
            {
            service_process_tag_obj.service_id = service_obj.id;
            await ModelHelper.insertOrUpdate(conn, 'service_process_tag', module.exports.tables['service_process_tag'], service_process_tag_obj);
            }
         await ModelHelper.deleteMissing(conn, 'service_process_tag', module.exports.tables['service_process_tag'], service_obj.service_process_tag_obj);

         for (const service_business_tag_obj of service_obj.service_business_tag_obj)
            {
            service_business_tag_obj.service_id = service_obj.id;
            await ModelHelper.insertOrUpdate(conn, 'service_business_tag', module.exports.tables['service_business_tag'], service_business_tag_obj);
            }
         await ModelHelper.deleteMissing(conn, 'service_business_tag', module.exports.tables['service_business_tag'], service_obj.service_business_tag_obj);

         for (const service_vocabulary_keyword_obj of service_obj.service_vocabulary_keyword_obj)
            {
            service_vocabulary_keyword_obj.service_id = service_obj.id;
            await ModelHelper.insertOrUpdate(conn, 'service_vocabulary_keyword', module.exports.tables['service_vocabulary_keyword'], service_vocabulary_keyword_obj);
            }
         await ModelHelper.deleteMissing(conn, 'service_vocabulary_keyword', module.exports.tables['service_vocabulary_keyword'], service_obj.service_vocabulary_keyword_obj);

         for (const service_wizard_fields_obj of service_obj.service_wizard_fields_obj)
            {
            service_wizard_fields_obj.service_id = service_obj.id;
            await ModelHelper.insertOrUpdate(conn, 'service_wizard_fields', module.exports.tables['service_wizard_fields'], service_wizard_fields_obj);
            }
         await ModelHelper.deleteMissing(conn, 'service_wizard_fields', module.exports.tables['service_wizard_fields'], service_obj.service_wizard_fields_obj);

         await conn.commit();

         return data;

      } catch (err) {
         await conn.rollback();
         throw err;
      } finally {
         conn.release();
      }
   },

   getById: async (id) => {
      const conn = await pool.getConnection();
      const data = {};

      try {

         /* SELECTION QUERY - service - */

         const serviceFilters = {
            service_obj_id: id
         };
         const [service_results] = await conn.query(
         `SELECT user_profile, data_type, sharing_type, wizard_desctiption, energy_profile, building_profile, id, data_sharing_method, title, description, vocabulary_hub_link, type, lat, lon
          FROM service
         WHERE service.id = :service_obj_id;`, serviceFilters );

         let service = {};
         data.service_obj = {};
         if (service_results.length > 0)
         {
            service = service_results[0];
            data.service_obj = service;
         }

         /* SELECTION QUERY - service_process_tag - */

         const service_process_tagFilters = {
            service_process_tag_obj_service_id: service?.id
         };
         const [service_process_tag_results] = await conn.query(
         `SELECT id, process_tag_id, service_id
          FROM service_process_tag
         WHERE service_process_tag.service_id = :service_process_tag_obj_service_id;`, service_process_tagFilters );

            data.service_obj.service_process_tag_obj = service_process_tag_results;

         for (const service_process_tag of service_process_tag_results)
            service_process_tag{

            /* SELECTION QUERY - process_tag - */

            const process_tagFilters = {
               process_tag_obj_id: service_process_tag?.process_tag_id
            };
            const [process_tag_results] = await conn.query(
            `SELECT id, title
             FROM process_tag
            WHERE process_tag.id = :process_tag_obj_id;`, process_tagFilters );

            let process_tag = {};
            data.service_obj.service_process_tag_obj.process_tag_obj = {};
            if (process_tag_results.length > 0)
            {
               process_tag = process_tag_results[0];
               data.service_obj.service_process_tag_obj.process_tag_obj = process_tag;
            }
            service_process_tag}

         /* SELECTION QUERY - service_business_tag - */

         const service_business_tagFilters = {
            service_business_tag_obj_service_id: service?.id
         };
         const [service_business_tag_results] = await conn.query(
         `SELECT id, business_tag_id, service_id
          FROM service_business_tag
         WHERE service_business_tag.service_id = :service_business_tag_obj_service_id;`, service_business_tagFilters );

            data.service_obj.service_business_tag_obj = service_business_tag_results;

         for (const service_business_tag of service_business_tag_results)
            service_business_tag{

            /* SELECTION QUERY - business_tag - */

            const business_tagFilters = {
               business_tag_obj_id: service_business_tag?.business_tag_id
            };
            const [business_tag_results] = await conn.query(
            `SELECT id, title
             FROM business_tag
            WHERE business_tag.id = :business_tag_obj_id;`, business_tagFilters );

            let business_tag = {};
            data.service_obj.service_business_tag_obj.business_tag_obj = {};
            if (business_tag_results.length > 0)
            {
               business_tag = business_tag_results[0];
               data.service_obj.service_business_tag_obj.business_tag_obj = business_tag;
            }
            service_business_tag}

         /* SELECTION QUERY - service_vocabulary_keyword - */

         const service_vocabulary_keywordFilters = {
            service_vocabulary_keyword_obj_service_id: service?.id
         };
         const [service_vocabulary_keyword_results] = await conn.query(
         `SELECT id, vocabulary_keyword_id, service_id
          FROM service_vocabulary_keyword
         WHERE service_vocabulary_keyword.service_id = :service_vocabulary_keyword_obj_service_id;`, service_vocabulary_keywordFilters );

            data.service_obj.service_vocabulary_keyword_obj = service_vocabulary_keyword_results;

         for (const service_vocabulary_keyword of service_vocabulary_keyword_results)
            service_vocabulary_keyword{

            /* SELECTION QUERY - vocabulary_keywords - */

            const vocabulary_keywordsFilters = {
               vocabulary_keywords_obj_id: service_vocabulary_keyword?.vocabulary_keyword_id
            };
            const [vocabulary_keywords_results] = await conn.query(
            `SELECT id, title
             FROM vocabulary_keywords
            WHERE vocabulary_keywords.id = :vocabulary_keywords_obj_id;`, vocabulary_keywordsFilters );

            let vocabulary_keywords = {};
            data.service_obj.service_vocabulary_keyword_obj.vocabulary_keywords_obj = {};
            if (vocabulary_keywords_results.length > 0)
            {
               vocabulary_keywords = vocabulary_keywords_results[0];
               data.service_obj.service_vocabulary_keyword_obj.vocabulary_keywords_obj = vocabulary_keywords;
            }
            service_vocabulary_keyword}

         /* SELECTION QUERY - service_wizard_fields - */

         const service_wizard_fieldsFilters = {
            service_wizard_fields_obj_service_id: service?.id
         };
         const [service_wizard_fields_results] = await conn.query(
         `SELECT id, short_order, service_id, classes, name, description, type, options
          FROM service_wizard_fields
         WHERE service_wizard_fields.service_id = :service_wizard_fields_obj_service_id;`, service_wizard_fieldsFilters );

            data.service_obj.service_wizard_fields_obj = service_wizard_fields_results;


         return data;

      } catch (err) {
         throw err;
      } finally {
         conn.release();
      }
   },

   delete: async (id) => {
      const conn = await pool.getConnection();
      const data = {};
      try {
         await conn.beginTransaction();

         /* SELECT KEYS FROM DATABASE */

         const serviceFilters = {
            service_obj_id: id
         };

         const [service_results] = await conn.query(
         `SELECT id
          FROM service
         WHERE service.id = :service_obj_id;`, serviceFilters );

         let service = {};
         data.service_obj = {};
         if (service_results.length > 0)
         {
            service = service_results[0];
            data.service_obj = service;
         }

         const service_process_tagFilters = {
            service_process_tag_obj_service_id: service?.id
         };

         const [service_process_tag_results] = await conn.query(
         `SELECT id, process_tag_id, service_id
          FROM service_process_tag
         WHERE service_process_tag.service_id = :service_process_tag_obj_service_id;`, service_process_tagFilters );

         data.service_obj.service_process_tag_obj = service_process_tag_results;
         for (const service_process_tag of service_process_tag_results)
            service_process_tag{
            service_process_tag}
         const service_business_tagFilters = {
            service_business_tag_obj_service_id: service?.id
         };

         const [service_business_tag_results] = await conn.query(
         `SELECT id, business_tag_id, service_id
          FROM service_business_tag
         WHERE service_business_tag.service_id = :service_business_tag_obj_service_id;`, service_business_tagFilters );

         data.service_obj.service_business_tag_obj = service_business_tag_results;
         for (const service_business_tag of service_business_tag_results)
            service_business_tag{
            service_business_tag}
         const service_vocabulary_keywordFilters = {
            service_vocabulary_keyword_obj_service_id: service?.id
         };

         const [service_vocabulary_keyword_results] = await conn.query(
         `SELECT id, vocabulary_keyword_id, service_id
          FROM service_vocabulary_keyword
         WHERE service_vocabulary_keyword.service_id = :service_vocabulary_keyword_obj_service_id;`, service_vocabulary_keywordFilters );

         data.service_obj.service_vocabulary_keyword_obj = service_vocabulary_keyword_results;
         for (const service_vocabulary_keyword of service_vocabulary_keyword_results)
            service_vocabulary_keyword{
            service_vocabulary_keyword}
         const service_wizard_fieldsFilters = {
            service_wizard_fields_obj_service_id: service?.id
         };

         const [service_wizard_fields_results] = await conn.query(
         `SELECT id, service_id
          FROM service_wizard_fields
         WHERE service_wizard_fields.service_id = :service_wizard_fields_obj_service_id;`, service_wizard_fieldsFilters );

         data.service_obj.service_wizard_fields_obj = service_wizard_fields_results;

         /* DELETE FROM DATABASE USING KEYS */

         const service_obj = data.service_obj;
         await conn.query(
            `DELETE FROM service WHERE id = :id`, service_obj );

         for (const service_process_tag_obj of service_obj.service_process_tag_obj) {
            await conn.query(
               `DELETE FROM service_process_tag WHERE id = :id`, service_process_tag_obj );
         }

         for (const service_business_tag_obj of service_obj.service_business_tag_obj) {
            await conn.query(
               `DELETE FROM service_business_tag WHERE id = :id`, service_business_tag_obj );
         }

         for (const service_vocabulary_keyword_obj of service_obj.service_vocabulary_keyword_obj) {
            await conn.query(
               `DELETE FROM service_vocabulary_keyword WHERE id = :id`, service_vocabulary_keyword_obj );
         }

         for (const service_wizard_fields_obj of service_obj.service_wizard_fields_obj) {
            await conn.query(
               `DELETE FROM service_wizard_fields WHERE id = :id`, service_wizard_fields_obj );
         }

         await conn.commit();

      } catch (err) {
         await conn.rollback();
         throw err;
      } finally {
         conn.release();
      }
   }

}