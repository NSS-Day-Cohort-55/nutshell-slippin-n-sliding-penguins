//This is built to display the current wether on the dashboard
//It will check if the user has nay values in city and state
//If yes, the call is made and the weather loads
//If no the user inputs thier location

import React, { useEffect, useState } from "react";
import { getUserById } from "../../../modules/weatherManager";


export const DashWeather = () => {

    const [location, setLocation] = useState({
        state:"",
        city:""
    })

    //This gets the sessionStorage User Id, needed to make the fetchcall
    const theUsersId = sessionStorage.getItem("nutshell_user")
    const fillInLocationInfo =() => {
        getUserById(theUsersId).then(userObject => {
            const locationObject={
                state: userObject.state,
                city:userObject.city
            }
            setLocation(locationObject)
        })
    }

    useEffect(() => {
        fillInLocationInfo();
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
                {?(location.city && location.state)(
                    < SeeYourWeather />
                ):{< AskForLocation/>}}
            
        
            </div>
        </>
    )
}