//THis will structure the dashboard and serve as a staging area

import "./Dashboard.css"
import { ArticleList } from "./articles/ArticleList"

export const Dashboard = () => {


    return (
        <>
            <div className="dash_weather">
                <h2>Today's Weather Here</h2>
            </div>
            <div className="dash_main">
                <div className="dash_events">events go here</div>
                <div className="dash_news">< ArticleList/></div>
                <div className="dash_friends">friends go here</div>                         
            </div>
        </>
    )

}