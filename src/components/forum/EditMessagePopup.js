import React, { useState, useEffect } from "react";
import { editMessage, getAllMessages } from "../../modules/forumDataManager.js";

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

    editMessage(editedMessage).then(() => props.getAllMessages);
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
        <button type="button" onClick={handleSaveEdit}>
          Save
        </button>
      </div>
    </div>
  );
};
