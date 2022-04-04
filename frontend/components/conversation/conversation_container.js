import { connect } from "react-redux";
import Conversation from "./conversation";

const mSTP = (state) => {
  return {};
};

const mDTP = (dispatch) => ({
  fetchChannel: (channelId) => dispatch(fetchChannel(channelId)),
  createServer: (server) => dispatch(createServer(server)),
  createServerMember: (serverMember) =>
    dispatch(createServerMember(serverMember)),
  createChannel: (channel) => dispatch(createChannel(channel)),
});

export default connect(mSTP, mDTP)(Conversation);
