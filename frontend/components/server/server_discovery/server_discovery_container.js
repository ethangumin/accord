import { connect } from "react-redux";
import ServerDiscovery from "./server_discovery";
import { createChannel, fetchChannel } from "../../../actions/channel_actions";
import { createServerMember } from "../../../actions/server_member_actions";
import {
  createServer,
  requestServer,
  requestServers,
} from "../../../actions/server_actions";

const mSTP = (state) => {
  return {
    currentUser: state.entities.users[state.session.id],
    enrolledServers: state.entities.users[state.session.id].servers,
    servers: state.entities.servers,
  };
};

const mDTP = (dispatch) => {
  return {
    fetchChannel: (channelId) => dispatch(fetchChannel(channelId)),
    createChannel: (channel) => dispatch(createChannel(channel)),
    createServerMember: (serverMember) =>
      dispatch(createServerMember(serverMember)),
    createServer: (server) => dispatch(createServer(server)),
    requestServer: (serverId) => dispatch(requestServer(serverId)),
    requestServers: () => dispatch(requestServers()),
  };
};

export default connect(mSTP, mDTP)(ServerDiscovery);
