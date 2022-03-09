import { connect } from "react-redux";
import { requestServer, createServer } from "../../actions/server_actions";
import { createServerMember } from "../../actions/server_member_actions";
import {
  fetchChannel,
  createChannel,
  deleteChannel,
} from "../../actions/channel_actions";
import Server from "./server";

const mSTP = (state, ownProps) => {
  debugger;
  return {
    currentServer: state.entities.servers[ownProps.match.params.id],
    enrolledServers: Object.values(state.entities.servers),
    currentChannels: Object.values(state.entities.channels),
    currentUser: state.entities.users[state.session.id],
    currentChannel: state.entities.channels,
    currentChannelId: parseInt(ownProps.match.params.channelId),
  };
};

const mDTP = (dispatch) => ({
  requestServer: (serverId) => dispatch(requestServer(serverId)),
  fetchChannel: (channelId) => dispatch(fetchChannel(channelId)),
  createServer: (server) => dispatch(createServer(server)),
  createServerMember: (serverMember) =>
    dispatch(createServerMember(serverMember)),
  createChannel: (channel) => dispatch(createChannel(channel)),
  deleteChannel: (channelId) => dispatch(deleteChannel(channelId)),
});

export default connect(mSTP, mDTP)(Server);
