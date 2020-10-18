/* Global Variables */

// Create a new date instance dynamically with JS
let d = new Date();
let newD = d.getFullYear() + "-" + d.getMonth() + "-" + d.getDate();
let newT = d.getHours() + ":" + d.getMinutes();
let newDT = newD + " " + newT;

// Personal API Key for OpenWeatherMap API - check id in API docs
const URL1 = "http://api.openweathermap.org/data/2.5/weather?zip=";
const URL2 = ",us&appid=";
const APIKey = "edfb13aa9da3f0d921fa47628c27770b";

// Event listener to add function to existing HTML DOM element

document.getElementById("generate").addEventListener("click", create);

/* Function called by event listener */

function create() {
  let userfeelings = document.getElementById("feelings").value;
  let Zip = document.getElementById("zip").value; //22301 example
  let apicall = URL1 + Zip + URL2 + APIKey;

  getWeather(apicall)
    .then((data)=> {
      console.log(data);
      if (String(data.cod) === '404' || String(data.cod) === '400') {
        alert(data.message);
      } else {
        postData('/add', {
          location: data.name,
          temp: data.main.temp
        });
      }
    }).then(getData('/all'));
}

//

/* Function to GET Web API Data*/

const getWeather = async (apicall)=> {
  const response = await fetch(apicall);
  try {
    let data = await response.json();
    return data;
  }catch (error) {
    console.log("error", error);
  }
};

/* Function to POST data */

const postData = async (url = "", data = {})=> {
  const response = await fetch(url, {
    method: "POST",
    dataType: "TEXT",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  try {
    const newData = await response.json();
    return newData;
  }catch (error) {
    console.log("error", error);
  }
};

/* Function to GET Project Data */

const getData = async (url = "")=> {
  const response = await fetch(url);
  try {
    let returnData = await response.json();
    document.getElementById("date").innerHTML = 'City Name: ' + returnData[0].city;
    //document.getElementById("temp").innerHTML = 'Date/Time: ' + returnData.newDT;
    //document.getElementById("content").innerHTML = 'Temperature: ' + returnData.temp;
  }catch (error) {
    console.log("error", error);
  }
};
