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
    // console.log(this.props.enrolledServers)
    return (
      <div className="server-index__container">
          <ServersNav enrolledServers={this.props.enrolledServers} />
          <DmIndex />
        <div className="server-index__home">
            <HomeNav logout={this.props.logout} history={this.props.history} />
            <HomeContent />
        </div>
      </div>
    );
  }
}

export default ServerIndex;
