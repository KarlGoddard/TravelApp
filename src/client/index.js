import { handleSubmit } from './js/form'
import { inputChecker } from './js/inputCheck'
import { minMaxDates } from './js/formDate'
import { getWeather } from './js/weather'
import { daysToDeparture } from './js/daysToDeparture'
import { getPicture } from './js/picture'
import { displayWeather } from './js/weatherDisplay'
import { currentWeather } from './js/weatherDisplay'
import { weatherForecast } from './js/weatherDisplay'
import { displayImage } from './js/imageDisplay'

import './styles/style.scss'
import './styles/icons.scss'

import img1 from './img/globe_small.jpg'
import img2 from './img/globe_large.jpg'
import img3 from './img/map_small.jpg'
import img4 from './img/map_large.jpg'

export {
  handleSubmit,
  inputChecker,
  minMaxDates,
  getWeather,
  daysToDeparture,
  getPicture,
  displayWeather,
  currentWeather,
  weatherForecast,
  displayImage
}
