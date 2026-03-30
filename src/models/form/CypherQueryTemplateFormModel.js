const pool = require('../../db');
const { v4: uuid } = require('uuid');
const ModelHelper = require('../../helpers/ModelHelper');

module.exports = {

      tables : {
      cypher_query_template: {
         id: { type: 'varchar',  primary: true,  autoIncrement: false,  isSaveStatement: true,  insert: true,  update: true },
         node_query: { type: 'text',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         relathionship_query: { type: 'text',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         sort_order: { type: 'int',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         name: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         is_default: { type: 'int',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         cypher_query_template_type: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         description: { type: 'text',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true },
         scenario_id: { type: 'varchar',  primary: false,  autoIncrement: false,  isSaveStatement: false,  insert: true,  update: true }
      }
   },

   
   defineOnlyDefault: async (id) => {

      const conn = await pool.getConnection();
    
      try {
        await conn.beginTransaction();
    
        const query = `
          UPDATE cypher_query_template
          SET is_default = CASE 
            WHEN id = ? THEN 1
            ELSE 0
          END
        `;
    
        await conn.execute(query, [id]);
    
        await conn.commit();
    
      } catch (err) {
        await conn.rollback();
        throw err;
      } finally {
        conn.release();
      }
  },
  
  getDefault: async () => {
     const conn = await pool.getConnection();
     const data = {};

     try {
        const [results] = await conn.execute(
           `SELECT scenario_id, id, description, cypher_query_template_type, name, is_default, node_query, relathionship_query, sort_order
            FROM cypher_query_template
            WHERE is_default = 1
            LIMIT 1`
        );

        data.cypher_query_template_obj = {};

        if (results.length > 0) {
           data.cypher_query_template_obj = results[0];
        }

        return data;

     } catch (err) {
        throw err;
     } finally {
        conn.release();
     }
  },
  
    getFirst: async () => {
       const conn = await pool.getConnection();
       const data = {};
    
       try {
          const [results] = await conn.execute(
             `SELECT scenario_id, id, description, cypher_query_template_type, name, is_default, node_query, relathionship_query, sort_order
              FROM cypher_query_template
              ORDER BY sort_order ASC, id ASC
              LIMIT 1`
          );
    
          data.cypher_query_template_obj = {};
    
          if (results.length > 0) {
             data.cypher_query_template_obj = results[0];
          }
    
          return data;
    
       } catch (err) {
          throw err;
       } finally {
          conn.release();
       }
    }
    
}