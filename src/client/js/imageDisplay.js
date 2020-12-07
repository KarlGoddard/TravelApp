function displayImage(res) {

  let cityName = document.getElementById("inputCity").value;
  let countryCode = document.getElementById("inputCountry").value;

  if (res.total > 0) {
    let newImage = res.hits[0].webformatURL;
    let picTags = res.hits[0].tags;
    document.getElementById("pixImage").src = newImage;
    document.getElementById("pixCaption").innerHTML = 'An image of your destination';
    document.getElementById("imgTags").innerHTML = 'Tags for this image (' +picTags+')';
  } else {
    document.getElementById("pixCaption").innerHTML = 'Sorry, no images available of your destination';
  }
}

export { displayImage }
