function displayWeather(res) {

  let depDate = document.getElementById("depDate").value;
  let daysToGo = Client.daysToDeparture(depDate);
  let daysNumber = daysToGo[0];
  if (daysNumber < 8) {
     currentWeather(res);
  } else {
     populateArray(res);
     let x = 0;
     weatherForecast(res);
  }
}

function populateArray(res) {
  const forecastArray = [];
  let max = 15;
  for (let i = 0; i <= max; i++) {
    let temp = res.data[i].temp;
    let precip = res.data[i].precip;
    let clouds = res.data[i].clouds;
    forecastArray.push({ temp, precip, clouds })
    }
  return forecastArray;
}

function currentWeather(res) {
  document.getElementById('weathertitle').innerHTML = "Today's weather";
  document.getElementById('rise').innerHTML = res.data[0].sunrise;
  document.getElementById('set').innerHTML = res.data[0].sunset;
  document.getElementById('temp').innerHTML = res.data[0].temp + ' celcius';
  document.getElementById('rain').innerHTML = res.data[0].precip + ' mm';
  document.getElementById('clouds').innerHTML = res.data[0].clouds + ' %';
  document.getElementById('wind').innerHTML = res.data[0].wind_spd + ' kts';
  document.getElementById('snow').innerHTML = res.data[0].snow +' %';
}

function weatherForecast(res,x) {
  document.getElementById('weathertitle').innerHTML = "THE 16 day forecast from " + res.data[x].datetime;
  document.getElementById('rise').innerHTML = fmt(res.data[x].sunrise_ts);
  document.getElementById('set').innerHTML = fmt(res.data[x].sunset_ts);
  document.getElementById('temp').innerHTML = res.data[x].temp + ' celcius';
  document.getElementById('rain').innerHTML = res.data[x].precip + ' mm';
  document.getElementById('clouds').innerHTML = res.data[x].clouds + ' %';
  document.getElementById('wind').innerHTML = res.data[x].wind_spd + ' kts';
  document.getElementById('snow').innerHTML = res.data[x].snow +' %';
}

function fmt(dte) {
  let inputDate = new Date(dte).getTime();
  let newDate = new Date(inputDate);
  let dateChars = newDate.toString();
  let a = dateChars.substring(0,4);
  let b = dateChars.substring(8,11);
  let c = dateChars.substring(4,7);
  return a+b+c;
  //return inputDate;
}

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

export { displayWeather };
export { currentWeather };
export { weatherForecast };
