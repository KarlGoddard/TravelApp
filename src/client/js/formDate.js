function minMaxDates() {

  let minDate = new Date();
  minDate.setDate(minDate.getDate());
  let maxDate = new Date();
  maxDate = minDate;

  let minDateFormat = formatDate(minDate);
  let maxDateFormat = formatDate(addDays(maxDate,30));

  function formatDate(date) {
    let mChars;
    let dChars;
    if ((date.getMonth() +1) < 10 ) {
      mChars = '0' + (date.getMonth() +1);
    } else {
      mChars = (date.getMonth() +1);
    };
    if (date.getDate() < 10 ) {
      dChars = '0' + (date.getDate() +1);
    } else {
      dChars = date.getDate();
    };
    return date.getFullYear() + '-' + mChars + '-' + dChars;
  }

  function addDays(date, days) {
    let result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
  }

  document.getElementById("depDate").setAttribute("min", minDateFormat);
  document.getElementById("depDate").setAttribute("max", maxDateFormat);

}

export { minMaxDates }
