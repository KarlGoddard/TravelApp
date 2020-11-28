function minMaxDates() {

  let minDate = new Date();
  minDate.setDate(minDate.getDate());
  let maxDate = new Date();
  maxDate = minDate;

  let minDateFormat = formatDate(minDate);
  let maxDateFormat = formatDate(addDays(maxDate,30));

  function formatDate(date) {
    return date.getFullYear() + '-' + (date.getMonth() +1) + '-' + date.getDate();
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
