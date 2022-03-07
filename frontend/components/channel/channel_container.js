import { connect } from "react-redux";
import { receiveMessage, receiveMessages } from "../../actions/message_actions";
import Channel from "./channel";

const mSTP = (state, ownProps) => {
  // debugger;
  return {
    currentUser: state.entities.users[state.session.id],
    currentMessages: state.entities.messages,
    currentChannelId: ownProps.currentChannelId,
  };
};

const mDTP = (dispatch) => ({
  receiveMessage: (message) => dispatch(receiveMessage(message)),
  receiveMessages: (messages) => dispatch(receiveMessages(messages)),
});

export default connect(mSTP, mDTP)(Channel);
