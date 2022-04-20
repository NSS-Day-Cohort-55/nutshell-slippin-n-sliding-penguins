//component engineered by SC
import React, { useState, useEffect } from "react";
import {useNavigate, useParams, Link} from "react-router-dom";
import { updateEvent, getEventById } from "../../modules/EventManager";
import "./Event.css";
import { formatDate } from "../../helpers/formatDate";

export const EventEditForm = () => {
    const [event, setEvent] = useState({
      
        description: "",
        location: "",
      
        eventDate: Date.now()
    });
  
    //define event
    const [changeDialog, setChangedDialog] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    //set isLoading
    // const [hasChanged, setHasChanged] = useState(false)
    
    
    const {eventId} = useParams();
    // const history = useHistory();
    const navigate = useNavigate();
   

 

        const  handleEventDescriptionChange = evt => {
            const stateToChange = { ...event };
            stateToChange[evt.target.id] = evt.target.value;
            setEvent(stateToChange);
        
          };
          
        
          const handleEventAddressChange = ( e ) => {
            const newEvent = {...event};
              newEvent.location = e.target.value
          setEvent(newEvent)
            const editedEvent = {
                id: eventId,
                description: event.description,
                location: event.location,
                userId: parseInt(sessionStorage.getItem("userId")),
                timestamp: "",
                eventDate: Date.now()
              };

          //     pass the editedEvent object to the database
            
          
         }
         const updateEventEdit =()=> {
         updateEvent(eventId, event)
         //keep same order of parameters
         .then(() => navigate("/events")
         )
         }
         const handleEventDateChange = ( e ) => {
          const newEvent = {...event};
            newEvent.eventDate = e.target.value
            
        setEvent(newEvent)
        console.log(event)
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
                    onChange={handleEventDescriptionChange}
                    id="description"
                    value={event.description}
                 />
                 <label htmlFor="description">Edit Event Description</label>
                <input
                    type="text"
                    required
                    className="form-control"
                    onChange={handleEventAddressChange}
                    id="location"
                    value={event.location}
                    />
                    <label htmlFor="location">Edit Event Location</label>
                </div>
                <fieldset>
                     <div className="form-group">
					<label htmlFor="date">Edit Date of Event:</label>
					<input type="text" id="eventDate" onChange={handleEventDateChange} required autoFocus className="form-control" placeholder="Event date" value={event.timestamp} />
				</div>
                    </fieldset>
                <section className="form--submit">
                  <Link to ="/events">
                    <button class="btn" id="return"> Return to Events </button>
                  </Link>
                <div className="alignRight">
                    <button
                    type="button" disabled={isLoading}
                onClick={updateEventEdit}
                className="btn btn-primary"
                >Save Changes</button>
              
          </div>
          </section>
        </fieldset>
      </form>
    </>
  );
      }
                