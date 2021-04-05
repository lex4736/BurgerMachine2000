const connection = require('./connection.js');

const orm = {
  selectAll(tableInput, cb) {
    const queryString = `SELECT * FROM ${tableInput};`;
    connection.query(queryString, (err, result) => {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  insertOne(tableInput, objects, cb) {
    const queryString = `INSERT INTO ${tableInput} SET ?`;
    connection.query(queryString, objects, (err, result) => {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },

  updateOne(tableInput, array, cb) {
    console.log(array);
    const queryString = `UPDATE ${tableInput} SET ? WHERE ?`;



    connection.query(queryString, array, (err, result) => {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
}
module.exports = orm;