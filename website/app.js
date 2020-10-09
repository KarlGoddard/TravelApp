/* Global Variables */

// Personal API Key for OpenWeatherMap API - check id in API docs
const URL1 = 'http://api.openweathermap.org/data/2.5/weather?zip=';
let Zip = document.getElementById('zip').value;
const URL2 = ',us&appid=';
const APIKey = 'edfb13aa9da3f0d921fa47628c27770b';

// Event listener to add function to existing HTML DOM element
document.getElementById('generate').addEventListener('click', createApiCall);

/* Function called by event listener */

function createApiCall() {
  let apicall = URL1 + Zip + URL2 + APIKey;
  console.log(apicall);
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
