// module written by Jae should render a card for each user message

import React, { useState } from "react";
import { formatMDY } from "../../helpers/formatDate";
import { AddFriendsPopup } from "../friends/AddFriendsPopup";
import { EditMessagePopup } from "./EditMessagePopup.js";
import "./MessageList.css";

export const MessageCard = ({
  message,
  deleteMessage,
  userId,
  getFriends,
  getMessages,
  editMessage,
}) => {
  // this is for managing state of the popup
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  const [messageIsOpen, setMessageIsOpen] = useState(false);
  const toggleMessagePopup = () => {
    setMessageIsOpen(!messageIsOpen);
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
          <button class="btn" type="button" onClick={() => deleteMessage(message.id)}>
            X
          </button>
          <button class="btn" type="button" onClick={toggleMessagePopup}>
            Edit
          </button>
          {messageIsOpen && (
            <EditMessagePopup
              handleClose={toggleMessagePopup}
              content={message.content}
              id={message.id}
              getMessages={getMessages}
              editMessage={editMessage}
            />
          )}
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
              <AddFriendsPopup
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
