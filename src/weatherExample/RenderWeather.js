import * as WeatherDataManager from "./WeatherDataManager.js";
import { weatherReport, DailyWeatherReport } from "./WeatherCardHTML.js";

let weatherArr = [];

// get geocode using openweather api then pass that to get weather report to generate weather report data then take that data and turn it into an array of objs to be rendered on the dom
export const RenderWeather = (city, state) => {
  WeatherDataManager.getGeocode(city, state).then((parsedResponse) => {
    WeatherDataManager.getWeatherReport(
      parsedResponse[0].lat,
      parsedResponse[0].lon
    ).then((parsedResponse) => {
      for (var i = 0; i < parsedResponse.daily.length - 3; i++) {
        weatherArr[i] = {
          weather: parsedResponse.daily[i].weather[0].main,
          iconUrl: `http://openweathermap.org/img/wn/${parsedResponse.daily[i].weather[0].icon}@2x.png`,
          tempHi: `${parseInt(parsedResponse.daily[i].temp.max)}°F`,
          tempLow: `${parseInt(parsedResponse.daily[i].temp.min)}°F`,
          date: `${parsedResponse.daily[i].dt}`,
        };
      }
    });
  });
  return <>weatherArr.map</>;
};

export const renderDailyWeather = ({ city, state }) => {
  let weatherObject = {
    weather: "",
    iconUrl: "",
    tempHi: "",
    tempLow: "",
    date: "",
  };
  WeatherDataManager.getGeocode(city, state).then((parsedResponse) => {
    WeatherDataManager.getWeatherReport(
      parsedResponse[0].lat,
      parsedResponse[0].lon
    ).then((parsedResponse) => {
      weatherObject = {
        weather: parsedResponse.daily[0].weather[0].main,
        iconUrl: `http://openweathermap.org/img/wn/${parsedResponse.daily[0].weather[0].icon}@2x.png`,
        tempHi: `${parseInt(parsedResponse.daily[0].temp.max)}°F`,
        tempLow: `${parseInt(parsedResponse.daily[0].temp.min)}°F`,
        date: `${parsedResponse.daily[0].dt}`,
      };
    });
  });
  return weatherObject;
};

// dailyWeatherReport(weatherObject);
