function displayWeather(res) {

  let depDate = document.getElementById("depDate").value;
  let daysToGo = Client.daysToDeparture(depDate);
  let daysNumber = daysToGo[0];
  if (daysNumber < 8) {
     currentWeather();
  } else {
     forecast();
  }

function currentWeather() {
  document.getElementById('aaa').innerHTML = 'current';
}

function forecast() {
  document.getElementById('aaa').innerHTML = 'forecast';
}
// document.getElementById('aaa').innerHTML = 'forecast';
// document.getElementById('bbb').innerHTML = res.data[0].clouds;
// document.getElementById('ccc').innerHTML = res.data[0].wind_spd;
// document.getElementById('ddd').innerHTML = fmt(res.data[0].datetime);
//
// function fmt(dte) {
//   let
//   let a = dte.substring(0,2);
//   let b = dte.substring(3,5);
//   let c = dte.susstring(6,8);
//   return a + b + c;
// }

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

}

export { displayWeather }
