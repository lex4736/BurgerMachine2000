// Import the ORM to create functions that will interact with the database.
const orm = require('../config/orm.js');


const burger = {
  all(cb) {
    orm.selectAll('burgers', (res) => cb(res));
  },
  // The variables cols and vals are arrays.
  create(objects, cb) {
    orm.insertOne('burgers', objects, (res) => cb(res));
  },
  update(array, cb) {
    orm.updateOne('burgers', array, (res) => cb(res));
  },
};


// Export the database functions for the controller (catsController.js).
module.exports = burger;