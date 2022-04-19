import { formatDate, formatMDY } from "../helpers/formatDate.js";

let today = new Date();
let fivePlus = new Date(new Date().getTime() + 5 * 24 * 60 * 60 * 1000);

export const weatherReport = (weatherArr) => {
  let weatherElement = document.querySelector(".weather_card_area");
  weatherElement.innerHTML = "";
  let titleElement = document.querySelector(".weather_title");
  titleElement.innerHTML = `<h2>Your Weather Forecast</h2>
  <h2>${formatMDY(today)} - ${formatMDY(fivePlus)}</h2>`;
  weatherArr.forEach((weatherObj) => {
    weatherElement.innerHTML += `<div class="weather_card">
            <h5 id='date'>${formatDate(weatherObj.date)}</h5>
            <p id='weather'>${weatherObj.weather}</p>
            <img src ="${weatherObj.iconUrl}" alt="weather icon">
            <p id='tempHi'>${weatherObj.tempHi}</p>
            <p  id='tempLow'>${weatherObj.tempLow}</p>
            
        </div>`;
  });
};

export const DailyWeatherReport = ({weatherObj}) => {
  return(
    <>
      <div className="weather_card">
        <h5 id='date'>{formatDate(weatherObj?.date)}</h5>
        <p id='weather'>{weatherObj?.weather}</p>
        <img src ={weatherObj.iconUrl} alt="weather icon"></img>
        <p id='tempHi'>{weatherObj?.tempHi}</p>
        <p  id='tempLow'>{weatherObj?.tempLow}</p>
      </div>

    </>
  )
};