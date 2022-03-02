import React from "react";
import HomeContent from "./home_content";
import HomeNav from "./home_nav";
import ServersNav from "./servers_nav";
import DmIndex from "./dm_index";

class ServerIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchCurrentUser(this.props.currentUser.id);
  }

  render() {
    return (
      <div className="server-index__container">
        <div className="server-index__servers-nav">
          <ServersNav enrolledServers={this.props.enrolledServers} />
        </div>
        <div className="server-index__dm">
          <DmIndex />
        </div>
        <div className="server-index__home">
          <div className="server-index__home__nav">
            <HomeNav logout={this.props.logout} history={this.props.history} />
          </div>
          <div className="server-index__home__content">
            <HomeContent />
          </div>
        </div>
      </div>
    );
  }
}

export default ServerIndex;
