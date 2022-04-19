//THis will structure the dashboard and serve as a staging area

import "./Dashboard.css";
import { FriendsListDashboard } from "../friends/FriendsListDashboard";
import { ArticleList } from "./articles/ArticleList";
import { EventList } from "../events/EventList.js";
import {RushayDashWeather } from "./weather/RushayDashWeather"

export const Dashboard = () => {
  return (
    <>
        <div className="dash_weather">
            <h2>Today's Weather Here</h2>
            <RushayDashWeather/>
        </div>

        <div className="dash_main">
                <div className="dash_events">
                <EventList />{" "}
                </div>

                <div className="dash_news">
                <ArticleList />
                </div>

                <div className="dash_friends">
                {" "}
                <FriendsListDashboard />
                </div>       
        </div>
    </>
    )
}





