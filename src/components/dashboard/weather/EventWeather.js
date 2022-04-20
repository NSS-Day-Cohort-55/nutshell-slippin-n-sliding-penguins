import React, { useState, useEffect } from "react";

import * as WeatherDataManager from "../../../modules/WeatherDataManager.js";
import { EventWeatherCard } from "./EventWeatherCard.js";
import { getUserById } from "../../../modules/weatherManager.js";

// get geocode using openweather api then pass that to get weather report to generate weather report data then take that data and turn it into an array of objs to be rendered on the dom
export const EventWeather = ({ differenceInDays }) => {
  console.log(differenceInDays);
  const [weatherArr, setWeatherArr] = useState([]);
  const [location, setLocation] = useState({
    state: "",
    city: "",
  });
  const theUsersId = sessionStorage.getItem("nutshell_user");

  const getWeatherArr = (city, state) => {
    WeatherDataManager.getGeocode(city, state).then((parsedResponse) => {
      WeatherDataManager.getWeatherReport(
        parsedResponse[0].lat,
        parsedResponse[0].lon
      )
        .then((parsedResponse) => {
          let newWeatherArr = [];
          for (var i = 0; i < parsedResponse.daily.length; i++) {
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
          setWeatherArr(newWeatherArr);
        });
    });
  };

  useEffect(() => {
    getUserById(theUsersId)
      .then((userObject) => {
        const locationObject = {
          state: userObject.state,
          city: userObject.city,
        };
        setLocation(locationObject);
        return locationObject;
      })
      .then((loc) => {
        getWeatherArr(loc.city, loc.state);
      });
  }, []);

  if (differenceInDays > 7) {
    return (
      <>
        <div className="articleCardsHolder">
          <h2>This date is too far into the future to show the weather</h2>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="articleCardsHolder">
          {weatherArr.map((singleWeather, index) => {
            if (index === differenceInDays) {
              return (
                <EventWeatherCard
                  weatherObj={singleWeather}
                  key={singleWeather.id}
                />
              );
            }
          })}
        </div>
      </>
    );
  }
};
