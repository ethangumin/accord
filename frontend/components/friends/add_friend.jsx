import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchUser } from "../../actions/user_actions";
import { createFriendship } from "../../actions/friendship_actions";

const AddFriend = (props) => {
  const dispatch = useDispatch();
  const [friendUsername, setFriendUsername] = useState("");
  const [err, setErr] = useState(null);

  const updateUsernameHandler = (e) => {
    setFriendUsername(e.target.value);
  };

  const submitFormHandler = () => {
    dispatch(fetchUser(friendUsername)).then(
      (user) => {
        dispatch(createFriendship(user.data.user.id));
        setFriendUsername("");
        setErr(null)
        props.setFriendsList(true);
      },
      (err) => {
        setErr("User Not Found");
      }
    );
    // setFriendUsername("");
    // props.setFriendsList(true);
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
          value={err || friendUsername}
          style={err ? { color: "#ca2933" } : null}
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
