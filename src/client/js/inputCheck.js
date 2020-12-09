/**
This input check confirms that 3 values are provided for all 3 input fields
**/

function inputChecker(cityName,countryName,depDate) {
if (cityName == "" || countryName == "" || depDate == "" ) {
    return false;
    } else {
      return true;
    }
}

export { inputChecker }
