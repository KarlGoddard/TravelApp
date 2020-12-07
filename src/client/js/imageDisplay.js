function displayImage(res) {

let newImage = res.hits[0].webformatURL;
let picTags = res.hits[0].tags;
let cityName = document.getElementById("inputCity").value;
let countryCode = document.getElementById("inputCountry").value;

document.getElementById("pixImage").src = newImage;
document.getElementById("pixCaption").innerHTML = 'An image to remind you of ' + cityName;
document.getElementById("imgTags").innerHTML = picTags;
// document.getElementsByClassName('place').style.backgroundImage = "url(" + newImage + ")";
// //
// // let images = ['globe_small.jpg', 'weather.png'];
// //
// // document.getElementsByClassName('place').style.backgroundImage = "url(" + images[1] + ")";
//
// //document.getElementById('bbb').innerHTML = res.data[0].city_name;



// const getData = async (url = "")=> {
//   const response = await fetch(url);
//   try {
//     let returnData = await response.json();
//     document.getElementById("location").innerHTML = 'ZIP Code: ' + returnData.zip + '   CITY Name: ' + returnData.city;
//     document.getElementById("date").innerHTML = 'Date: ' + returnData.date;
//     document.getElementById("temp").innerHTML = 'Temperature: ' + returnData.temp;
//     document.getElementById("content").innerHTML = 'Your feelings were: ' + returnData.feelings;
//   }catch (error) {
//     console.log("error", error);
//   }
// };

}

export { displayImage }
