import { connect } from "react-redux";
import LoginForm from "./login_form";
import { login, clearSessionErrors } from "../../actions/session_actions";

const mSTP = (state) => {
  return {
    errors: state.errors.session,
    activeUser: state.session.id,
  };
};

const mDTP = (dispatch) => {
  return {
    login: (user) => dispatch(login(user)),
    clearSessionErrors: () => dispatch(clearSessionErrors()),
  };
};

export default connect(mSTP, mDTP)(LoginForm);
