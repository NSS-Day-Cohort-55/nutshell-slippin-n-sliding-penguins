
// import { weatherKey }  from "../apiKeys";

// let lat = 0;
// let lon = 0;

// export const getGeocode = (city, state) => {
//   return fetch(
//     `http://api.openweathermap.org/geo/1.0/direct?q=${city},${state},USA&limit=1&appid=${weatherKey()}`
//   )
//     .then((response) => response.json())
//     .then((json) => {
//       // take latitude and longitude to be passed later to get weather report.
//       let coordinateObject= {
//         lon:json[0].lon,
//         lat:json[0].lat
//       }
      
//       return coordinateObject;
//     });
// };





// //
// export const getWeatherReport = (latitude, longitude) => {
//   return fetch(
//     `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=current,minutely,hourly,alerts&appid=${weatherKey()}&units=imperial`
//   )
//     .then((response) => response.json())
//     .then((json) => {
//       return json;
//     });
// };

//http://api.openweathermap.org/geo/1.0/direct?q=Nashville,TN,USA&limit=5&appid=4528e6e6fa6c759c6930d98771fb8251
