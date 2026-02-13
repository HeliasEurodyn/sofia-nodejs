const pool = require('../db');
const ModelHelper = require('../helpers/ModelHelper');

/**
 * @typedef {Object} GraphTemplate
 * @property {number} id
 * @property {string} name
 * @property {string} node_html_label
 * @property {string} elements_style
 * @property {boolean} is_default
 */

class Neo4jSettingsModel {
  /**
   * @returns {Promise<GraphTemplate[]>}
   */
  async getTemplatesFromDb() {

    const conn = await pool.getConnection();

    const query = `
      SELECT id, name, node_html_label, elements_style, is_default
      FROM graph_template
      ORDER BY sort_order
    `;

    const [ rows ] = await conn.query(query);

    return rows;
  }
}

module.exports = new Neo4jSettingsModel();
