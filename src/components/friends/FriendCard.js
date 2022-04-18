export const FriendCard = ({ friend, deleteFriends }) => {
  return (
    <div className="friend-wrap" id={`userFriendId__${friend.userId}`}>
      <div className="friend-details">
        <h5>
          <span className="friend-name">{friend.user?.name}</span>
          <span className="friend-email">{friend.user?.email}</span>
        </h5>
        <div className="delete-friends">
          <button type="button" onClick={() => deleteFriends(friend.id)}>
            X
          </button>
        </div>
      </div>
    </div>
  );
};
