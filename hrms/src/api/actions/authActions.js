// signup
export const CREATE_USER_REQUEST = "CREATE_USER_REQUEST";
export const CREATE_USER_SUCCESS = "CREATE_USER_SUCCESS";
export const CREATE_USER_FAILURE = "CREATE_USER_FAILURE";

// login
export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

// forgot password
export const FORGOT_PASSWORD_REQUEST = "FORGOT_PASSWORD_REQUEST";
export const FORGOT_PASSWORD_SUCCESS = "FORGOT_PASSWORD_SUCCESS";
export const FORGOT_PASSWORD_FAILURE = "FORGOT_PASSWORD_FAILURE";

// logout
export const LOGOUT_REQUEST = "LOGOUT_REQUEST";
export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";
export const LOGOUT_FAILURE = "LOGOUT_FAILURE";

// signup
export const createUserRequest = (session, resolve, reject) => ({
  type: CREATE_USER_REQUEST,
  payload: session,
  resolve,
  reject,
});

export const createUserSuccess = (user) => ({
  type: CREATE_USER_SUCCESS,
  payload: user,
});

export const createUserFailure = (error) => ({
  type: CREATE_USER_FAILURE,
  payload: error,
});

// login
export const loginRequest = (session, resolve, reject) => ({
  type: LOGIN_REQUEST,
  payload: session,
  resolve,
  reject,
});

export const loginSuccess = (session) => {
  return {
    type: LOGIN_SUCCESS,
    payload: session,
  };
};

export const loginFailure = (error) => ({
  type: LOGIN_FAILURE,
  payload: error,
});

// forgot password
export const forgotPasswordRequest = (session, resolve, reject) => ({
  type: FORGOT_PASSWORD_REQUEST,
  payload: session,
  resolve,
  reject,
});

export const forgotPasswordSuccess = (user) => ({
  type: FORGOT_PASSWORD_SUCCESS,
  payload: user,
});

export const forgotPasswordFailure = (error) => ({
  type: FORGOT_PASSWORD_FAILURE,
  payload: error,
});

// logout
export const logoutRequest = (session, resolve, reject) => ({
  type: LOGOUT_REQUEST,
  payload: session,
  resolve,
  reject, 
});

export const logoutSuccess = (user) => ({
  type: LOGOUT_SUCCESS,
  payload: user,
});

export const logoutFailure = (error) => ({
  type: LOGOUT_FAILURE,
  payload: error,
});
