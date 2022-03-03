import { connect } from "react-redux";
import { requestServer } from "../../actions/server_actions";
import { fetchChannel } from "../../actions/channel_actions";
import Server from "./server";

const mSTP = (state, ownProps) => {
  return {
    currentServer: state.entities.servers[ownProps.match.params.id],
    enrolledServers: state.entities.users[state.session.id].servers,
    currentUser: state.entities.users[state.session.id],
    currentChannel: state.entities.channels,
  };
};

const mDTP = (dispatch) => ({
  requestServer: (serverId) => dispatch(requestServer(serverId)),
  fetchChannel: (channelId) => dispatch(fetchChannel(channelId)),
});

export default connect(mSTP, mDTP)(Server);
