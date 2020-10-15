// empty JS object to act as endpoint for all routes
const projectData = [];

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

//GET route that returns projectData object
app.get('/all', function (request, response) {
    response.send(projectData);
  });

// post Route
app.post('/add', addCity);

function addCity(request, response) {
  let newEntry1 = {
    datetime: request.body.newDT,
    location: request.body.location,
    temperature: request.body.temp,
  };
  projectData.push(newEntry1);
  response.send(ProjectData);
}
