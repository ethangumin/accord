import { connect } from "react-redux";
import { receiveMessage, receiveMessages } from "../../actions/message_actions";
import { logout } from "../../actions/session_actions";
import Channel from "./channel";

const mSTP = (state, ownProps) => {
  return {
    currentUser: state.entities.users[state.session.id],
    currentMessages: state.entities.messages,
    currentChannelId: ownProps.currentChannelId,
    currentChannels: ownProps.currentChannels,
  };
};

const mDTP = (dispatch) => ({
  receiveMessage: (message) => dispatch(receiveMessage(message)),
  receiveMessages: (messages) => dispatch(receiveMessages(messages)),
  logout: () => dispatch(logout()),
});

export default connect(mSTP, mDTP)(Channel);
