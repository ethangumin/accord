import { connect } from "react-redux";
import HomeIndex from "./home_index";
import { logout } from "../../actions/session_actions";
import { createServer } from "../../actions/server_actions";
import { createServerMember } from "../../actions/server_member_actions";
import { createChannel, fetchChannel } from "../../actions/channel_actions";

const mSTP = (state) => {
  // debugger;
  return {
    currentUser: state.entities.users[state.session.id],
    enrolledServers: state.entities.users[state.session.id].servers,
    friends: state.entities.users[state.session.id].friends,
  };
};

const mDTP = (dispatch) => ({
  logout: () => dispatch(logout()),
  fetchChannel: (channelId) => dispatch(fetchChannel(channelId)),
  createServer: (server) => dispatch(createServer(server)),
  createServerMember: (serverMember) =>
    dispatch(createServerMember(serverMember)),
  createChannel: (channel) => dispatch(createChannel(channel)),
});

export default connect(mSTP, mDTP)(HomeIndex);
