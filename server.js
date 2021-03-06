// This is where i am importing the external modules that will be used by my app as well as routes and setup my local server 
const express = require("express");
const app = express();
const exphbs = require("express-handlebars");
const PORT = process.env.PORT || "8000";
const routes = require('./controllers/burgers_controller.js');

// This bit of code tells express where my static files are and how to show them 
app.use(express.static('public'));

// This is where i am setting my app to handle URL encoding & Json
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// This where i am setting up my templating engine to my handlebars 
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
// This where i am setting up my view engine to my handlebars 
app.set('view engine', 'handlebars');

// This is where i am setting my app the handle the routes 
app.use(routes);

// This is where i setup the trigger to a call back when it's listening and log the port it's listening to 
app.listen(PORT, () =>
  console.log(`Server listening on: http://localhost:${PORT}`)
);
