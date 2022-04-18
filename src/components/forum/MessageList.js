// Module programmed by Jae, should create a list of messages by passing information to message card.
import React, { useState, useEffect, useRef } from "react";
import * as fetch from "../../modules/forumDataManager.js";
import { getAllFriends } from "../../modules/friendsManager.js";
import { MessageCard } from "./MessageCard.js";
import { MessageInput } from "./MessageInput.js";
import "./MessageList.css";

export const MessageList = () => {
  const [messages, setMessages] = useState([]);
  const userId = parseInt(sessionStorage.getItem("nutshell_user"));
  const [friends, setFriends] = useState([]);

  const getMessages = () => {
    return fetch.getAllMessages().then((messages) => {
      setMessages(messages);
    });
  };

  const getFriends = () => {
    return getAllFriends(userId).then((friends) => {
      setFriends(friends);
    });
  };

  const deleteMessage = (id) => {
    fetch
      .deleteMessage(id)
      .then(() => fetch.getAllMessages().then(setMessages));
  };

  const editMessages = (id) => {
    fetch.editMessage(id).then(() => fetch.getAllMessages().then(setMessages));
  };

  useEffect(() => {
    getMessages();
  }, [messages]);

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

  // scroll to bottom of a div
  const messageEndRef = useRef(null);

  const scrollToBottom = () => {
    messageEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

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
            editMessage={editMessages}
            getFriends={getFriends}
            getMessages={getMessages}
          />
        ))}
        <div ref={messageEndRef}></div>
      </div>
      <div className="message-input">
        <MessageInput userId={userId} getMessages={getMessages} />
      </div>
    </>
  );
};
