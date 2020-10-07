// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
const express = require('express');

// Start up an instance of app
const app = express();

/* Middleware*/
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

// Initialize the main project folder
app.use(express.static('website'));

// Setup Server
const port = 8000;
const server = app.listen(port, () => {
  console.log(`running on localhost: ${port}`);
});

// initialise all routes with a get request
app.get('/all', function (req, res) {
  console.log('Hello, this is a get request');
});

// post Route
app.post('/all2', function (req, res) {
  res.send('Hello, this is a post request');
});
