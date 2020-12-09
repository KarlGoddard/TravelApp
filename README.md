# Travel App Capstone Project

## Introduction
This project delivers an asynchronous web app that uses a destination and date input by the user to display current weather if they are set to travel in 7 days or a weather forecast if more than 7 days.  To enhance the app, a supporting image of either the destination city or country is concurrently displayed.

## Dependencies
You are required to have Node installed in the project root folder.
Node is available for download from https://nodejs.org/en/download/
install dependencies listed in the package.json file.

## Running the web app
The project is set to operate from your local server.
$ npm run prod-build : for production node
$ npm run prod-dev : for development mode
$ npm run : starts the server

## Access the web app
Go to http://localhost:8082

## API References
For destination location details (lat and long) extraction
https://www.geonames.org/export/web-services.html
For weather data extraction
https://www.weatherbit.io/api/weather-current
https://www.weatherbit.io/api/weather-forecast-16-day
For supporting image extraction
https://pixabay.com/api/docs/
3 x Keys to the above APIs are supplied in the .env file.

## Key files
- formDate.js.  On clicking the date entry field, this script is triggered and assigns the 30 day range to min and max date input.
- form.js. Handles the submission and verifies 3 entries are provided (using inputCheck.js).  It triggers a call to the geonames API.  The response is passed to weather.js and picture.js to retrieve weather and image data from the respective APIs.
- daysToDeparture.js.  Confirms in the UI how many days until departure and determines whether a post request for current or future weather is called.  It is referenced by weatherDisplay.js for the UI to determine if current or forecast data is to be displayed and if navigation is required (for forecast data only)
- weather.js.  Determines if a forecast or current weather is required and calls the appropriate  API request
- weatherDisplay.js.  Populates the weather UI based on data returned by weather.js and builds navigation if it is a forecast.
- picture.js.  If an API image request for the destination city is unsuccessful an image for the country is returned instead.
- imageDisplay.js.  Populates the image UI and supporting text based on data returned by picture.js

## Using the web app
### input
The user is presented with 3 input fields. All 3 fields are required.
- Destination City.  This is used to visit the geonames API and source the lat/long location of the destination.  This is then passed to the Weatherbit API to source a weather forecast or current weather.  This input is also used to source an image using the Pixabay API.
- Destination Country.  In the event the user enters an obscure/minor location, this input is used as an alternative/backup to provide a country image, if the destination city does not source an image.
- Departure Date.  This is currently restricted to a 30 day date range, from today to 30days in the future.  If the user, inputs a date within 7 days, current weather information is retrieved, if more than 7 days, a (multiple date) weather forecast is retrieved.

### on submit
- the weather section will populate.  If it is current weather, navigation is hidden.  If it is a forecast, navigation is enable to step through each date of the forecast.
- the image field will populate with an image of the destination city or country and details of the image tags (in the event that the image is unrecognisable, it may assist the user in establishing a link with the location)

## For REVIEWER
Extend options included are:
- country image is displayed if a destination city image cannot be found for obscure locations
- forecast is extracted for multiple days
- icons incorporated into the forecast/current weather
