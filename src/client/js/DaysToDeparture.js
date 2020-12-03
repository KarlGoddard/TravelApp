function daysToDeparture(dte) {

  console.log('Departure date is ' + dte);
  let inputDate = new Date(dte);
  let currentDate = new Date();

  let timeDiff = Math.abs(inputDate.getTime() - currentDate.getTime());
  let diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));

  console.log('Days to departure is ' + diffDays);
  return diffDays;
}

export { daysToDeparture }
