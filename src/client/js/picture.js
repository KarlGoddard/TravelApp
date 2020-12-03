function getPicture(resFromGeoCall) {

  // check what text was put into the form field
  // let Lat = resFromGeoCall.geonames[0].lat;
  // let Lon = resFromGeoCall.geonames[0].lng;
  // let bodyText = `lat=${Lat}&lon=${Lon}`;
  //
  //     fetch('http://localhost:8082/pix',{
  //     method: "POST",
  //     credentials: 'same-origin',
  //     headers: {
  //     'Content-Type': 'text/plain'
  //     },
  //     body: bodyText
  //     })
  //     .then((res) => res.json())
  //     .then(function(res) {
  //         // let place = res.geonames[0].countryName;
  //         // document.getElementById('bbb').innerHTML = res.geonames[0].countryName;
  //         console.log(res)
  //         //document.getElementById('bbb').innerHTML = res.geonames[0].lng
  //       })
  //       .catch((error) =>{
  //         console.log(error);
  //       });
}

export { getPicture }
