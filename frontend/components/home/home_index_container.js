import { connect } from "react-redux";
import HomeIndex from "./home_index";
import { logout } from "../../actions/session_actions";
import { createServer } from "../../actions/server_actions";

const mSTP = (state) => ({
  currentUser: state.entities.users[state.session.id],
  enrolledServers: state.entities.users[state.session.id].servers,
  friends: state.entities.users[state.session.id].friends,
});

const mDTP = (dispatch) => ({
  logout: () => dispatch(logout()),
  createServer: (server) => dispatch(createServer(server)),
});

export default connect(mSTP, mDTP)(HomeIndex);
