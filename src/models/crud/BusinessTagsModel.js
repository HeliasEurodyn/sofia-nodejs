const pool = require('../db');
const { v4: uuid } = require('uuid');
const ModelHelper = require('../helpers/ModelHelper');

module.exports = {

   tables : {
      business_tag: {
         id: { type: 'varchar',  primary: true,  autoIncrement: false,  isSaveStatement: true,  insert: true,  update: true },
         title: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true }
      }
   },

   create: async (data) => {
      let sql, params, res;
      const conn = await pool.getConnection();

      try {
         await conn.beginTransaction();

         const business_tag_obj = data.business_tag_obj;
         business_tag_obj.id = uuid();
         await ModelHelper.insert(conn, 'business_tag', module.exports.tables['business_tag'], business_tag_obj);

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

         const business_tag_obj = data.business_tag_obj;
         await ModelHelper.update(conn, 'business_tag', module.exports.tables['business_tag'], business_tag_obj);

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

         /* SELECTION QUERY - business_tag - */

         const business_tagFilters = {
            business_tag_obj_id: id
         };
         const [business_tag_results] = await conn.query(
         `SELECT id, title
          FROM business_tag
         WHERE business_tag.id = :business_tag_obj_id;`, business_tagFilters );

         let business_tag = {};
         data.business_tag_obj = {};
         if (business_tag_results.length > 0)
         {
            business_tag = business_tag_results[0];
            data.business_tag_obj = business_tag;
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

         const business_tagFilters = {
            business_tag_obj_id: id
         };

         const [business_tag_results] = await conn.query(
         `SELECT id
          FROM business_tag
         WHERE business_tag.id = :business_tag_obj_id;`, business_tagFilters );

         let business_tag = {};
         data.business_tag_obj = {};
         if (business_tag_results.length > 0)
         {
            business_tag = business_tag_results[0];
            data.business_tag_obj = business_tag;
         }


         /* DELETE FROM DATABASE USING KEYS */

         const business_tag_obj = data.business_tag_obj;
         await conn.query(
            `DELETE FROM business_tag WHERE id = :id`, business_tag_obj );

         await conn.commit();

      } catch (err) {
         await conn.rollback();
         throw err;
      } finally {
         conn.release();
      }
   }

}