const mysql = require('mysql');

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
const connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'password',
  database: 'burgers_db',
});

// Make connection.
connection.connect((err) => {
  if (err) {
    console.error(`error connecting: ${err.stack}`);
    return;
  }
  console.log(`connected as id ${connection.threadId}`);
});

// Export connection for our ORM to use.
module.exports = connection;


// host: 'us-cdbr-east-03.cleardb.com',
// port: 3306,
// user: 'b976710c726714',
// // NOTE: Be sure to add your MySQL password here!
// password: 'f079a062',
// database: 'heroku_70d751653b4b5f9',