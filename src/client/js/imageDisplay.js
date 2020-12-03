function displayImage(res) {

//newImage = res.xxx;

document.getElementById("pixImage").src = 'https://image.freepik.com/free-photo/moon_1048-2672.jpg';


//document.getElementById('bbb').innerHTML = res.data[0].city_name;



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
