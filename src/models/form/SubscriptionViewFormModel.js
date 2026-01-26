const pool = require('../../db');
const { v4: uuid } = require('uuid');
const ModelHelper = require('../../helpers/ModelHelper');

module.exports = {

      tables : {
      subscription: {
         id: { type: 'varchar',  primary: true,  autoIncrement: false,  isSaveStatement: true,  insert: true,  update: true },
         created_by: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         created_on: { type: 'datetime',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         modified_by: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         modified_on: { type: 'datetime',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         subscription_user: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         status: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         offering_id: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         comments: { type: 'text',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true }
      },
      offering_app_view: {
         offering_user: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         id: { type: 'varchar',  primary: true,  autoIncrement: false,  isSaveStatement: true,  insert: true,  update: true },
         data_sharing_method: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         wizard_desctiption: { type: 'text',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         country: { type: 'int',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         building_profile: { type: 'int',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         offering_user_id: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         handler_url: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         type: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         process_tags: { type: 'mediumtext',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         service_id: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         user_profile: { type: 'int',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         sharing_type: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         profiles: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         business_tags: { type: 'mediumtext',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         sharing_type_id: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         vocabulary_keywords: { type: 'mediumtext',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         offering_title: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         sharing_type_code: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         type_code: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         energy_profile: { type: 'int',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         service_title: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true }
      },
      subscription_app_view: {
         status_html: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         id: { type: 'varchar',  primary: true,  autoIncrement: false,  isSaveStatement: true,  insert: true,  update: true },
         subscription_user: { type: 'text',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true }
      }
   },

      getoffering_app_viewById: async ({ id, userId }) => {
      const conn = await pool.getConnection();
      const data = {};

      try {

         /* SELECTION QUERY - offering_app_view - */

         const offering_app_viewFilters = [id
         ];
         const [offering_app_view_results] = await conn.execute(
         `SELECT offering_user, id, data_sharing_method, wizard_desctiption, country, building_profile, offering_user_id, handler_url, type, process_tags, service_id, user_profile, sharing_type, profiles, business_tags, sharing_type_id, vocabulary_keywords, offering_title, sharing_type_code, type_code, energy_profile, service_title
          FROM  ( SELECT sof.id         AS id,  srv.id      AS service_id,  srv.title      AS service_title,   CASE    WHEN srv.data_sharing_method = 'one_way' THEN '<i class="fa fa-arrow-right"></i> One Way'   WHEN srv.data_sharing_method = 'two_way' THEN '<i class="fa fa-arrow-right-arrow-left"></i> Two Ways'   ELSE ''  END AS data_sharing_method,    CASE    WHEN srv.type = 'building_to_grid' THEN '<i class="fa fa-building"></i> Building-to-Grid (B2G) Service'   WHEN srv.type = 'grid_to_building' THEN '<i class="fa fa-plug"></i> Grid-to-Building (G2B) Service'   WHEN srv.type = 'human_to' THEN '<i class="fa fa-users"></i> Human-to-Building Interface & Interactivity'   WHEN srv.type = 'system_int' THEN '<i class="fa fa-network-wired"></i> Systems Interoperability'   WHEN srv.type = 'building_data' THEN '<i class="fa fa-database"></i> Building-to-Data-Consumers Service'   ELSE ''  END AS type,   (SELECT GROUP_CONCAT(CONCAT('<i class="fa fa-tags"></i> ', bt.title, '<br>') SEPARATOR '')    FROM service_business_tag sbt    INNER JOIN business_tag bt     ON sbt.business_tag_id = bt.id    WHERE sbt.service_id = srv.id  ) AS business_tags,    (SELECT GROUP_CONCAT(CONCAT('<i class="fa fa-tag"></i> ', bt.title, '<br>') SEPARATOR '')   FROM   service_process_tag sbt    INNER JOIN process_tag bt      ON sbt.process_tag_id = bt.id   WHERE  sbt.service_id = srv.id) AS process_tags,        (SELECT GROUP_CONCAT(CONCAT('<i class="fa fa-hashtag"></i> ', bt.title, '<br>') SEPARATOR '')   FROM   service_vocabulary_keyword sbt    INNER JOIN vocabulary_keywords bt      ON sbt.vocabulary_keyword_id = bt.id   WHERE  sbt.service_id = srv.id) AS vocabulary_keywords,      CONCAT(   CASE     WHEN srv.user_profile = 1 THEN '<i class="fa fa-toggle-on enabled-toggle"></i> User Profile <br>'    ELSE '<i class="fa fa-toggle-off disabled-toggle"></i> User Profile <br>'   END,      CASE     WHEN srv.building_profile = 1 THEN '<i class="fa fa-toggle-on enabled-toggle"></i> Building Profile <br>'    ELSE '<i class="fa fa-toggle-off disabled-toggle"></i> Building Profile <br>'   END,      CASE     WHEN srv.energy_profile = 1 THEN '<i class="fa fa-toggle-on enabled-toggle"></i> Energy Profile <br>'    ELSE '<i class="fa fa-toggle-off disabled-toggle"></i> Energy Profile <br>'   END      ) AS profiles,         (SELECT CONCAT(      (   CASE     WHEN country.name = 'Greece'  AND sof.country = 1 THEN '<img src="./assets/img/flags/1x1/gr.svg">'     WHEN country.name = 'Finland' AND sof.country = 1  THEN '<img src="./assets/img/flags/1x1/fi.svg">'     WHEN country.name = 'France' AND sof.country = 1  THEN '<img src="./assets/img/flags/1x1/fr.svg">'     WHEN country.name = 'Sweden'  AND sof.country = 1 THEN '<img src="./assets/img/flags/1x1/se.svg">'     WHEN country.name = 'Slovenia' AND sof.country = 1  THEN '<img src="./assets/img/flags/1x1/si.svg">'     WHEN country.name = 'Germany' AND sof.country = 1 THEN '<img src="./assets/img/flags/1x1/de.svg">'     ELSE ''   END   )      ,' ', user.username)    FROM user user   INNER JOIN country country on country.id = user.country_id   WHERE user.id = sof.offering_user ) AS offering_user,   sof.offering_user AS offering_user_id,    CASE    WHEN sof.sharing_type = 'wizard' THEN '<i class="fa fa-hat-wizard"></i> Wizard'   WHEN sof.sharing_type = 'files' THEN '<i class="fa fa-file-lines"></i> Files'   ELSE ''  END AS sharing_type,    sof.sharing_type AS sharing_type_code,  srv.wizard_desctiption,  sof.title AS offering_title,    srv.user_profile,  srv.building_profile,  srv.energy_profile,  srv.sharing_type AS sharing_type_id,       srv.type AS type_code,  sof.country,  sof_user.handler_url   FROM   service srv INNER JOIN service_offering sof on sof.service_id = srv.id INNER JOIN user sof_user ON sof_user.id = sof.offering_user  ) offering_app_view
         WHERE offering_app_view.id = ? `, offering_app_viewFilters );

         let offering_app_view = {};
         data.offering_app_view_obj = {};
         if (offering_app_view_results.length > 0)
         {
            offering_app_view = offering_app_view_results[0];
            data.offering_app_view_obj = offering_app_view;
         } else {
            return data;
         }

         return data;

      } catch (err) {
         throw err;
      } finally {
         conn.release();
      }
   },

}