function handleSubmit(event) {

  event.preventDefault();

  // check what text was put into the form field
  let cityName = document.getElementById("inputCity").value;
  let countryCode = document.getElementById("inputCountry").value;
  let depDate = document.getElementById("depDate").value;
  let bodyText = `name_equals=${cityName}&countryCode=${countryCode}`;
  let daysToGo = Client.daysToDeparture(depDate);
  let daysNumber = daysToGo[0];
  let daysText = daysToGo[1];

  if (Client.inputChecker(cityName,depDate)) {
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
               if (daysNumber < 8) {
                 Client.getWeather(res)
               } else {
               //document.getElementById('bbb').innerHTML = res.geonames[0].lng
                 Client.getForecast(res);
               };
            })
          .then(function(cityName) {
              // Client.getPicture(cityName)
              console.log(`pix api call for ${cityName}`)
            })
          .catch((error) =>{
              console.log(error);
          });

  } else {
  console.log ('input check NOT OK');
  document.getElementById('inputCheck').innerHTML = 'Please ensure you provide a Destination City and Departure Date, then retry';
  // return false;
  }
}

export { handleSubmit }
