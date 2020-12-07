function displayImage(res) {

  if (res == 'noPic') {
    //set defaults
  } else {

  let newImage = res.hits[0].webformatURL;
  let picTags = res.hits[0].tags;
  let cityName = document.getElementById("inputCity").value;
  let countryCode = document.getElementById("inputCountry").value;

  document.getElementById("pixImage").src = newImage;
  document.getElementById("pixCaption").innerHTML = 'An image of your destination, ' + cityName;
  document.getElementById("imgTags").innerHTML = picTags;
// document.getElementsByClassName('place').style.backgroundImage = "url(" + newImage + ")";
// //
// // let images = ['globe_small.jpg', 'weather.png'];
// //
// // document.getElementsByClassName('place').style.backgroundImage = "url(" + images[1] + ")";
//
// //document.getElementById('bbb').innerHTML = res.data[0].city_name;
  }
}

export { displayImage }
