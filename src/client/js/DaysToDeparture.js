function daysToDeparture(dte) {

  console.log('Departure date is ' + dte);

  let currentDate = new Date();
  currentDate.setDate(minDate.getDate());

  let timeDiff = Math.abs(dte.getTime() - currentDate.getTime());
  let diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));

  console.log('Days to departure is ' + diffDays);
  return diffDays;
}

export { daysToDeparture }
