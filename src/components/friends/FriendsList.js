// module programmed by jae to create a list of friends
import React, { useState, useEffect } from "react";
import * as fetch from "../../modules/friendsManager.js";
import { FriendCard } from "./FriendCard.js";

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

  return (
    <>
      <h3>Friends List</h3>
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
