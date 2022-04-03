import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchUser } from "../../actions/user_actions";
import { createFriendship } from "../../actions/friendship_actions";

const AddFriend = (props) => {
  const dispatch = useDispatch();
  const [friendUsername, setFriendUsername] = useState("");

  const updateUsernameHandler = (e) => {
    setFriendUsername(e.target.value);
  };

  const submitFormHandler = () => {
    dispatch(fetchUser(friendUsername)).then((user) => {
      dispatch(createFriendship(user.data.user.id));
    });
    setFriendUsername("");
    props.setFriendsList(true);
  };

  return (
    <div className="add-friend">
      <h2>ADD FRIEND</h2>
      <p>
        You can add a friend with their Accord Username. It's cAsE sEnSiTiVe!
      </p>
      <form>
        <input
          type="text"
          placeholder="Enter a Username"
          onChange={(e) => updateUsernameHandler(e)}
          value={friendUsername}
        />
        <input
          type="submit"
          value="Add Friend"
          className="add-friend__btn"
          onClick={() => submitFormHandler()}
        />
      </form>
    </div>
  );
};

export default AddFriend;
