// popup for editing a message live on the message forum screen : Jae
import React, { useState, useEffect } from "react";
import "./MessageList.css";

export const EditMessagePopup = (props) => {
  // for handling popup input
  const [editedMessage, setEditedMessage] = useState({
    content: props.content ? props.content : "",
    id: props.id,
  });

  // handles change for input field for adding a user in the popup
  const handleInputChange = (e) => {
    e.preventDefault();
    const newMessage = { ...editedMessage };
    newMessage.content = e.target.value;
    setEditedMessage(newMessage);
  };

  const handleSaveEdit = (e) => {
    e.preventDefault();

    props.editMessage(editedMessage);
    props.handleClose();
  };

  return (
    <div className="popup-box">
      <div className="box">
        <span className="close-icon" onClick={props.handleClose}>
          x
        </span>
        <div className="popup-input">
          <input
            type="text"
            id="content"
            onChange={handleInputChange}
            required
            autoFocus
            className="form-input"
            placeholder="Change Message Text Here"
            value={editedMessage.content}
          />
        </div>
        <button class="btn" type="button" onClick={handleSaveEdit}>
          Save
        </button>
      </div>
    </div>
  );
};
