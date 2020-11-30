function handleSubmit(event) {

  event.preventDefault();

  // check what text was put into the form field
  let cityName = document.getElementById("inputCity").value;
  let countryCode = document.getElementById("inputCountry").value;
  let depDate = document.getElementById("depDate").value;
  let bodyText = `name_equals=${cityName}&countryCode=${countryCode}`;

  if (Client.inputChecker(cityName,depDate)) {
  console.log('input check OK');
  document.getElementById('inputCheck').innerHTML = `Thank you ${depDate}`;


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
          //document.getElementById('bbb').innerHTML = res;
          //const ScoreVal = ScoreText(res.score_tag);
          let place = res.geonames[0].countryName;
          document.getElementById('bbb').innerHTML = res.geonames[0].countryName;
          // document.getElementById('outcome').innerHTML = 'Analysis Complete';
          // return (place, lat, long etc);
        })
        .catch((error) =>{
          console.log(error);
        });

  } else {
  console.log ('input check NOT OK');
  document.getElementById('inputCheck').innerHTML = 'Please ensure you provide a Destination City and a Departure Date and retry';
  // return false;
  }

}

export { handleSubmit }
