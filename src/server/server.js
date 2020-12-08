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

app.listen(8082, function () {
    console.log('App listening on port 8082')
})

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})

app.post('/geo', city)

async function city(req, res) {
  let geoapicall = await fetch(`${geoURL}${req.body}&featureCode=PPL&FcodeName=populatedplace&username=${geoAPIKey}`);
  try {
      let geodata = await geoapicall.json();
      if (geoapicall.status === 200) {
      res.send(geodata);
      console.log(geodata);
      } else {
      console.log('geonames apicall not OK');
      }
  } catch (error) {
    console.log('caught error', error)
  }
}

app.post('/weather', current)

async function current(req,res) {
  let weatherapicall = await fetch(`${weatherCurrentURL}${req.body}&key=${weatherAPIKey}`);
  try {
      if (weatherapicall.status === 200) {
        let weatherdata = await weatherapicall.json();
        res.send(weatherdata);
        console.log(weatherdata);
      } else {
        console.log('weather apicall not OK');
      }
  } catch (error) {
    console.log('caught error', error);
  }
}

let forecastArray = [];

app.post('/forecast', future)

async function future(req,res) {
  let forecastapicall = await fetch(`${weatherForecastURL}${req.body}&key=${weatherAPIKey}`);
  try {
      if (forecastapicall.status === 200) {
        let weatherdata = await forecastapicall.json();
        res.send(weatherdata);
        //console.log(weatherdata);
        let forecastValues = [];
        const max = 15;
        for (let i = 0; i <= max; i++) {
            let date = weatherdata.data[i].datetime;
            let temp = weatherdata.data[i].temp;
            let precip = weatherdata.data[i].precip;
            let clouds = weatherdata.data[i].clouds;
            let wind = weatherdata.data[i].wind_spd;
            let snow = weatherdata.data[i].snow;
            // let rise = weatherdata.data[i].sunrise_ts;
            // let set = weatherdata.data[i].sunset_ts;
            forecastValues.push({ date, temp, precip, clouds, wind, snow })
            };
        forecastArray = forecastValues;
    //     let newEntry = {
    // zip: request.body.zip,
    // city: request.body.location,
    // date: request.body.date,
    // temp: request.body.temp,
    // feelings: request.body.feelings,
      } else {
        console.log('weather apicall not OK');
      }
  } catch (error) {
    console.log('caught error', error);
  }
}

app.get('/forecastValues', function (request, response) {
    response.send(forecastArray);
  });

app.post('/pix', picture)

async function picture(req,res) {
  // let Lat = destination.Lat;
  // let Lon = destination.Lon;
  let picapicall = await fetch(`${pixURL}${pixAPIKey}&q=${req.body}&image_type=photo&orientation=horixontal&category=places&per_page=3`);//cityname
  try {
      if (picapicall.status === 200) {
        let picdata = await picapicall.json();
        console.log(picdata);
        res.send(picdata);
      } else {
        console.log(picapicall);
        console.log('picture apicall not OK');
      }
  } catch (error) {
    console.log('caught error', error)
  }
}
