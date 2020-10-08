/* Global Variables */

// Personal API Key for OpenWeatherMap API - check id in API docs
const URL = 'http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=';
const APIKey = 'edfb13aa9da3f0d921fa47628c27770b';
const APIName = 'KarlWeatherApp'; //unsure if required
const XXX = 'something to retrieve in API';
// Event listener to add function to existing HTML DOM element
document.getElementById('yyy').addEventListener('click', zzz);


/* Function called by event listener */

function zzz() {
  getWeatherInfo(URL,APIKey,XXX)
}

/* Function to GET Web API Data*/



const postData = async (url = '', data = {})=> {
  console.log(data);
  const response = await fetch(url, {
    method: 'POST',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  try {
    const newData = await response.json();
    console.log(newData);
    return newData;
  }catch (error) {
    console.log('error', error);
  }
};

postData('/add', { answer: 41 });

/* Function to POST data */

/* Function to GET Project Data */

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth() + '.' + d.getDate() + '.' + d.getFullYear();
