import React from "react";
import Hashtag from "../../../app/assets/images/hashtag-solid.svg";
import { withRouter } from "react-router-dom";

class ChannelNav extends React.Component {
  logoutHandler(e) {
    // debugger;
    e.preventDefault();
    this.props.logout();
    this.props.history.push("/");
  }

  render() {
    return (
      <div className="channel-nav__container">
        <div className="channel-nav__channel-name">
          <img src={Hashtag} alt="hashtag" className="channel-pound" />
          <p>
            {this.props.currentChannel
              ? this.props.currentChannel.channelName
              : ""}
          </p>
        </div>
        <input
          type="button"
          value="Logout"
          onClick={(e) => this.logoutHandler(e)}
        />
      </div>
    );
  }
}

export default withRouter(ChannelNav);

// const ChannelNav = ({ currentChannel, logout }) => {
//   const logoutHandler = (e) => {
//     debugger;
//     e.preventDefault();
//     logout();
//     props.history.push("/");
//   };

//   return (
//     <div className="channel-nav__container">
//       <img src={Hashtag} alt="hashtag" className="channel-pound" />
//       <p>{currentChannel ? currentChannel.channelName : ""}</p>
//       <input type="button" value="Logout" onClick={(e) => logoutHandler(e)} />
//     </div>
//   );
// };

// export default withRouter(ChannelNav);
