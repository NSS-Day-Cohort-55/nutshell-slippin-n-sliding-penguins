import React, { useState, useEffect } from "react";

import * as WeatherDataManager from "../modules/WeatherDataManager.js";
import { EventWeatherCard } from "./WeatherCard.js";

// get geocode using openweather api then pass that to get weather report to generate weather report data then take that data and turn it into an array of objs to be rendered on the dom
export const WeatherList = (differenceInDays) => {
  const [weatherArr, setWeatherArr] = useState([]);

  const getWeatherArr = (city, state) => {
    WeatherDataManager.getGeocode(city, state).then((parsedResponse) => {
      WeatherDataManager.getWeatherReport(
        parsedResponse[0].lat,
        parsedResponse[0].lon
      )
        .then((parsedResponse) => {
          let newWeatherArr = [];
          for (var i = 0; i < parsedResponse.daily.length - 7; i++) {
            newWeatherArr.push({
              id: i,
              weather: parsedResponse.daily[i].weather[0].main,
              iconUrl: `http://openweathermap.org/img/wn/${parsedResponse.daily[i].weather[0].icon}@2x.png`,
              tempHi: `${parseInt(parsedResponse.daily[i].temp.max)}°F`,
              tempLow: `${parseInt(parsedResponse.daily[i].temp.min)}°F`,
              date: `${parsedResponse.daily[i].dt}`,
            });
          }
          return newWeatherArr;
        })
        .then((newWeatherArr) => {
          setWeatherArr(newWeatherArr[differenceInDays]);
        });
    });
  };

  useEffect(() => {
    getWeatherArr("Nashville", "TN");
  }, []);

  return (
    <>
      <div className="articleCardsHolder">
        {weatherArr.map((singleWeather) => (
          <EventWeatherCard weatherObj={singleWeather} key={singleWeather.id} />
        ))}
      </div>
    </>
  );
};
