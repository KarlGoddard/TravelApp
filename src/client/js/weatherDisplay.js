function displayWeather(res) {

  let depDate = document.getElementById("depDate").value;
  let daysToGo = Client.daysToDeparture(depDate);
  // let forecastValues = [];
  let daysNumber = daysToGo[0];
  if (daysNumber < 8) {
     currentWeather(res);
  } else {
     // forecastValues = populateArray(res);
     // weatherForecast(forecastValues);
     weatherForecast(0);
  }
}

function currentWeather(res) {
  document.getElementById('prevDay').style.display = 'none';
  document.getElementById('nextDay').style.display = 'none';
  document.getElementById('weathertitle').innerHTML = "Today's weather";
  document.getElementById('rise').innerHTML = res.data[0].sunrise;
  document.getElementById('set').innerHTML = res.data[0].sunset;
  document.getElementById('temp').innerHTML = res.data[0].temp + ' Celcius';
  document.getElementById('rain').innerHTML = res.data[0].precip + ' mm';
  document.getElementById('clouds').innerHTML = res.data[0].clouds + ' %';
  document.getElementById('wind').innerHTML = res.data[0].wind_spd + ' kts';
  document.getElementById('snow').innerHTML = res.data[0].snow +' %';
}

// function populateArray(res) {
//   let forecastArray = [];
//   const max = 15;
//   for (let i = 0; i <= max; i++) {
//     let temp = res.data[i].temp;
//     let precip = res.data[i].precip;
//     let clouds = res.data[i].clouds;
//     forecastArray.push({ temp, precip, clouds })
//   };
//   return forecastArray;
// }

// function weatherForecast(fcast) {
  //document.getElementById('weathertitle').innerHTML = "THE 16 day forecast from " + forecastValues[0].datetime;
  // document.getElementById('temp').innerHTML = fcast[1].temp;
  // document.getElementById('rise').innerHTML = fmt(res.data[x].sunrise_ts);
  // document.getElementById('set').innerHTML = fmt(res.data[x].sunset_ts);
  // document.getElementById('temp').innerHTML = res.data[x].temp + ' Celcius';
  // document.getElementById('rain').innerHTML = res.data[x].precip + ' mm';
  // document.getElementById('clouds').innerHTML = res.data[x].clouds + ' %';
  // document.getElementById('wind').innerHTML = res.data[x].wind_spd + ' kts';
  // document.getElementById('snow').innerHTML = res.data[x].snow +' %';
//

function fmt(dte) {
  let inputDate = new Date(dte).getTime();
  // let newDate = new Date(inputDate);
  // let dateChars = newDate.toString();
  // let a = dateChars.substring(0,4);
  // let b = dateChars.substring(8,11);
  // let c = dateChars.substring(4,7);
  // return a+b+c;
  return inputDate;
}

function weatherForecast (forecastDay) {
  let x = Number(forecastDay);
  const getForecast = async (url = "",)=> {
    const response = await fetch(url);
    try {
      let forecastData = await response.json();
      if (x == 0) {
        document.getElementById('prevDay').innerHTML = '';
        document.getElementById('nextDay').innerHTML = 'Day ' + (x+1) + ' >>';
      } else if (x > 14) {
        document.getElementById('prevDay').innerHTML = '<< Day ' + (x-1);
        document.getElementById('nextDay').innerHTML = '';
      } else {
        document.getElementById('prevDay').innerHTML = '<< Day ' + (x-1);
        document.getElementById('nextDay').innerHTML = 'Day ' + (x+1) + ' >>';
      }
      document.getElementById('temp').innerHTML = forecastData[x].temp;
      document.getElementById('rain').innerHTML = forecastData[x].precip;
      document.getElementById('clouds').innerHTML = forecastData[x].clouds;
    } catch (error) {
        console.log("error", error);
    }
  };
    getForecast('/forecastValues')
}

export { displayWeather };
export { currentWeather };
export { weatherForecast };
