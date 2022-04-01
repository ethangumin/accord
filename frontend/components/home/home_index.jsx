import React, { useState, useEffect } from "react";
import HomeContent from "./home_content";
import HomeNav from "./home_nav";
import ServersNav from "../server/servers_nav";
import DmIndex from "./dm/dm_index";

const HomeIndex = (props) => {
  useEffect(() => {
    props.fetchUser(props.currentUser.id);
  }, []);

  return (
    <div className="server-index__container">
      <ServersNav
        enrolledServers={props.enrolledServers}
        currentChannels={props.currentChannels}
        createServer={props.createServer}
        createServerMember={props.createServerMember}
        createChannel={props.createChannel}
        currentUser={props.currentUser}
        fetchChannel={props.fetchChannel}
      />
      <DmIndex friends={props.friends} currentUser={props.currentUser} />
      <div className="server-index__home">
        <HomeNav logout={props.logout} history={props.history} />
        <HomeContent />
      </div>
    </div>
  );
};

// class HomeIndex extends React.Component {
//   constructor(props) {
//     super(props);
//   }

//   componentDidMount() {
//     this.props.fetchUser(this.props.currentUser.id);
//   }

//   render() {
//     // debugger;
//     return (
//       <div className="server-index__container">
//         <ServersNav
//           enrolledServers={this.props.enrolledServers}
//           currentChannels={this.props.currentChannels}
//           createServer={this.props.createServer}
//           createServerMember={this.props.createServerMember}
//           createChannel={this.props.createChannel}
//           currentUser={this.props.currentUser}
//           fetchChannel={this.props.fetchChannel}
//         />
//         <DmIndex
//           friends={this.props.friends}
//           currentUser={this.props.currentUser}
//         />
//         <div className="server-index__home">
//           <HomeNav logout={this.props.logout} history={this.props.history} />
//           <HomeContent />
//         </div>
//       </div>
//     );
//   }
// }

export default HomeIndex;
