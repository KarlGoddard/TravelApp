function minToday() {

  //event.preventDefault();

  // let today = new Date();
  // let dd = today.getDate();
  // let mm = today.getMonth()+1;
  // let yyyy = today.getFullYear();
  //
  // if(dd<10){
  //         dd='0'+dd
  //     }
  //     if(mm<10){
  //         mm='0'+mm
  //     }
  //
  // today = yyyy+'-'+mm+'-'+dd;
  // document.getElementById("depDate").setAttribute("min", today);

  let minDate = new Date();
  minDate.setDate(minDate.getDate());
  let maxDate = new Date();
  maxDate = minDate;

  let minDateFormat = formatDate(minDate);
  let maxDateFormat = formatDate(addDays(maxDate,30));

  // function formatDate(date) {
  //     return (date.getMonth() + 1) + '-' + date.getDate() + '-' + date.getFullYear();
  // }

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
// document.getElementById('ccc').innerHTML = minDate;
// document.getElementById('bbb').innerHTML = maxDate;

}

export { minToday }
