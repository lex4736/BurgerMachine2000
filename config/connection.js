const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'us-cdbr-east-03.cleardb.com',
  port: 3306,
  user: 'b976710c726714:f079a062',
  // NOTE: Be sure to add your MySQL password here!
  password: 'f079a062',
  database: 'heroku_70d751653b4b5f9',
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