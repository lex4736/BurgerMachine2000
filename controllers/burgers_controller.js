// Setting up express 
const express = require('express');

const router = express.Router();

// Importing the model  to use its database functions.
const burger = require('../models/burger.js');

// Create all our routes and setting up logic within those routes where required.
router.get('/', (req, res) => {
    burger.all((data) => {
    const hbsObject = {
        burgers: data,
    };
    console.log(hbsObject);
    res.render('index', hbsObject);
    });
});

router.post('/api/burgers', (req, res) => {
    burger.create(req.body, (result) => {
    // Send back the ID of the new quote
    res.json({ id: result.insertId });
    });
});

router.put('/api/burgers/:id', (req, res) => {
 const array = [
   {devoured: req.body.devoured}, {id: parseInt(req.params.id)}
 ]
  console.log(array);

  burger.update(
  array,(result) => {
      if (result.changedRows === 0) {
        return res.status(404).end();
      }
      res.status(200).end();
    }
  );
});

// FUTURE DEVELOPMENT: Attempted to add a delete fuctionality to the history list but was causing errors to my working application so i ended up reverting back to an old save but will continue on getting this feature to work
// router.delete('/api/burgers/:id', (req, res) => {
//   const array = `id = ${req.params.id}`;

//   burger.delete(array, (result) => {
//     if (result.affectedRows === 0) {
//       return res.status(404).end();
//     }
//     res.status(200).end();
//   });
// });


// Export routes for server.js to use.
module.exports = router;