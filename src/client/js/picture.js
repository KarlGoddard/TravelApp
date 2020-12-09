/**
This function is first passed the city destination input by the user.
If a call to the pixaby api does not return any matching values (total = 0)
The function is called again with the country parameter instead.
**/

function getPicture(city,country) {


  let bodyText = city;

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
          if (res.total > 0) {
            Client.displayImage(res);
          } else if (res.total == 0) {
            Client.getPicture(country,country);
          } else {
            Client.displayImage(res);
          }
        })
        .catch((error) =>{
          console.log(error);
        });
}

export { getPicture }
