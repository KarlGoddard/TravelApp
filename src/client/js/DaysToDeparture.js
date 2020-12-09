/**
todays date and input date are set to midnight
they are compared to derive daysToDeparture
number of days is returned, as well as a textual statement for display
**/

function daysToDeparture(dte) {

  console.log('Departure date is ' + dte);
  let inputDate = new Date(dte).setHours(0,0,0,0);
  let currentDate = new Date().setHours(0,0,0,0);

  let timeDiff = Math.abs(inputDate - currentDate);
  let diffDays = Math.floor(timeDiff / (1000 * 3600 * 24));

  if (diffDays == 0) {
    return [diffDays,'today'];
  } else if (diffDays == 1){
    return [diffDays,'tomorrow'];
  } else {
    return [diffDays,'other'];
  }

}

export { daysToDeparture }
