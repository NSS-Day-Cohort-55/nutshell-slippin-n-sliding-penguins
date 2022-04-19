import { settings } from "../Settings.js";

let lat = 0;
let lon = 0;

export const getGeocode = (city, state) => {
  return fetch(
    `http://api.openweathermap.org/geo/1.0/direct?q=${city},${state},USA&limit=1&appid=${settings.weatherKey}`
  )
    .then((response) => response.json())
    .then((json) => {
      // take latitude and longitude to be passed later to get weather report.
      lon = json[0].lon;
      lat = json[0].lat;
      return json;
    });
};

//
export const getWeatherReport = (latitude, longitude) => {
  return fetch(
    `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=current,minutely,hourly,alerts&appid=${settings.weatherKey}&units=imperial`
  )
    .then((response) => response.json())
    .then((json) => {
      return json;
    });
};
