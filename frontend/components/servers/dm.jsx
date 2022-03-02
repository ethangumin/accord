import React from "react";
import xMark from '../../../app/assets/images/xmark-solid.svg' ;

const Dm = ({ friend }) => {
  return (
    <div className="dm__container">
      <div className="dm">
        <p className="dm__icon">{friend.username[0]}</p>
        <p className="dm__username">{friend.username}</p>
      </div>
      {/* <img src={xMark} alt="x mark" className="dm__x-mark" /> */}
    </div>
  );
};

export default Dm;
