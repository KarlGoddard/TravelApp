function displayWeather(res) {

  let depDate = document.getElementById("depDate").value;
  let daysToGo = Client.daysToDeparture(depDate);
  // let forecastValues = [];
  let daysNumber = daysToGo[0];
  if (daysNumber < 8) {
     currentWeather(res);
  } else {
    //weatherForecast gets values from array object on server.  Pass starting array value of 0
     weatherForecast(0);
  }
}

function twoDec(fig) {
  return fig.toFixed(2);
}

function currentWeather(res) {
  document.getElementById('prevDay').style.display = 'none';
  document.getElementById('nextDay').style.display = 'none';
  document.getElementById('weathertitle').innerHTML = "Today's weather";
  document.getElementById('temp').innerHTML = res.data[0].temp + ' C';
  document.getElementById('rain').innerHTML = twoDec(res.data[0].precip) + ' mm';
  document.getElementById('clouds').innerHTML = res.data[0].clouds + ' %';
  document.getElementById('wind').innerHTML = twoDec(res.data[0].wind_spd) + ' kts';
  document.getElementById('snow').innerHTML = res.data[0].snow +' %';
}

function weatherForecast(forecastDay) {
  let x = Number(forecastDay);
  let p = (x-1);
  let n = (x+1);
  const buttonPrevText = '<button id="prevDay" type="submit" value="Submit" onclick="return Client.weatherForecast('+ p +')"onsubmit="return Client.weatherForecast('+ p +')"></button>';
  const buttonNextText = '<button id="nextDay" type="submit" value="Submit" onclick="return Client.weatherForecast('+ n +')"onsubmit="return Client.weatherForecast('+ n +')"></button>';
  const getForecast = async (url = "",)=> {
    const response = await fetch(url);
    try {
      let forecastData = await response.json();
      //navigation click actions
      document.getElementById('navPrev').innerHTML = buttonPrevText;
      document.getElementById('navNext').innerHTML = buttonNextText;
      //navigation button labels
      if (x == 0) {
        document.getElementById('prevDay').innerHTML = '';
        document.getElementById('nextDay').innerHTML = 'Day ' + (n+1) + ' >>';
      } else if (x > 13) {
        document.getElementById('prevDay').innerHTML = '<< Day ' + x;
        document.getElementById('nextDay').innerHTML = '';
      } else {
        document.getElementById('prevDay').innerHTML = '<< Day ' + x;
        document.getElementById('nextDay').innerHTML = 'Day ' + (n+1) + ' >>';
      }
      //show forecast values
      document.getElementById('weathertitle').innerHTML = 'Daily forecast for ' + forecastData[x].date;
      document.getElementById('temp').innerHTML = forecastData[x].temp + ' C';
      document.getElementById('rain').innerHTML = twoDec(forecastData[x].precip) + ' mm';
      document.getElementById('clouds').innerHTML = forecastData[x].clouds + ' %';
      document.getElementById('wind').innerHTML = twoDec(forecastData[x].wind) + ' kts';
      document.getElementById('snow').innerHTML = forecastData[x].snow + ' %';
    } catch (error) {
        console.log("error", error);
    }
  };
    getForecast('/forecastValues')
}

export { displayWeather };
export { currentWeather };
export { weatherForecast };
