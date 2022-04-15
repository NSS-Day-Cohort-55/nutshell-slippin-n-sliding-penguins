import React, { useState } from "react";
import "./popup.css";

export const Popup = (props) => {
  // for handling popup input
  const [addFriend, setAddedFriends] = useState({
    userId: 0,
    currentUserId: parseInt(sessionStorage.getItem("nutshell_user")),
  });
  const handleInputChange = () => {};
  const handleAddFriend = () => {};

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
            placeholder="Enter a username to add a friend here!"
          />
        </div>
        <button type="button" onClick={handleAddFriend}>
          Add A Friend
        </button>
      </div>
    </div>
  );
};
