const pool = require('../db');
const { v4: uuid } = require('uuid');
const ModelHelper = require('../helpers/ModelHelper');

module.exports = {

   tables : {
      provide_data: {
         notification_send: { type: 'int',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         id: { type: 'varchar',  primary: true,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         created_by: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         created_on: { type: 'datetime',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         modified_by: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         modified_on: { type: 'datetime',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         file: { type: 'mediumtext',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         file_name: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         file_size: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         file_type: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         title: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         description: { type: 'text',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         service_offering_id: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         provide_user: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true }
      },
      subscription_offering_app_view: {
         offering_user_id: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         subscription_user: { type: 'text',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         offering_id: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: true,  insert: true,  update: true },
         offering_user: { type: 'text',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         subscription_id: { type: 'varchar',  primary: true,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         subscription_user_id: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         subscription_status: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         offering_status_html: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         offering_status: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         subscription_status_html: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true }
      }
   },

   getById: async (id) => {
      const conn = await pool.getConnection();
      const data = {};

      try {

         /* SELECTION QUERY - provide_data - */

         const provide_dataFilters = {
         };
         const [provide_data_results] = await conn.query(
         `SELECT notification_send, id, created_by, created_on, modified_by, modified_on, file, file_name, file_size, file_type, title, description, service_offering_id, provide_user
          FROM provide_data
         WHERE `, provide_dataFilters );

         let provide_data = {};
         data.provide_data_obj = {};
         if (provide_data_results.length > 0)
         {
            provide_data = provide_data_results[0];
            data.provide_data_obj = provide_data;
         }

         /* SELECTION QUERY - subscription_offering_app_view - */

         const subscription_offering_app_viewFilters = {
            subscription_offering_app_view_obj_offering_id: provide_data?.service_offering_id,
            subscription_offering_app_view_obj_subscription_user_id: Auth::GetUserId()
         };
         const [subscription_offering_app_view_results] = await conn.query(
         `SELECT offering_user_id, subscription_user, offering_id, offering_user, subscription_id, subscription_user_id, subscription_status, offering_status_html, offering_status, subscription_status_html
          FROM  ( SELECT  s.id AS subscription_id, s.offering_id, s.subscription_user AS subscription_user_id, s.status AS subscription_status, so.status AS offering_status, so.offering_user AS offering_user_id,  (SELECT CONCAT(company.name,' <i class="fa fa-caret-right"></i> ', user.username)    FROM user user   INNER JOIN company company ON user.company_id = company.id   WHERE user.id = s.subscription_user ) AS subscription_user,  (SELECT CONCAT(company.name,' <i class="fa fa-caret-right"></i> ', user.username)    FROM user user   INNER JOIN company company ON user.company_id = company.id   WHERE user.id = so.offering_user ) AS offering_user,   CASE    WHEN s.status = 'pending' THEN '<span class="pending-label"><i class="fa-solid fa-spinner rotate"></i> Pending</span>'   WHEN s.status = 'accept' THEN '<span class="accept-label"><i class="fa fa-check accept"></i> Accepted</span>'   WHEN s.status = 'reject' THEN '<span class="reject-label"><i class="fa fa-times reject"></i> Rejected</span>'   ELSE ''  END AS subscription_status_html,    CASE    WHEN so.status = 'pending' THEN '<span class="pending-label"><i class="fa-solid fa-spinner rotate"></i> Pending</span>'   WHEN so.status = 'accept' THEN '<span class="accept-label"><i class="fa fa-check accept"></i> Accepted</span>'   WHEN so.status = 'reject' THEN '<span class="reject-label"><i class="fa fa-times reject"></i> Rejected</span>'   ELSE ''  END AS offering_status_html FROM subscription s  INNER JOIN service_offering so ON s.offering_id = so.id  INNER JOIN user ou on ou.id = so.offering_user INNER JOIN company oc on oc.id = ou.company_id  ) subscription_offering_app_view
         WHERE subscription_offering_app_view.offering_id = :subscription_offering_app_view_obj_offering_id;subscription_offering_app_view.subscription_user_id = :subscription_offering_app_view_obj_subscription_user_id;`, subscription_offering_app_viewFilters );

         let subscription_offering_app_view = {};
         data.provide_data_obj.subscription_offering_app_view_obj = {};
         if (subscription_offering_app_view_results.length > 0)
         {
            subscription_offering_app_view = subscription_offering_app_view_results[0];
            data.provide_data_obj.subscription_offering_app_view_obj = subscription_offering_app_view;
         }

         return data;

      } catch (err) {
         throw err;
      } finally {
         conn.release();
      }
   }

}