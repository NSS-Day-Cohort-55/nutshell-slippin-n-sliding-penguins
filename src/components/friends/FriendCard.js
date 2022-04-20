// module by jae: should make a singular friend on the friendlist
export const FriendCard = ({ friend, deleteFriends, isDashboard }) => {
  return (
    <div className="friend-wrap" id={`userFriendId__${friend.userId}`}>
      <div className="friend-details">
        <h5>
          <span className="friend-name">{friend.user?.name}</span>
          <span className="friend-email">{friend.user?.email}</span>
        </h5>
        <div className="delete-friends">
          {isDashboard ? (
            ""
          ) : (
            <button type="button" onClick={() => deleteFriends(friend.id)}>
              X
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
