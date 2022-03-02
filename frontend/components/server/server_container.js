import { connect } from "react-redux";
import { requestServer } from "../../actions/server_actions";
import Server from "./server";

const mSTP = (state, ownProps) => {
  // debugger
  return {
    currentServer: state.entities.servers[ownProps.match.params.id],
    enrolledServers: state.entities.users[state.session.id].servers
  };
};

const mDTP = (dispatch) => ({
  requestServer: (serverId) => dispatch(requestServer(serverId)),
});

export default connect(mSTP, mDTP)(Server);