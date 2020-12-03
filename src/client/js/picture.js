function getPicture() {

  let cityName = document.getElementById("inputCity").value;
  let countryCode = document.getElementById("inputCountry").value;
  let bodyText = cityName;

      fetch('http://localhost:8082/pix',{
      method: "POST",
      credentials: 'same-origin',
      headers: {
      'Content-Type': 'text/plain'
      },
      body: bodyText
      })
      .then((res) => res.json())
      .then(function(res) {
          Client.displayImage(res);
          // let place = res.geonames[0].countryName;
          // document.getElementById('bbb').innerHTML = res.geonames[0].countryName;
          console.log(res)
          //document.getElementById('bbb').innerHTML = res.geonames[0].lng
        })
        .catch((error) =>{
          console.log(error);
        });
}

export { getPicture }
