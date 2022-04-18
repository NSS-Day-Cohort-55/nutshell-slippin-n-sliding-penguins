//component engineered by SC
import React, { useState, useEffect } from "react";
import {useNavigate, useParams, Link} from "react-router-dom";
import { updateEvent, getEventById } from "../../modules/EventManager";
import "./EventForm.css";
import { formatDate } from "../../helpers/formatDate";

export const EventEditForm = () => {
    const [event, setEvent] = useState({
        userId: 0,
        description: "",
        location: "",
        timestamp: "",
        eventDate: Date.now()
    });
    //define event
    const [changeDialog, setChangedDialog] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    //set isLoading
    const [hasChanged, setHasChanged] = useState(false)
    const {eventId} = useParams();
    // const history = useHistory();
    const navigate = useNavigate();
   

 

        const handleFieldChange = evt => {
            const stateToChange = { ...event };
            stateToChange[0][evt.target.id] = evt.target.value;
            setEvent(stateToChange);
            setHasChanged(true)
          };
            //[evt.target.id]=== to evaluate ...then set to state to Change
          const updateEvent = evt => {
            evt.preventDefault()
            if (hasChanged) {
            setIsLoading(true);
        
            const editedEvent = {
                id: event[0].id,
                description: event[0].description,
                location: event[0].location,
                userId: parseInt(sessionStorage.getItem("userId")),
                timestamp: "",
                eventDate: Date.now()
              };

              //pass the editedEvent object to the database
              updateEvent(editedEvent)
              .then(() => navigate("/events")
              )
            }
            else {
              setChangedDialog(true);
            }
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
                 <div className="editForm--container">
                     <input
                     type="text"
                    required
                    className="form-control"
                    onChange={handleFieldChange}
                    id="name"
                    value={event.description}
                 />
                 <label htmlFor="description">Edit Event Description</label>
                <input
                    type="text"
                    required
                    className="form-control"
                    onChange={handleFieldChange}
                    id="location"
                    value={event.location}
                    />
                    <label htmlFor="location">Edit Event Location</label>
                </div>
                <fieldset>
                     <div className="form-group">
					<label htmlFor="date">Edit Date of Event:</label>
					<input type="text" id="eventDate" onChange={handleFieldChange} required autoFocus className="form-control" placeholder="Event date" value={event.timestamp} />
				</div>
                    </fieldset>
                <section className="form--submit">
                  <Link to ="/events">
                    <button id="return"> Return to Events </button>
                  </Link>
                <div className="alignRight">
                    <button
                    type="button" disabled={isLoading}
                onClick={updateEvent}
                className="btn btn-primary"
                >Save Changes</button>
              
          </div>
          </section>
        </fieldset>
      </form>
    </>
  );
};

                