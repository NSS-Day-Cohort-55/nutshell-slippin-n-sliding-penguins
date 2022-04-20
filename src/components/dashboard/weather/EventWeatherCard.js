import { formatMDY } from "../helpers/formatDate.js";
export const EventWeatherCard = ({ weatherObj }) => {
  return (
    <div>
      <h5 id="date">{formatMDY(weatherObj.date * 1000)}</h5>
      <p id="weather">{weatherObj.weather}</p>
      <img src={`${weatherObj.iconUrl}`} alt="weather icon"></img>
      <p id="tempHi">{weatherObj.tempHi}</p>
      <p id="tempLow">{weatherObj.tempLow}</p>
    </div>
  );
};
