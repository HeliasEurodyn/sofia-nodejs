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
          FROM  ( SELECT `id`, `username`, `email`  FROM `user` ) user
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
   }

}