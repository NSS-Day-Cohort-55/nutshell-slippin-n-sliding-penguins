// should take in user input, and post it to the database with the right recepient.
import React, { useState, useEffect } from "react";

import { addMessage } from "../../modules/forumDataManager";

export const MessageInput = ({ userId }) => {
  const [message, setMessage] = useState({
    userId: userId,
    recepientId: 0,
    content: "",
    timestamp: Date.now(),
  });

  const [isLoading, setIsLoading] = useState(false);

  // TODO: IF MESSAGE STARTS WITH @ SYMBOL CHANGE RECEPIENT ID
  const handleInputChange = (e) => {
    const newMessage = { ...message };
    let selectedVal = e.target.value;
    if (e.target.id.includes("Id")) {
      selectedVal = parseInt(selectedVal);
    }

    newMessage[e.target.id] = selectedVal;

    setMessage(newMessage);
  };

  const handleSendMessage = (event) => {
    event.preventDefault(); //Prevents the browser from submitting the form
    addMessage(message);
  };

  return (
    <form className="messageForm">
      <fieldset>
        <div className="form-group">
          <input
            type="text"
            id="content"
            onChange={handleInputChange}
            required
            autoFocus
            className="form-control"
            placeholder="Enter a message here"
            value={message.content}
          />
        </div>
      </fieldset>
      <button type="button" className="btn-send" onClick={handleSendMessage}>
        Send Message
      </button>
    </form>
  );
};
