import React, { useState, useEffect } from "react";
import {
  getAllUsers,
  addAFriend,
  getAllFriends,
} from "../../modules/friendsManager.js";
import "./popup.css";

export const Popup = (props) => {
  // for handling popup input
  const [addFriend, setAddedFriend] = useState({
    userId: 0,
    currentUserId: parseInt(sessionStorage.getItem("nutshell_user")),
    user: {
      name: props.name ? props.name : "",
    },
  });
  const [users, setUsers] = useState([]);
  const [currentFriends, setCurrentFriends] = useState([]);

  // get users from database
  useEffect(() => {
    getAllUsers().then((usersAPI) => {
      setUsers(usersAPI);
    });
  }, []);

  // get currently logged in users friends
  useEffect(() => {
    getAllFriends(parseInt(sessionStorage.getItem("nutshell_user"))).then(
      (friendsAPI) => {
        setCurrentFriends(friendsAPI);
      }
    );
  }, []);

  const handleInputChange = (e) => {
    e.preventDefault();

    const newFriend = { ...addFriend };

    newFriend.user.name = e.target.value;

    let filteredUsers = users.filter(
      (user) =>
        user.name.toLowerCase().replace(/\s/g, "") ===
        newFriend.user.name.toLowerCase().replace(/\s/g, "")
    );

    if (filteredUsers.length > 0) {
      newFriend.userId = filteredUsers[0].id;
    } else newFriend.userId = 0;

    setAddedFriend(newFriend);
  };
  const handleAddFriend = (evt) => {
    evt.preventDefault();
    currentFriends.forEach((friend) => {
      if (friend.userId === addFriend.userId) {
        alert("You already have this user added!");
        return;
      } else if (addFriend.userId === addFriend.currentUserId) {
        alert("You cannot add yourself as a friend!");
        return;
      } else if (addFriend.userId === 0) {
        alert("This user does not exist!");
        return;
      } else {
        addAFriend(addFriend).then(props.getFriends);
        alert("Friend Added!");
        addFriend.user.name = "";
      }
    });
  };

  console.log(currentFriends);

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
            value={addFriend.user.name}
          />
        </div>
        <button type="button" onClick={handleAddFriend}>
          Add A Friend
        </button>
      </div>
    </div>
  );
};
