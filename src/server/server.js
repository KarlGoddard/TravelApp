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

let destination = {};
//get Geo

app.get('/test', function(req, res) {
    res.send(destination);
})

app.post('/geo', city)

async function city(req, res) {
  let apicall = await fetch(`${geoURL}${req.body}&featureCode=PPL&FcodeName=populatedplace&username=${geoAPIKey}`);
  try {
      if (apicall.status === 200) {
        let data = await apicall.json();
        res.send(data);
        console.log(data);
        let destLog = {
          aaa: data.geonames[0].lat,
          bbb: data.geonames[0].lng,
        };
        destination = destLog;
      } else {
        console.log('apicall not OK');
      }
  } catch (error) {
    console.log('caught error', error)
  }
}
