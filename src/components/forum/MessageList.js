// Module programmed by Jae, should create a list of messages by passing information to message card.
import React, { useState, useEffect } from "react";
import * as fetch from "../../modules/forumDataManager.js";
import { MessageCard } from "./MessageCard.js";

export const MessageList = () => {
  const [messages, setMessages] = useState([]);

  const getMessages = () => {
    return fetch.getAllMessages().then((messages) => {
      setMessages(messages);
    });
  };

  const deleteMessage = (id) => {
    fetch
      .deleteMessage(id)
      .then(() => fetch.getAllMessages().then(setMessages));
  };

  useEffect(() => {
    getMessages();
  }, [messages]);

  messages.sort(function (x, y) {
    return x.timestamp - y.timestamp;
  });

  return (
    <>
      <div className="message-container">
        {messages.map((message) => (
          <MessageCard
            message={message}
            key={message.id}
            deleteMessage={deleteMessage}
          />
        ))}
      </div>
    </>
  );
};
