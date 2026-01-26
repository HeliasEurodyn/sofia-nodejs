const pool = require('../../db');
const { v4: uuid } = require('uuid');
const ModelHelper = require('../../helpers/ModelHelper');

module.exports = {

   tables : {
      date_users_transuctions: {
         offering_title: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         provider: { type: 'text',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         consumer: { type: 'text',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         created_on: { type: 'date',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         files_total: { type: 'bigint',  primary: false,  autoIncrement: false,  isSaveStatement: true,  insert: true,  update: true }
      }
   },

   getById: async ({ id, userId }) => {
      const conn = await pool.getConnection();
      const data = {};

      try {

         /* SELECTION QUERY - date_users_transuctions - */

         const date_users_transuctionsFilters = [id
         ];
         const [date_users_transuctions_results] = await conn.execute(
         `SELECT offering_title, provider, consumer, created_on, files_total
          FROM  ( SELECT       (SELECT     CONCAT(     IF(cr.id IS NOT NULL, CONCAT(cr.name, ' <i class="fa fa-caret-right"></i> '), ''),     ur.username    ) AS name    FROM user ur   LEFT JOIN company cr ON cr.id = ur.company_id   WHERE ur.id = tc.subscription_user ) AS consumer,      (SELECT     CONCAT(     IF(cr.id IS NOT NULL, CONCAT(cr.name, ' <i class="fa fa-caret-right"></i> '), ''),     ur.username    ) AS name    FROM user ur   LEFT JOIN company cr ON cr.id = ur.company_id   WHERE ur.id = tc.provide_user ) AS provider,      tc.created_on,   tc.offering_title,   tc.files_total    FROM  (SELECT    COUNT(p.id) AS files_total,   DATE(p.created_on) AS created_on,   s.subscription_user,   p.provide_user,   so.title as offering_title     FROM provide_data p   INNER JOIN service_offering so ON p.service_offering_id = so.id   INNER JOIN subscription s ON s.offering_id = so.id  WHERE s.status = 'accept'  GROUP BY DATE(p.created_on), s.subscription_user, p.provide_user,so.title ORDER BY DATE(p.created_on) DESC ) tc ) date_users_transuctions
         WHERE date_users_transuctions.files_total = ? `, date_users_transuctionsFilters );

         let date_users_transuctions = {};
         data.date_users_transuctions_obj = {};
         if (date_users_transuctions_results.length > 0)
         {
            date_users_transuctions = date_users_transuctions_results[0];
            data.date_users_transuctions_obj = date_users_transuctions;
         } else {
            return data;
         }

         return data;

      } catch (err) {
         throw err;
      } finally {
         conn.release();
      }
   }

}