import { connect } from "react-redux";
import ServerIndex from "./server_index";
import { logout } from "../../actions/session_actions";

const mSTP = (state) => ({
  currentUser: state.entities.users[state.session.id],
  enrolledServers: state.entities.users[state.session.id].servers,
  friends: state.entities.users[state.session.id].friends,
});

const mDTP = (dispatch) => ({
  logout: () => dispatch(logout()),
});

export default connect(mSTP, mDTP)(ServerIndex);
