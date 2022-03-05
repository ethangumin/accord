import { connect } from "react-redux";
import { receiveMessage } from "../../actions/message_actions";

import Channel from "./channel";

// const mSTP = (state, ownProps) => ({
//   currentUser: state.entities.users[state.session.id],
// });

const mSTP = (state, ownProps) => {
  // debugger;
  return {
    currentUser: state.entities.users[state.session.id],
  };
};

const mDTP = (dispatch) => ({
  receiveMessage: (message) => dispatch(receiveMessage(message)),
});

export default connect(mSTP, mDTP)(Channel);
