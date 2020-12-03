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

app.post('/geo', city)

async function city(req, res) {
  let geoapicall = await fetch(`${geoURL}${req.body}&featureCode=PPL&FcodeName=populatedplace&username=${geoAPIKey}`);
  try {
      if (geoapicall.status === 200) {
        let geodata = await geoapicall.json();
        let destLog = {
          Lat: geodata.geonames[0].lat,
          Lon: geodata.geonames[0].lng,
        };
        destination = destLog;
        res.send(geodata);
      } else {
        console.log('geonames apicall not OK');
      }
  } catch (error) {
    console.log('caught error', error)
  }
}

app.post('/weather', current)

async function current(req,res) {
  let weatherapicall = await fetch(`${weatherCurrentURL}${req.body}&key=${weatherAPIKey}`);//req.body
  try {
      if (weatherapicall.status === 200) {
        let weatherdata = await weatherapicall.json();
        console.log(weatherdata);
      } else {
        console.log('weather apicall not OK');
      }
  } catch (error) {
    console.log('caught error', error)
  }
}

app.post('/pix', picture)

async function picture(req,res) {
  // let Lat = destination.Lat;
  // let Lon = destination.Lon;
  let picapicall = await fetch(`${pixURL}key=${pixAPIKey}&q=${req.body}&image_type=photo&orientation=horixontal&category=places`);//cityname
  try {
      if (picapicall.status === 200) {
        let picdata = await picapicall.json();
        console.log(picdata);
      } else {
        console.log('picture apicall not OK');
      }
  } catch (error) {
    console.log('caught error', error)
  }
}

// async function city(req, res) {
//   let apicall = await fetch(`${geoURL}${req.body}&featureCode=PPL&FcodeName=populatedplace&username=${geoAPIKey}`);
//   try {
//       if (apicall.status === 200) {
//         let data = await apicall.json();
//         res.send(data);
//         console.log(data);
//         let destLog = {
//           Lat: data.geonames[0].lat,
//           Lon: data.geonames[0].lng,
//         };
//         destination = destLog;
//       } else {
//         console.log('apicall not OK');
//       }
//   } catch (error) {
//     console.log('caught error', error)
//   }
// }
