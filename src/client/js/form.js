function handleSubmit(event) {

  event.preventDefault();

  // check what text was put into the form field
  let countryName = document.getElementById("inputCountry").value;

  console.log(countryName);

  if (Client.inputChecker(countryName)) {
  console.log('input check OK');
  //document.getElementById('outcome').innerHTML = 'Valid url.  Please wait while we retrieve the analysis';

      fetch('http://localhost:8082/geo',{
      method: "POST",
      credentials: 'same-origin',
      headers: {
      'Content-Type': 'text/html'
      },
      body: countryName
      })
      .then((res) => res.json())
      .then(function(res) {
          //const ScoreVal = ScoreText(res.score_tag);
          //document.getElementById('score').innerHTML = ScoreVal;
          document.getElementById('aaa').innerHTML = 'it worked';//res.capital;
          // document.getElementById('subjectivity').innerHTML = res.subjectivity;
          // document.getElementById('confidence').innerHTML = res.confidence;
          // document.getElementById('irony').innerHTML = res.irony;
          // document.getElementById('outcome').innerHTML = 'Analysis Complete';
          // return true;
        })
        .catch((error) =>{
          console.log(error);
        });

  } else {
  console.log ('input check NOT OK');
  //document.getElementById('outcome').innerHTML = 'Unable to analysis the url provided.  Please retry your entry ensuring it is a valid url starting with http: or https:';
  // return false;
  }

}

export { handleSubmit }
