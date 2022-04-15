// module written by Jae should render a card for each user message

import React, { useState } from "react";
import { formatMDY } from "../../helpers/formatDate";
import { Popup } from "../friends/AddFriendsPopup";

export const MessageCard = ({ message, deleteMessage, userId, getFriends }) => {
  // this is for managing state of the popup
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  // user messages rendered slightly differently
  if (message.user.id === userId) {
    return (
      <div className="userMessage-wrap" id={`userMessageId__${message.id}`}>
        <div className="sent-details" id={`senderId__${message.user?.id}`}>
          <h5>
            <span className="message-name">{message.user?.name}</span>
          </h5>
          <h5>
            <span className="message-date">{formatMDY(message.timestamp)}</span>
          </h5>
        </div>
        <div
          className="message-content"
          id={`recepientId__${message.recepientId}`}
        >
          <p>{message.content}</p>
          <button type="button" onClick={() => deleteMessage(message.id)}>
            X
          </button>
        </div>
      </div>
    );
  } else {
    return (
      <div className="message-wrap" id={`messageId__${message.id}`}>
        <div className="sent-details" id={`senderId__${message.user.id}`}>
          <h5>
            <span className="message-name" onClick={togglePopup}>
              {message.user?.name}
            </span>
            {isOpen && (
              <Popup
                handleClose={togglePopup}
                getFriends={getFriends}
                name={message.user.name}
                messageUserId={message.user.id}
              />
            )}
          </h5>
          <h5>
            <span className="message-date">{formatMDY(message.timestamp)}</span>
          </h5>
        </div>
        <div
          className="message-content"
          id={`recepientId__${message.recepientId}`}
        >
          <p>{message.content}</p>
        </div>
      </div>
    );
  }
};
