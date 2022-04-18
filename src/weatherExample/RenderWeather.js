import * as WeatherDataManager from "./WeatherDataManager.js";
import { weatherReport } from "./WeatherCardHTML.js";

const weatherArr = [];

// get geocode using openweather api then pass that to get weather report to generate weather report data then take that data and turn it into an array of objs to be rendered on the dom
export const renderWeather = (city, state) => {
  WeatherDataManager.getGeocode(city, state).then((parsedResponse) => {
    WeatherDataManager.getWeatherReport(
      parsedResponse[0].lat,
      parsedResponse[0].lon
    )
      .then((parsedResponse) => {
        for (var i = 0; i < parsedResponse.daily.length - 3; i++) {
          weatherArr[i] = {
            weather: parsedResponse.daily[i].weather[0].main,
            iconUrl: `http://openweathermap.org/img/wn/${parsedResponse.daily[i].weather[0].icon}@2x.png`,
            tempHi: `${parseInt(parsedResponse.daily[i].temp.max)}°F`,
            tempLow: `${parseInt(parsedResponse.daily[i].temp.min)}°F`,
            date: `${parsedResponse.daily[i].dt}`,
          };
        }
      })
      .then(() => {
        weatherReport(weatherArr);
      });
  });
};
