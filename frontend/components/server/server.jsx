import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { requestServer } from "../../actions/server_actions";
import { fetchUser } from "../../actions/user_actions";
import ServersNav from "./servers_nav";
import ChannelContainer from "../channel/channel_container";
import ServerChannels from "./server_channels";

const Server = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    // debugger
    dispatch(requestServer(props.match.params.id));
    dispatch(fetchUser(props.currentUser.id));
  }, []);

  return (
    <div className="server__main-container">
      <ServersNav
        enrolledServers={props.enrolledServers}
        requestServer={props.requestServer}
        fetchChannel={props.fetchChannel}
        currentServer={props.currentServer}
        createServer={props.createServer}
        createServerMember={props.createServerMember}
        createChannel={props.createChannel}
        // currentUser={props.currentUser}
        currentChannels={props.currentChannels}
      />
      <ServerChannels
        currentChannels={props.currentChannels}
        server={props.currentServer}
        // currentUser={props.currentUser}
        fetchChannel={props.fetchChannel}
        // currentChannel={props.currentChannel}
        currentChannelId={props.currentChannelId}
        currentServer={props.currentServer}
        createChannel={props.createChannel}
        deleteChannel={props.deleteChannel}
        updateChannel={props.updateChannel}
      />
      <ChannelContainer
        currentChannel={props.currentChannel}
        currentChannels={props.currentChannels}
        currentChannelId={props.currentChannelId}
      />
    </div>
  );
};

// class Server extends React.Component {
//   componentDidMount() {
//     this.props.requestServer(this.props.match.params.id);
//     this.props.fetchUser(this.props.currentUser.id);
//   }

//   render() {
//     return (
//       <div className="server__main-container">
//         <ServersNav
//           enrolledServers={this.props.enrolledServers}
//           requestServer={this.props.requestServer}
//           fetchChannel={this.props.fetchChannel}
//           currentServer={this.props.currentServer}
//           createServer={this.props.createServer}
//           createServerMember={this.props.createServerMember}
//           createChannel={this.props.createChannel}
//           currentUser={this.props.currentUser}
//           currentChannels={this.props.currentChannels}
//         />
//         <ServerChannels
//           currentChannels={this.props.currentChannels}
//           server={this.props.currentServer}
//           currentUser={this.props.currentUser}
//           fetchChannel={this.props.fetchChannel}
//           currentChannel={this.props.currentChannel}
//           currentChannelId={this.props.currentChannelId}
//           currentServer={this.props.currentServer}
//           createChannel={this.props.createChannel}
//           deleteChannel={this.props.deleteChannel}
//           updateChannel={this.props.updateChannel}
//         />
//         <ChannelContainer
//           currentChannel={this.props.currentChannel}
//           currentChannels={this.props.currentChannels}
//           currentChannelId={this.props.currentChannelId}
//         />
//       </div>
//     );
//   }
// }

export default Server;
