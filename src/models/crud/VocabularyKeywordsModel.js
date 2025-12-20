const pool = require('../db');
const { v4: uuid } = require('uuid');
const ModelHelper = require('../helpers/ModelHelper');

module.exports = {

   tables : {
      vocabulary_keywords: {
         id: { type: 'varchar',  primary: true,  autoIncrement: false,  isSaveStatement: true,  insert: true,  update: true },
         title: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true }
      }
   },

   create: async (data) => {
      let sql, params, res;
      const conn = await pool.getConnection();

      try {
         await conn.beginTransaction();

         const vocabulary_keywords_obj = data.vocabulary_keywords_obj;
         vocabulary_keywords_obj.id = uuid();
         await ModelHelper.insert(conn, 'vocabulary_keywords', module.exports.tables['vocabulary_keywords'], vocabulary_keywords_obj);

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

         const vocabulary_keywords_obj = data.vocabulary_keywords_obj;
         await ModelHelper.update(conn, 'vocabulary_keywords', module.exports.tables['vocabulary_keywords'], vocabulary_keywords_obj);

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

         /* SELECTION QUERY - vocabulary_keywords - */

         const vocabulary_keywordsFilters = {
            vocabulary_keywords_obj_id: id
         };
         const [vocabulary_keywords_results] = await conn.query(
         `SELECT id, title
          FROM vocabulary_keywords
         WHERE vocabulary_keywords.id = :vocabulary_keywords_obj_id;`, vocabulary_keywordsFilters );

         let vocabulary_keywords = {};
         data.vocabulary_keywords_obj = {};
         if (vocabulary_keywords_results.length > 0)
         {
            vocabulary_keywords = vocabulary_keywords_results[0];
            data.vocabulary_keywords_obj = vocabulary_keywords;
         }

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

         const vocabulary_keywordsFilters = {
            vocabulary_keywords_obj_id: id
         };

         const [vocabulary_keywords_results] = await conn.query(
         `SELECT id
          FROM vocabulary_keywords
         WHERE vocabulary_keywords.id = :vocabulary_keywords_obj_id;`, vocabulary_keywordsFilters );

         let vocabulary_keywords = {};
         data.vocabulary_keywords_obj = {};
         if (vocabulary_keywords_results.length > 0)
         {
            vocabulary_keywords = vocabulary_keywords_results[0];
            data.vocabulary_keywords_obj = vocabulary_keywords;
         }


         /* DELETE FROM DATABASE USING KEYS */

         const vocabulary_keywords_obj = data.vocabulary_keywords_obj;
         await conn.query(
            `DELETE FROM vocabulary_keywords WHERE id = :id`, vocabulary_keywords_obj );

         await conn.commit();

      } catch (err) {
         await conn.rollback();
         throw err;
      } finally {
         conn.release();
      }
   }

}