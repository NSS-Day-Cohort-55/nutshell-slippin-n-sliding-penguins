// Module programmed by Jae, should create a list of messages by passing information to message card.
import React, { useState, useEffect } from "react";
import * as fetch from "../../modules/forumDataManager.js";
import { MessageCard } from "./MessageCard.js";
import { MessageInput } from "./MessageInput.js";
import "./MessageList.css";

export const MessageList = () => {
  const [messages, setMessages] = useState([]);
  const userId = parseInt(sessionStorage.getItem("nutshell_user"));

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
  // TODO: FIGURE OUT WHAT DEPENDANCY ARRAY TO USE HERE
  useEffect(() => {
    getMessages();
  }, []);

  // sorts msgs by timestamp and filters out private messages not directed at the user
  messages.sort(function (x, y) {
    return x.timestamp - y.timestamp;
  });

  let filteredMessages = messages.filter(
    (message) =>
      message.recepientId === userId ||
      message.recepientId === 0 ||
      message.userId === userId
  );

  return (
    <>
      <h3>Message Board</h3>
      <div className="message-container">
        {filteredMessages.map((message) => (
          <MessageCard
            userId={userId}
            message={message}
            key={message.id}
            deleteMessage={deleteMessage}
          />
        ))}
      </div>
      <div className="message-input">
        <MessageInput userId={userId} getMessages={getMessages} />
      </div>
    </>
  );
};
