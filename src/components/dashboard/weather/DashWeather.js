//This is built to display the current wether on the dashboard
//It will check if the user has nay values in city and state
//If yes, the call is made and the weather loads
//If no the user inputs thier location

import React, { useEffect, useState } from "react";
import { getUserById } from "../../../modules/weatherManager";
import { renderDailyWeather } from "../../../weatherExample/RenderWeather";
import { DailyWeatherReport } from "../../../weatherExample/WeatherCardHTML";
import { getGeocode, getWeatherReport } from "../../../weatherExample/WeatherDataManager";


export const DashWeather = () => {

    const [location, setLocation] = useState({
        state:"",
        city:""
    })
    const [ weather, setWeather] = useState( {
        weather:"",
        iconUrl:"",
        tempHi:"",
        tempLow:"",
        date:""
    })

    //This gets the sessionStorage User Id, needed to make the fetchcall
    const theUsersId = sessionStorage.getItem("nutshell_user")
    // const fillInLocationInfo =() => {
    //     getUserById(theUsersId).then(userObject => {
    //         const locationObject={
    //             state: userObject.state,
    //             city:userObject.city
    //         }
    //         setLocation(locationObject)
    //     })
    // }

  

    useEffect(() => {
        getUserById(theUsersId).then(userObject => {
            const locationObject={
                state: userObject.state,
                city:userObject.city
            }
            setLocation(locationObject)
            return locationObject
        })
        .then((location) =>{
            console.log(location)
           getGeocode(location.city, location.state)
           .then((parsedResponse) => {
                return getWeatherReport(parsedResponse.lat, parsedResponse.lon) 
                  
            })
            .then((parsedResponse) => {
                let weatherObject = {
                  weather: parsedResponse.daily[0].weather[0].main,
                  iconUrl: `http://openweathermap.org/img/wn/${parsedResponse.daily[0].weather[0].icon}@2x.png`,
                  tempHi: `${parseInt(parsedResponse.daily[0].temp.max)}°F`,
                  tempLow: `${parseInt(parsedResponse.daily[0].temp.min)}°F`,
                  date: `${parsedResponse.daily[0].dt}`,
                }
                setWeather(weatherObject)
            })

        })
        console.log(weather)
        
    }, []);



    const AskForLocation = () => {
        return(
            <>
                <h3>Sorry, we can't tell you what the weather is like till we</h3>
                <h3>know where you are!</h3>
            </>
        )
    }

    const SeeYourWeather =()=> {
        return(
            <>
                <h2>Today's weather is bright and sunny!</h2>
            </>
        )
    }



    return(
        <>
            <div>
                
                < SeeYourWeather />
                < AskForLocation/>
                <DailyWeatherReport weatherObject={weather}/>
            
        
            </div>
        </>
    )
}