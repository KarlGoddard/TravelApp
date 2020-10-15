/* Global Variables */

// Create a new date instance dynamically with JS
let d = new Date();
let newD = d.getFullYear() + '-' + d.getMonth() + '-' + d.getDate();
let newT = d.getHours() + ':' + d.getMinutes();
let newDT = newD + ' ' + newT;

// Personal API Key for OpenWeatherMap API - check id in API docs
const URL1 = 'http://api.openweathermap.org/data/2.5/weather?zip=';
const URL2 = ',us&appid=';
const APIKey = 'edfb13aa9da3f0d921fa47628c27770b';

// Event listener to add function to existing HTML DOM element
document.getElementById('generate').addEventListener('click', create);

/* Function called by event listener */

function create() {
  let userfeelings = document.getElementById('feelings').value;
  let Zip = document.getElementById('zip').value; //22301 example
  let apicall = URL1 + Zip + URL2 + APIKey;
  console.log(apicall);
  getWeather(apicall)
  .then(function (data) {
      console.log(data);
      if (Number(data.cod)) {
        alert(data[message]);
      } else {
        postData('/add', {
          newDT: newDT,
          location: data[name],
          temp: data[main.temp],
        }).then(console.log('hello'));
      };
    });
}

/* Function to GET Web API Data*/

const getWeather = async (apicall)=> {
  const response = await fetch(apicall);
  try {
    const data = await response.json();
    return data;
  }catch (error) {
    console.log('error', error);
  }
};

/* Function to POST data */

const postData = async (url = '', data = {})=> {
  const response = await fetch(url, {
    method: 'POST',
    dataType: 'JSON',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  try {
    const newData = await response.json();
    //console.log(data);
    return newData;
  }catch (error) {
    console.log('error', error);
  }
};

/* Function to GET Project Data */

// const getData = async (url = '', data = {})=> {
//   const response = await fetch(url, {
//     method: 'GET',
//     dataType: 'JSON',
//     credentials: 'same-origin',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(data),
//   });
//   try {
//     const newData = await response.json();
//     console.log(newData);
//     return newData;
//   }catch (error) {
//     console.log('error', error);
//   }
// };
