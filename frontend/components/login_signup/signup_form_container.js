import { connect } from "react-redux";
import SignupForm from "./signup_form";
import { signup } from "../../actions/session_actions";

const mSTP = (state) => {
  return {
    errors: state.errors.session,
    activeUser: state.session.id,
  };
};

const mDTP = (dispatch) => {
  return {
    signup: (user) => dispatch(signup(user)),
  };
};

export default connect(mSTP, mDTP)(SignupForm);
