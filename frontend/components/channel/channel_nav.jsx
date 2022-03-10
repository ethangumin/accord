import React from "react";
import Hashtag from "../../../app/assets/images/hashtag-solid.svg";
import { withRouter } from "react-router-dom";

class ChannelNav extends React.Component {
  logoutHandler(e) {
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
