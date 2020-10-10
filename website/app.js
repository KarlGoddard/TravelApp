/* Global Variables */

// Personal API Key for OpenWeatherMap API - check id in API docs
const URL1 = 'http://api.openweathermap.org/data/2.5/weather?zip=';
let Zip = document.getElementById('zip').value; //22301 example
const URL2 = ',us&appid=';
const APIKey = 'edfb13aa9da3f0d921fa47628c27770b';

// Event listener to add function to existing HTML DOM element
document.getElementById('generate').addEventListener('click', createApiCall);

/* Function called by event listener */

function createApiCall() {
  let apicall = URL1 + Zip + URL2 + APIKey;
  console.log(apicall);
  getWeather(apicall);
}

/* Function to GET Web API Data*/

const getWeather = async (apicall)=> {
  const response = await fetch(apicall);
  try {
    const weatherData = await response.json();
    console.log(weatherData);
    return weatherData;
  }catch (error) {
    console.log('error', error);
  }
};

postData('/add', { city: weatherData.name });

/* Function to POST data */

/* Function to GET Project Data */

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth() + '.' + d.getDate() + '.' + d.getFullYear();
