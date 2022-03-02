import React from 'react'
import Hashtag from "../../../app/assets/images/hashtag-solid.svg";

const ChannelNav = () => {
  return (
    <div className="channel-nav__container">
      <img src={Hashtag} alt="hashtag" className='channel-pound' />
      <p>Placeholder Channel Name</p>
    </div>
  );
}

export default ChannelNav