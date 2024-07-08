import {
  FORGOT_PASSWORD_FAILURE,
  FORGOT_PASSWORD_SUCCESS,
  FORGOT_PASSWORD_REQUEST,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT_FAILURE,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  CREATE_USER_FAILURE,
  CREATE_USER_SUCCESS,
  CREATE_USER_REQUEST,
} from "api/actions";

const initialState = {
  user: null,
  role: ["agent"],
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_USER_REQUEST:
    case CREATE_USER_SUCCESS:
    case CREATE_USER_FAILURE:
    case LOGIN_FAILURE:
    case LOGIN_REQUEST:
    case LOGOUT_FAILURE:
    case LOGOUT_REQUEST:
    case FORGOT_PASSWORD_REQUEST:
    case FORGOT_PASSWORD_FAILURE:
    case FORGOT_PASSWORD_SUCCESS:
      return { ...state };
    case LOGIN_SUCCESS:
      return {
        ...state,
        user: action.payload.user,
        role: action.payload.role,
      };
    case LOGOUT_SUCCESS:
      return { ...initialState };
    default:
      return state;
  }
};

export default userReducer;
