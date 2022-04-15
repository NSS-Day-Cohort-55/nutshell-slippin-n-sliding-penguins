//component engineered by SC
import React, { useState, useEffect } from "react";
import {useNavigate, useParams} from "react-router-dom";
import { updateEvent, getEventById } from "../../modules/EventManager";
import "./EventForm.css";

export const EventEditForm = () => {
    const [event, setEvent] = useState({
        userId: "",
        description: "",
        location: "",
        timestamp: "",
        eventDate: Date.now()
    });
    //define event
    const [isLoading, setIsLoading] = useState(false);
    //set isLoading

    const {eventId} = useParams();
    const navigate = useNavigate();

    // const handleControlledInputChange = (event) => {
	// 	/* When changing a state object or array,
	// 	always create a copy, make changes, and then set state. the input fields, are controlled by what's in state, represent what's in state*/
	// 	const newEvent = { ...event }
	// 	let selectedVal = event.target.value
    //     //... is spread operator, create a copy 
    //     //this becomes the field of the value we're editing
	// 	// forms always provide values as strings. But we want to save the ids as numbers.
	// 	if (event.target.id.includes("Id")) {
	// 		selectedVal = parseInt(selectedVal)
	// 	}
        
    //     newEvent[event.target.id] = selectedVal
    //     setEvent(newEvent)
    // }

        const handleFieldChange = evt => {
            const stateToChange = { ...event };
            stateToChange[evt.target.id] = evt.target.value;
            setEvent(stateToChange);
          };
            //[evt.target.id]=== to evaluate ...then set to state to Change
          const updateExistingEvent = evt => {
            evt.preventDefault()
            setIsLoading(true);
        
            const editedEvent = {
                id: eventId,
                description: event.description,
                location: event.location,
                timestamp: "",
                 eventDate: Date.now()
              };

              //pass the editedEvent object to the database
              updateEvent(editedEvent)
              .then(() => navigate("/events")
              )
            }
            useEffect(() => {
                getEventById(eventId)
                  .then(event => {
                    setEvent(event);
                    setIsLoading(false);
                  });
              }, []);

              return (
                  <>
                  <form>
                <fieldset>
                 <div className="formgrid">
                     <input
                     type="text"
                    required
                    className="form-control"
                    onChange={handleFieldChange}
                    id="name"
                    value={event.description}
                 />
                 <label htmlFor="description">Event Description</label>
                <input
                    type="text"
                    required
                    className="form-control"
                    onChange={handleFieldChange}
                    id="location"
                    value={event.location}
                    />
                    <label htmlFor="location">Event Location</label>
                </div>
                <fieldset>
                     <div className="form-group">
					<label htmlFor="date">Date of Event:</label>
					<input type="text" id="eventDate" onChange={handleFieldChange} required autoFocus className="form-control" placeholder="Event date" value={event.timestamp} />
				</div>
                    </fieldset>
                <div className="alignRight">
                    <button
                    type="button" disabled={isLoading}
                onClick={updateExistingEvent}
                className="btn btn-primary"
                >Save Changes</button>
          </div>
        </fieldset>
      </form>
    </>
  );
};

                