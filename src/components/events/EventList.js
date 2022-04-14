//module programmed by SC; should create list of events by passing info to event card

import React, {useState, useEffect} from 'react';
import { deleteEvent, getAllEvents } from '../../modules/EventManager';
import { EventCard} from "./EventCard";
import { useNavigate } from 'react-router-dom';



export const EventList = () => {

    const [events, setEvents] = useState([]);
    const navigate = useNavigate();
    const getEvents = () => {
        return getAllEvents()
        .then(eventsFromAPI => {
            setEvents(eventsFromAPI)
        });
    };

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
    Add a New Event
        </button>
    </section>
        <div className="container-cards">
       {events.map(event=> 
       <EventCard 
       key={event.id} 
       event={event.description}
       handleDeleteEvent= {handleDeleteEvent} />
       )}
        </div>
        </>
    );
}
   