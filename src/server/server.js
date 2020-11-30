const dotenv = require('dotenv')
dotenv.config()

const geoAPIKey = process.env.Geo_API_KEY
const weatherAPIKey = process.env.Weather_API_KEY
const pixAPIKey = process.env.Pix_API_KEY

const geoURL = 'http://api.geonames.org/searchJSON?'
const weatherCurrentURL = 'https://api.weatherbit.io/v2.0/current?'
const weatherForecastURL = 'https://api.weatherbit.io/v2.0/forecast/daily?'
const pixURL = 'https://pixabay.com/api/?key='

const fetch = require("node-fetch");

var path = require('path')
const express = require('express')

const app = express()
app.use(express.static('dist'))

const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.text())

const cors = require('cors')
app.use(cors())

// console.log(__dirname)
// console.log(`Your API key is ${process.env.API_KEY}`)

// designates what port the app will listen to for incoming requests
app.listen(8082, function () {
    console.log('App listening on port 8082')
})

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})

//get Geo
app.post('/geo', city)

async function city(req, res) {
  let apicall = await fetch(`${geoURL}${req.body}&featureCode=PPL&FcodeName=populatedplace&username=${geoAPIKey}`);
  try {
      if (apicall.status === 200) {
        let data = await apicall.json();
        res.send(data);
        console.log('request is ' + req.body);
        console.log(data);
        console.log(apicall);
      } else {
        console.log('apicall not OK');
      }
  } catch (error) {
    console.log('caught error', error)
  }
}
//
// // post Route B
// app.post('/add', addInfo);
//
// function addInfo(request, response) {
//   console.log(request.body);
//     let newEntry = {
//     zip: request.body.zip,
//     city: request.body.location,
//     date: request.body.date,
//     temp: request.body.temp,
//     feelings: request.body.feelings,
//   };
//   projectData = newEntry;
// }
