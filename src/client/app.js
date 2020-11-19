/* Global Variables */

// Create a new date instance dynamically with JS
let d = new Date();
let newD = d.getFullYear() + "-" + d.getMonth() + "-" + d.getDate();

// Event listener to add function to existing HTML DOM element

document.getElementById("generate").addEventListener("click", create);

/* Function to GET Web API Data*/

// const getWeather = async (apicall)=> {
//   const response = await fetch(apicall);
//   try {
//     let data = await response.json();
//     return data;
//   }catch (error) {
//     console.log("error", error);
//   }
// };

/* Function to POST data */

// const postData = async (url = "", data = {})=> {
//   const response = await fetch(url, {
//     method: "POST",
//     dataType: "TEXT",
//     credentials: "same-origin",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(data),
//   });
//   try {
//     const newData = await response.json();
//     return newData;
//   }catch (error) {
//     console.log("error", error);
//   }
// };

/* Function to GET Project Data */

// const getData = async (url = "")=> {
//   const response = await fetch(url);
//   try {
//     let returnData = await response.json();
//     document.getElementById("location").innerHTML = 'ZIP Code: ' + returnData.zip + '   CITY Name: ' + returnData.city;
//     document.getElementById("date").innerHTML = 'Date: ' + returnData.date;
//     document.getElementById("temp").innerHTML = 'Temperature: ' + returnData.temp;
//     document.getElementById("content").innerHTML = 'Your feelings were: ' + returnData.feelings;
//   }catch (error) {
//     console.log("error", error);
//   }
// };
