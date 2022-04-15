// should take in user input, and post it to the database with the right recepient.
import React, { useState, useEffect } from "react";
import { addMessage } from "../../modules/forumDataManager";
import { getAllUsers } from "../../modules/forumDataManager";

export const MessageInput = ({ userId, getMessages }) => {
  const [message, setMessage] = useState({
    userId: userId,
    recepientId: 0,
    content: "",
    timestamp: Date.now(),
  });

  const [users, setUsers] = useState([]);

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
    const newMessage = { ...message };
    newMessage.content = e.target.value;
    // target specific user function, removes spaces and takes first word after @ symbol
    // TODO: ONLY BE ABLE TO @ FRIENDS
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
    }
    setMessage(newMessage);
  };

  // scroll to bottom after this function is called
  // TODO: FIX ASYNC ISSUE
  const handleSendMessage = (event) => {
    event.preventDefault(); //Prevents the browser from submitting the form
    if (message.recepientId === userId) {
      alert("you cannot private message yourself");
    }
    if (message.recepientId === 0 && username !== " ") {
      alert("user does not exist");
    } else {
      addMessage(message).then(getMessages);
      message.content = "";
    }
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
            className="form-input"
            placeholder="Enter a message here, use the @ symbol followed by a username to private message them."
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
