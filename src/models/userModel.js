const pool = require('../db');
const { v4: uuid } = require('uuid');
const ModelHelper = require('../helpers/ModelHelper');

module.exports = {

   tables : {
      user: {
         username: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         id: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: true,  insert: true,  update: true },
         email: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true }
      }
   },

   create: async (data) => {
      let sql, params, res;
      const conn = await pool.getConnection();

      try {
         await conn.beginTransaction();

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

         /* SELECTION QUERY - user - */

         const userFilters = {
            user_obj_id: id
         };
         const [user_results] = await conn.query(
         `SELECT username, id, email
          FROM  ( SELECT id ,  username ,  email   FROM  user  ) user
         WHERE user.id = :user_obj_id;`, userFilters );

         let user = {};
         data.user_obj = {};
         if (user_results.length > 0)
         {
            user = user_results[0];
            data.user_obj = user;
         }

         return data;

      } catch (err) {
         throw err;
      } finally {
         conn.release();
      }
   },

   getUsers: async (id) => {
      const conn = await pool.getConnection();
      const data = {};

      try {

         /* SELECTION QUERY - user - */

         const userFilters = {
            user_obj_id: id
         };
         const [user_results] = await conn.query(
         `SELECT username, id, email
          FROM  ( SELECT id ,  username ,  email   FROM  user  ) user;`, userFilters );

         return user_results;

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


         /* DELETE FROM DATABASE USING KEYS */

         await conn.commit();

      } catch (err) {
         await conn.rollback();
         throw err;
      } finally {
         conn.release();
      }
   }

}

