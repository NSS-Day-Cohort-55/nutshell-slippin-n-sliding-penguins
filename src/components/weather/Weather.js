import "./Weather.css";
import { useState, useEffect } from "react";




export const WeatherApp = () => {
//state
const [location, setLocation] = useState("Nashville");
const [locationInfo, setLocationInfo] = useState({});


// const API_KEY = process.env.REACT_APP_API_KEY

const handleFetch = () => {
  
  fetch(
    `"https://api.weatherapi.com/v1/forecast.json?key=4944dd68fcc94c30987220837221704&q=${location}&days=5&aqi=no&alerts=no"`)
 .then((res) => res.json())
   .then((data) => 
   setLocationInfo({
     name: location.name,
     country: location.country,
     farenheit: {
     current: data.current.temp_f,
     high: data.forecast.forcastday[0].day.maxtemp_f,
     low: data.forecast.forecastday[0].daymintemp_f,
     },
     condition: data.current.condition.text
     }));

setLocation("");
   };
     
     
    

      useEffect(() => {
        handleFetch();
      }, []);

  return ( 
   <>
    <div className="search-input">
    <input
      type="text"
      value={location}
      onChange={(evt) => setLocation(evt.target.value)} />
     
      <button
      onClick={handleFetch}>Search</button>
    
     
 </div>
      
<div className="weather-container">
            <div className="top-part">
              <h3>{locationInfo.farenheit?.current}° F</h3>
              <div className="condition-high-low">
                <h3>{locationInfo.condition}</h3>
                <h3>{locationInfo.farenheit?.high}° F</h3>
                <h3>{locationInfo.farenheit?.low}° F</h3>
              </div>
             <h4>{locationInfo.name}, {locationInfo.country}</h4>

            </div>
            </div>
           
          
</>
    )

      }
             
      

