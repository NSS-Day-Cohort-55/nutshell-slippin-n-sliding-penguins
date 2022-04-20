//module programmed by SC; EventForm component allows user to create/add a new event
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addEvent } from "../../modules/EventManager";
import "./EventForm.css";
import { EventWeather } from "../dashboard/weather/EventWeather.js";

export const EventForm = () => {
  const [event, setEvent] = useState({
    userId: parseInt(sessionStorage.getItem("nutshell_user")),
    description: "",
    location: "",
    timestamp: Date.now(),
    eventDate: "",
  });
  //state will contain both event data as well as isLoading
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const newEvent = { ...event };
  //constrolled component--what is in state
  const handleEventDescriptionChange = (e) => {
    newEvent.description = e.target.value;
    setEvent(newEvent);
  };
  const handleEventAddressChange = (e) => {
    newEvent.location = e.target.value;
    setEvent(newEvent);
  };
  const handleEventDateChange = (e) => {
    newEvent.eventDate = e.target.value;

    setEvent(newEvent);
  };
  const handleClickSaveEvent = (e) => {
    e.preventDefault(); //prevents browser from submitting form until ready
    addEvent(event).then(() => navigate("/events"));
  };

  const calculateDiffInDays = () => {
    // To set two dates to two variables
    var date1 = new Date();
    var date2 = new Date(event.eventDate);

    console.log(date1);
    // To calculate the time difference of two dates
    var Difference_In_Time = date2.getTime() - date1.getTime();

    // To calculate the no. of days between two dates
    var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);

    return Math.round(Difference_In_Days);
  };

  return (
    <>
      <form className="eventForm">
        <h3 className="eventForm__title">Create New Event</h3>
        <fieldset>
          <div className="form-group">
            <label htmlFor="description"> Description:</label>
            <input
              type="text"
              id="name"
              onChange={handleEventDescriptionChange}
              required
              autoFocus
              className="form-control"
              placeholder="Event name"
              value={event.description}
            />
          </div>
        </fieldset>
        <fieldset>
          <div className="form-group">
            <label htmlFor="location">Event Location:</label>
            <input
              type="text"
              id="address"
              onChange={handleEventAddressChange}
              required
              autoFocus
              className="form-control"
              placeholder="Event address"
              value={event.location}
            />
          </div>
        </fieldset>
        <fieldset>
          <div className="form-group">
            <label htmlFor="date">Date of Event:</label>
            <input
              placeholder="YYYY-MM-DD"
              type="text"
              id="eventDate"
              onChange={handleEventDateChange}
              required
              autoFocus
              className="form-control"
              value={event.eventDate}
            />
          </div>
        </fieldset>
        <button
          type="button"
          className="btn btn-primary"
          onClick={handleClickSaveEvent}
        >
          Save Event
        </button>
      </form>
      <EventWeather differenceInDays={calculateDiffInDays()} />
    </>
  );
};
