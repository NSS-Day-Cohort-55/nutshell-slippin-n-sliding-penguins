//module programmed by SC; EventForm component allows user to create/add a new event
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { addEvent } from '../../modules/EventManager';
import './EventForm.css'

export const EventForm =() => {
    const [event, setEvent] = useState({
        userId: "",
        description: "",
        location: "",
        timestamp: "",
        eventDate: Date.now()
    });
//state will contain both event data as well as isLoading
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();
//constrolled component--what is in state
    const handleControlledInputChange = ( e ) => {
        const newEvent = { ...event}
        let selectedVal = event.target.value  
        //this becomes the field of the value we're editing
        // forms provide values as strings; want to save the ids as numbers 
    if (event.target.id.includes("Id")) {
        selectedVal = parseInt(selectedVal)
    } 
    newEvent[event.target.id] = selectedVal
    //connect the input and ids to match properties on lns 8-11
    setEvent(newEvent)

    }

    
    const handleClickSaveEvent = (event) => {
        event.preventDefault() //prevents browser from submitting form until ready
        addEvent(event)
        .then(() => navigate("/events"))
        
    }

    return (
    <form className="eventForm">
			<h3 className="eventForm__title">Create New Event</h3>
			<fieldset>
				<div className="form-group">
					<label htmlFor="description"> Description:</label>
					<input type="text" id="name" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Event name" value={event.description} />
				</div>
			</fieldset>
			<fieldset>
				<div className="form-group">
					<label htmlFor="location">Event Location:</label>
					<input type="text" id="address" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Event address" value={event.location} />
				</div>
			</fieldset>
            <fieldset>
				<div className="form-group">
					<label htmlFor="date">Date of Event:</label>
					<input placeholder="YYYY-MM-DD" type="text" id="eventDate" onChange={handleControlledInputChange} required autoFocus className="form-control" /> 
                    
                    {/* placeholder="Event date" value={event.eventDate} /> */}
				</div>
			</fieldset>
            <button type="button" className="btn btn-primary"
				onClick={handleClickSaveEvent}>
				Save Event
          </button>
		</form>
	)
 }
//new Date("04/15/2022").getTime())