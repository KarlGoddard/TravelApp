/**
this function extracts the lat and lon values returned by the call to the geonames apicall
it passes those values to the weatherbit api.
Based on how many days until departure (daysToDeparture)
either the /weather or /forecast post call is made.
the weather call returns a single element, the forecast call returns mulitple day forecasts in an array
**/

function getWeather(resFromGeoCall) {

  // check what text was put into the form field
  let Lat = resFromGeoCall.geonames[0].lat;
  let Lon = resFromGeoCall.geonames[0].lng;
  let bodyText = `lat=${Lat}&lon=${Lon}`;
  let depDate = document.getElementById("depDate").value;
  let daysToGo = Client.daysToDeparture(depDate);
  let daysNumber = daysToGo[0];
  let fetchName;
  if (daysNumber < 8) {
    fetchName = 'weather';
  } else {
    fetchName = 'forecast';
  };

      fetch(`http://localhost:8082/${fetchName}`,{
      method: "POST",
      credentials: 'same-origin',
      headers: {
      'Content-Type': 'text/plain'
      },
      body: bodyText
      })
      .then((res) => res.json())
      .then(function(res) {
          Client.displayWeather(res);
        })
      .catch((error) =>{
          console.log(error);
      });
}

export { getWeather }
