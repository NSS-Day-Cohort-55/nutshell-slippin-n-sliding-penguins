// module written by Jae should render a card for each user message

import React from "react";
import { formatMDY } from "../../helpers/formatDate";
import "./MessageCard.css";
// TODO: MESSAGES AT THE BOTTOM SHOULD ALWAYS BE VISIBLE WITHOUT SCROLLING
export const MessageCard = ({ message, deleteMessage, userId }) => {
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
        </div>
      </div>
    );
  }
};
