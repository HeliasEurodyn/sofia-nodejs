const mysql = require('mysql2/promise');

// const pool = mysql.createPool({
//   host: 'weforming-middleware.eurodyn.com',
//   port: 3306,
//   user: 'root',
//   password: 'root',
//   database: 'sofia',
//   waitForConnections: true,
//   connectionLimit: 10,
//   queueLimit: 0,
//   namedPlaceholders: true
// });

const pool = mysql.createPool({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'root',
  database: 'weforming',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
  namedPlaceholders: true
});

module.exports = pool;
