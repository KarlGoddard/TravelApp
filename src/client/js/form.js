/**
This function is triggered by clicking the submit button on the input area
input values are captured to determine input is valid and days to Departure
api calls are made for location lat/long (/geo), weather (.getWeather) and picture (.getPicture)
based on the location and days to Departure
the call to the weather api has a dependency on the latitude and longitude returned by
the call to the geo api.  So the weather api is passed the returned parameters from the geo api.
**/

function handleSubmit(event) {

  event.preventDefault();

  // check what text was put into the form field
  let cityName = document.getElementById("inputCity").value;
  let countryName = document.getElementById("inputCountry").value;
  let depDate = document.getElementById("depDate").value;
  let bodyText = `name_equals=${cityName}`;
  let daysToGo = Client.daysToDeparture(depDate);
  let daysNumber = daysToGo[0];
  let daysText = daysToGo[1];

  if (Client.inputChecker(cityName,countryName,depDate)) {
  console.log('input check OK');
      if (daysNumber < 2) {
            document.getElementById('inputCheck').innerHTML = `Thank you. You are travelling to ${cityName} ${daysText}`;
      } else {
            document.getElementById('inputCheck').innerHTML = `Thank you, you depart for ${cityName} in ${daysNumber} days`;
      }

          fetch('http://localhost:8082/geo',{
          method: "POST",
          credentials: 'same-origin',
          headers: {
          'Content-Type': 'text/plain'
          },
          body: bodyText
          })
          .then((res) => res.json())
          .then(function(res) {
              if (res.totalResultsCount == 0) {
                document.getElementById('inputCheck').innerHTML = 'Sorry, the destination is not recognised by Geonames, please retry';
              } else {
              Client.getWeather(res);
              }
          })
          .then(function() {
              Client.getPicture(cityName,countryName);
            })
          .catch((error) =>{
              console.log(error);
          });

  } else {
  console.log ('input check NOT OK');
  document.getElementById('inputCheck').innerHTML = 'Please ensure you provide a Destination City, Country and Departure Date, then retry';
  // return false;
  }
}

export { handleSubmit }
