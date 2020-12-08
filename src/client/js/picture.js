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
