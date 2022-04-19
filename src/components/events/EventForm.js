//module programmed by SC; EventForm component allows user to create/add a new event
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { addEvent } from '../../modules/EventManager';
import './EventForm.css'

export const EventForm =() => {
    const [event, setEvent] = useState({
        userId: parseInt(sessionStorage.getItem("nutshell_user")),
        description: "",
        location: "",
        timestamp: Date.now(),
        eventDate: ""
    });
//state will contain both event data as well as isLoading
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();
    const newEvent = { ...event}
//constrolled component--what is in state
    const handleEventDescriptionChange = ( e ) => {
        newEvent.description = e.target.value
    setEvent(newEvent)

    }
    const handleEventAddressChange = ( e ) => {
        newEvent.location = e.target.value
    setEvent(newEvent)

    }
    const handleEventDateChange = ( e ) => {
        newEvent.eventDate = e.target.value
        
    setEvent(newEvent)
    


    }
    const handleClickSaveEvent = (e) => {
        e.preventDefault() //prevents browser from submitting form until ready
        addEvent(event)
        .then(() => navigate("/events"))
        
    }

    return (
    <form className="eventForm">
			<h3 className="eventForm__title">Create New Event</h3>
			<fieldset>
				<div className="form-group">
					<label htmlFor="description"> Description:</label>
					<input type="text" id="name" onChange={handleEventDescriptionChange} required autoFocus className="form-control" placeholder="Event name" value={event.description} />
				</div>
			</fieldset>
			<fieldset>
				<div className="form-group">
					<label htmlFor="location">Event Location:</label>
					<input type="text" id="address" onChange={handleEventAddressChange} required autoFocus className="form-control" placeholder="Event address" value={event.location} />
				</div>
			</fieldset>
            <fieldset>
				<div className="form-group">
					<label htmlFor="date">Date of Event:</label>
					<input placeholder="YYYY-MM-DD" type="text" id="eventDate" onChange={handleEventDateChange} required autoFocus className="form-control" value={event.eventDate} /> 
                    
                    
				</div>
			</fieldset>
            <button type="button" className="btn btn-primary"
				onClick={handleClickSaveEvent}>
				Save Event
          </button>
		</form>
	)
 }
