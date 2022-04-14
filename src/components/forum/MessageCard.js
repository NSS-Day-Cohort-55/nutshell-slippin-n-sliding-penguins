import React from "react";
import { formatMDY } from "../../helpers/formatDate";
import "./MessageCard.css";
export const MessageCard = ({ message, deleteMessage }) => {
  console.log(message);
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
      <div className="message-content">
        <p>{message.content}</p>
      </div>
    </div>
  );
};
