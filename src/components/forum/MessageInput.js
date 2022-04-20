// component programmed by jae : should take in user input, and post it to the database with the right recepient.
import React, { useState, useEffect } from "react";
import { addMessage } from "../../modules/forumDataManager";
import { getAllUsers } from "../../modules/forumDataManager";
import { getAllFriends } from "../../modules/friendsManager";
import "./MessageList.css";

export const MessageInput = ({ userId, getMessages }) => {
  const [message, setMessage] = useState({
    userId: userId,
    recepientId: 0,
    content: "",
    timestamp: Date.now(),
  });

  const [users, setUsers] = useState([]);
  const [friends, setFriends] = useState([]);

  // get Friends from database
  useEffect(() => {
    getAllFriends(userId).then((friendsAPI) => {
      setFriends(friendsAPI);
    });
  }, []);

  // get users from database
  useEffect(() => {
    getAllUsers().then((usersAPI) => {
      setUsers(usersAPI);
    });
  }, []);

  // initialize username state variable
  const [username, setUsername] = useState(" ");
  // update input state and message content when input field is changed
  const handleInputChange = (e) => {
    e.preventDefault();
    const newMessage = { ...message };
    newMessage.content = e.target.value;
    // target specific user function, removes spaces and takes first word after @ symbol
    if (e.target.value.startsWith(`@`)) {
      let removeSymbol = e.target.value.split("@")[1];
      let getName = removeSymbol.split(" ")[0];
      setUsername(getName);
      let filteredUsers = users.filter(
        (user) =>
          user.name.toLowerCase().replace(/\s/g, "") === getName.toLowerCase()
      );
      if (filteredUsers.length > 0) {
        newMessage.recepientId = filteredUsers[0].id;
      } else newMessage.recepientId = 0;
    } else {
      setUsername(" ");
    }
    setMessage(newMessage);
  };

  // scroll to bottom after this function is called
  const handleSendMessage = (event) => {
    event.preventDefault(); //Prevents the browser from submitting the form
    if (message.recepientId === userId) {
      alert("You cannot private message yourself!");
      return;
    }
    if (message.recepientId === 0 && username !== " ") {
      alert("User does not exist!");
      return;
    }
    if (
      friends.filter((friend) => friend.userId === message.recepientId).length >
      0
    ) {
      addMessage(message).then(getMessages);
      message.content = "";
      return;
    }
    if (message.content.startsWith("@") === false) {
      addMessage(message).then(getMessages);
      message.content = "";
      return;
    } else {
      alert("You cannot private message users you do not have added!");
    }
  };

  return (
    <div className="messageForm">
      <fieldset>
        <div className="form-group">
          <input
            type="text"
            id="content"
            onChange={handleInputChange}
            required
            autoFocus
            className="form-input"
            placeholder="Enter a message here, use the @ symbol followed by a username to private message someone. Click on a name in the chat to add that person."
            value={message.content}
          />
        </div>
      </fieldset>
      <button type="button" className="btn" onClick={handleSendMessage}>
        Send Message
      </button>
    </div>
  );
};
