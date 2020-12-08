function inputChecker(cityName,countryName,depDate) {
if (cityName == "" || countryName == "" || depDate == "" ) {
    return false;
    } else {
      return true;
    }
}

export { inputChecker }
