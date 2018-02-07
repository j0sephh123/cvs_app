const mysql = require('mysql');
const database = mysql.createConnection({
  host     : '127.0.0.1',
  user     : 'root',
  database : 'cvs'
});

module.exports = database;