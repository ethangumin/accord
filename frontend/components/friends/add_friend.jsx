import React from "react";

const AddFriend = () => {
  return (
    <div className="add-friend">
      <h2>ADD FRIEND</h2>
      <p>
        You can add a friend with their Accord Username. It's cAsE sEnSiTiVe!
      </p>
      <form>
        <input type="text" placeholder="Enter a Username" />
        <input type="submit" value="Add Friend" className="add-friend__btn" />
      </form>
    </div>
  );
};

export default AddFriend;
