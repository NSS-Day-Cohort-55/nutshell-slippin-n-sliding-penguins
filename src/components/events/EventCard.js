import React from "react";
import "./Event.css";
import { formatMDY } from "../../helpers/formatDate";
import {Link } from "react-router-dom"

export const EventCard = ({event, handleDeleteEvent}) => {
    console.log(event);
    return (
<div className="card">
    <div className="card-content">
    <h3>Event Description: <span className="card-eventdescription">
        {event.description}
      </span></h3>
      <p> Event Date: {event.eventDate}</p>
      <h5>
          <span className="eventcreated-date">{formatMDY(event.timestamp)}</span>
    </h5>
      </div>
      <Link to={`/events/${event.id}`}>
          <button>Event Details</button>
          </Link>
      <button type="button" onClick={() => handleDeleteEvent(event.id)}>Delete Event</button>
      </div>

 
)}


