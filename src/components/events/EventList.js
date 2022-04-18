//module programmed by SC; should create list of events by passing data to event card

import React, {useState, useEffect} from 'react';
import { getUserEvents, deleteEvent, getAllEvents } from '../../modules/EventManager';
import { EventCard} from "./EventCard";
import { useNavigate } from 'react-router-dom';
import "./Event.css";



export const EventList = ({handleEdit}) => {

    const [events, setEvents] = useState([]);
    const navigate = useNavigate();
    const getEvents = () => {
        return getAllEvents()
        .then(eventsFromAPI => {
            setEvents(eventsFromAPI)
       })}

   
        
    const handleDeleteEvent = id => {
        deleteEvent(id)
        .then(() => getAllEvents().then(setEvents));
    };

    useEffect(() => {
        getEvents();
    }, []);

    return (
        <>
 <section className="section-content">
     <button type="button"
     className="btn"
     onClick={() => {navigate("/events/create")}}>
    <h3> Add Event </h3>
        </button>
    </section>
        <div className="container-cards">
       {events.map(event=> 
       <EventCard 
       key={event.id} 
       event={event}
       handleEdit={handleEdit}
       handleDeleteEvent= {handleDeleteEvent} />
       )}
        </div>
        </>
    );
       }

