import { connect } from "react-redux";
import {
  addUpdateHotelRequest,
  createUserRequest,
  forgotPasswordRequest,
  loginRequest,
  logoutRequest,
  updateProfileRequest,
} from "./actions";

const mapStateToProps = (state) => ({
  Auth: state.auth,
  Customization: state.customization,
});

const mapDispatchToProps = (dispatch) => ({
  Login: (data, resolve, reject) =>
    dispatch(loginRequest(data, resolve, reject)),
  Register: (data, resolve, reject) =>
    dispatch(createUserRequest(data, resolve, reject)),
  ForgotPassword: (data, resolve, reject) =>
    dispatch(forgotPasswordRequest(data, resolve, reject)),
  Logout: (data, resolve, reject) =>
    dispatch(logoutRequest(data, resolve, reject)),
  AddUpdateProfile: (data, resolve, reject) =>
    dispatch(updateProfileRequest(data, resolve, reject))
});

export const withStateDispatch = (WrappedComponent) =>
  connect(mapStateToProps, mapDispatchToProps)(WrappedComponent);
