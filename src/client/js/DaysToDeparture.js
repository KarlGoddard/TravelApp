function daysToDeparture(dte) {

  console.log('Departure date is ' + dte);
  let inputDate = new Date(dte).setHours(0,0,0,0);
  let currentDate = new Date().setHours(0,0,0,0);

  let timeDiff = Math.abs(inputDate - currentDate);
  let diffDays = Math.floor(timeDiff / (1000 * 3600 * 24));

  console.log('Days to departure is ' + (diffDays));

  return diffDays;
}

export { daysToDeparture }
