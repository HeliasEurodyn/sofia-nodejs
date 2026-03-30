const pool = require('../db');

/**
 * @typedef {Object} OpenvasReport
 * @property {number} id
 * @property {string|null} created_by
 * @property {Date|null} created_on
 * @property {string|null} modified_by
 * @property {Date|null} modified_on
 * @property {string|null} report_id
 * @property {Date|null} scan_start
 * @property {Date|null} scan_end
 * @property {string|null} report_status
 * @property {number|null} is_reviewed
 */

class OpenvasReportModel {
  /**
   * Κάνει μαζικό UPSERT (insert/update) των reports στη βάση με βάση το report_id. Για τα reports που γίνονται insert, το is_reviewed τίθεται σε 0. 
   * @param {Array<Object>} reports - Πίνακας με reports
   * @param {number} isReviewed - Κατάσταση review (0 ή 1)
   * @returns {Promise<Array>} - Αποτελέσματα εισαγωγής/ενημέρωσης
   */
  async updateReportsInDb(reports) {
    if (!Array.isArray(reports)) throw new Error('reports must be an array');
    const conn = await pool.getConnection();
    const results = [];
    try {
      const isInvalidDate = (val) => {
        return (
          val === null ||
          typeof val === 'undefined' ||
          val === '' ||
          val === 'N/A' ||
          val === 'null' ||
          val === 'undefined'
        );
      };
      const formatDateTime = (isoString) => {
        if (isInvalidDate(isoString)) return null;
        return isoString.replace('T', ' ').substring(0, 19);
      };
      for (const report of reports) {
        const scanStart = formatDateTime(report.scanStart);
        const scanEnd = formatDateTime(report.scanEnd);
        const values = [
          report.reportId,
          scanStart,
          scanEnd,
          report.taskName,
          report.severity,
          report.status,
          0,
          // για το UPDATE μέρος
          scanStart,
          scanEnd,
          report.taskName,
          report.severity,
          report.status
        ];
        const query = `INSERT INTO openvas_report (report_id, scan_start, scan_end, task_name, severity, report_status, is_reviewed)
            VALUES (?, ?, ?, ?, ?, ?, ?)
            ON DUPLICATE KEY UPDATE
              scan_start = ?,
              scan_end = ?,
              task_name = ?,
              severity = ?,
              report_status = ?`;
        const [result] = await conn.execute(query, values);
        results.push(result);
      }
      return results;
    } catch (error) {
      console.error('Error in updateReportsInDb:', error);
      throw error;
    } finally {
      conn.release();
    }
  }

  /**
 * Ανακτά αναφορές OpenVAS από τη βάση δεδομένων.
 * * @param {boolean} [isReviewed=false] - Αν είναι true, επιστρέφει μόνο τις ελεγμένες αναφορές.
 * @param {string|string[]} [status=[]] - Φίλτρο για την κατάσταση (status) της αναφοράς.
 * @returns {Promise<OpenvasReport[]>}
 */
  async getReportsFromDb(isReviewed = false, status = []) {
    const conn = await pool.getConnection();

    try {
      const filters = [];
      const params = [];

      // 1. Καθαρισμός και προετοιμασία των statuses (Sanitization)
      const statusArray = Array.isArray(status) ? status : [status];
      const validStatuses = statusArray.filter(
        (value) => typeof value === 'string' && value.trim() !== ''
      );

      // 2. Δυναμική κατασκευή φίλτρων και παραμέτρων
      if (isReviewed) {
        filters.push('is_reviewed = ?');
        params.push(1); // Χρήση parameter αντί για hardcoded '1' για συνέπεια
      } else {
        filters.push('is_reviewed = ?');
        params.push(0); // Χρήση parameter αντί για hardcoded '0' για συνέπεια
      }

      if (validStatuses.length > 0) {
        const placeholders = validStatuses.map(() => '?').join(', ');
        filters.push(`report_status IN (${placeholders})`);
        params.push(...validStatuses);
      }

      // 3. Σύνθεση του Query
      let query = `
      SELECT id, report_id, task_name, severity, scan_start, scan_end, report_status, is_reviewed
      FROM openvas_report
    `;

      if (filters.length > 0) {
        query += ` WHERE ${filters.join(' AND ')}`;
      }

      query += ` ORDER BY id ASC`; // Προσθήκη ASC για σαφήνεια στην ανάγνωση

      // 4. Εκτέλεση
      const [rows] = await conn.execute(query, params);
      return rows;

    } catch (error) {
      // Καταγραφή του σφάλματος πριν περαστεί στο επόμενο επίπεδο
      console.error('Database Error [getReportsFromDb]:', error);
      throw error;
    } finally {
      conn.release();
    }
  }

  async saveReportToDb(report, isReviewed) {
    const conn = await pool.getConnection();
    try {
      const query = "INSERT INTO openvas_report (report_id, scan_start, scan_end, task_name, severity, report_status, is_reviewed) VALUES (?, ?, ?, ?, ?, ?, ?)";
      const isInvalidDate = (val) => {
        return (
          val === null ||
          typeof val === 'undefined' ||
          val === '' ||
          val === 'N/A' ||
          val === 'null' ||
          val === 'undefined'
        );
      };
      const formatDateTime = (isoString) => {
        if (isInvalidDate(isoString)) return null;
        return isoString.replace('T', ' ').substring(0, 19);
      };
      const scanStart = formatDateTime(report.scanStart);
      const scanEnd = formatDateTime(report.scanEnd);
      const values = [
        report.reportId,
        scanStart,
        scanEnd,
        report.taskName,
        report.severity,
        report.status,
        isReviewed
      ];
      const [result] = await conn.execute(query, values);
      return result;
    } catch (error) {
      console.error("Error:", error);
      throw error;
    } finally {
      conn.release();
    }
  }

  /**
   * Αποθηκεύει μαζικά reports στη βάση
   * @param {Array<Object>} reports - Πίνακας με reports
   * @param {number} isReviewed - Κατάσταση review (0 ή 1)
   * @returns {Promise<Array>} - Αποτελέσματα εισαγωγής
   */
  async saveReportsToDb(reports) {
    if (!Array.isArray(reports)) throw new Error('reports must be an array');
    const results = [];
    for (const report of reports) {
      const result = await this.saveReportToDb(report, 0);
      results.push(result);
    }
    return results;
  }
}

module.exports = new OpenvasReportModel();