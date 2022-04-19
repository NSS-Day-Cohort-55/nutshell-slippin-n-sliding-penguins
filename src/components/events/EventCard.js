//component programmed by SC; component allows an event card to be created and presented on DOM

import React from "react";
import "./Event.css";
import { formatMDY } from "../../helpers/formatDate";
import {Link } from "react-router-dom"

export const EventCard = ({ index, event, handleEdit, handleDeleteEvent}) => {
    if (index === 0) {
        return (
            <>
    <div className="first-card" id={`event_${event.id}`}>
        <div className="card-content">
        <h6> Event Name: <span className="card-eventdescription">
            {event.description}
          </span></h6>
          <h6> Date: {event.eventDate}</h6>
          <h6>
              <span className="eventcreated-date">{`Posted: ${formatMDY(event.timestamp)}`}</span>
        </h6>
          </div>
          <section className ="card--modifiers">
          <Link to={`/events/${event.id}/edit`}>
              <button id="edit" type="button" >Edit</button>
          </Link>
        
          <button id="delete" type="button" onClick={() => handleDeleteEvent(event.id)}>Delete Event</button>
          </section>
          </div>
          
          </>
     
    )
    } else {
    return (
        <>
<div className="event-card" id={`event_${event.id}`}>
    <div className="card-content">
    <h6> Event Name: <span className="card-eventdescription">
        {event.description}
      </span></h6>
      <h6> Date: {event.eventDate}</h6>
      <h6>
          <span className="eventcreated-date">{`Posted: ${formatMDY(event.timestamp)}`}</span>
    </h6>
      </div>
      <section className ="card--modifiers">
      <Link to={`/events/${event.id}/edit`}>
          <button id="edit" type="button" >Edit</button>
      </Link>
    
      <button id="delete" type="button" onClick={() => handleDeleteEvent(event.id)}>Delete Event</button>
      </section>
      </div>
      
      </>
 
);
}}

