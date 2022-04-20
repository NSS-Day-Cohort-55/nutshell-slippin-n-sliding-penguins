// module programmed by jae to create a list of friends
import React, { useState, useEffect } from "react";
import * as fetch from "../../modules/friendsManager.js";
import { FriendCard } from "./FriendCard.js";
import "./FriendsList.css";
import { AddFriendsPopup } from "./AddFriendsPopup.js";

export const FriendsList = () => {
  const [friends, setFriends] = useState([]);
  const userId = parseInt(sessionStorage.getItem("nutshell_user"));

  const getFriends = () => {
    return fetch.getAllFriends(userId).then((friends) => {
      setFriends(friends);
    });
  };
  const deleteFriends = (id) => {
    fetch
      .deleteFriend(id)
      .then(() => fetch.getAllFriends(userId).then(setFriends));
  };

  useEffect(() => {
    getFriends();
  }, []);

  // this is for managing state of the popup
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <h3>Friends List</h3>
      <input  type="button" className="btn" value="Add A Friend!"  onClick={togglePopup} />
      {isOpen && (
        <AddFriendsPopup handleClose={togglePopup} getFriends={getFriends} />
      )}
      <div className="friends-container">
        {friends.map((friend) => (
          <FriendCard
            friend={friend}
            key={friend.userId}
            deleteFriends={deleteFriends}
          />
        ))}
      </div>
    </>
  );
};
