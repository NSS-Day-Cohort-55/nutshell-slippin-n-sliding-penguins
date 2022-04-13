import "./Dashboard.css"

export const Dashboard = () => {

    return (
        <>
            <div className="dash_weather">
                <h2>Today's Weather Here</h2>
            </div>
            <div className="dash_main">
                <div className="dash_events">events go here</div>
                <div className="dash_news">News goes here</div>
                <div className="dash_friends">friends go here</div>                         
            </div>
        </>
    )

}