import { connect } from "react-redux";
import ServerIndex from "./server_index";
import { logout } from "../../actions/session_actions";
import { fetchUser } from "../../actions/user_actions";

const mSTP = (state) => ({
  currentUser: state.entities.users[state.session.id],
  enrolledServers: state.entities.users[state.session.id].servers
});

const mDTP = (dispatch) => ({
  logout: () => dispatch(logout()),
  // fetchCurrentUser: (userId) => dispatch(fetchUser(userId)),
});

export default connect(mSTP, mDTP)(ServerIndex);
