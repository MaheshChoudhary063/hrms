// sagas.js
import { call, put, takeLatest } from "redux-saga/effects";
import { isEmpty } from "lodash";
import {
  LOGIN_REQUEST,
  LOGOUT_REQUEST,
  CREATE_USER_REQUEST,
  createUserSuccess,
  createUserFailure,
  loginSuccess,
  loginFailure,
} from "api/actions";
import { createUser, loginUser, logOut } from "api/common";
import { logoutSuccess } from "api/actions";
import { logoutFailure } from "api/actions";
import { FORGOT_PASSWORD_REQUEST } from "api/actions";
import { forgotPasswordSuccess } from "api/actions";
import { forgotPasswordFailure } from "api/actions";
import { sendPasswordReset } from "api/common";

function* handleCreateUser(action) {
  const { payload, resolve, reject } = action;
  try {
    const { email, password, role } = payload;
    const response = yield call(createUser, email, password, role);
    if (response.success) {
      yield put(createUserSuccess(response.user));
      resolve(response.user);
    } else {
      yield put(createUserFailure(response.message));
      reject(response.message);
    }
  } catch (error) {
    yield put(createUserFailure(error.message));
  }
}

export function* watchCreateUser() {
  yield takeLatest(CREATE_USER_REQUEST, handleCreateUser);
}

function* handleLogin(action) {
  const { payload, resolve, reject } = action;
  try {
    const { email, password, rememberMe } = payload;
    const userCredential = yield call(loginUser, email, password, rememberMe);

    const { user, role } = userCredential.data;
    yield put(loginSuccess({ user, role }));
    if (resolve) {
      resolve({ user, role });
    }
  } catch (error) {
    yield put(loginFailure(null));
    if (reject) {
      reject(error);
    }
  }
}

export function* watchLogin() {
  yield takeLatest(LOGIN_REQUEST, handleLogin);
}

function* handleLogout(action) {
  const { payload, resolve, reject } = action;
  try {
    const user = yield call(logOut, payload);
    if (!isEmpty(user)) {
      yield put(logoutSuccess(user));
      if (resolve) {
        resolve(user);
      }
    } else {
      yield put(logoutFailure(null));
      if (reject) {
        reject(null);
      }
    }
  } catch (error) {
    yield put(logoutFailure(error.message));
    if (reject) {
      reject(error);
    }
  }
}

export function* watchLogout() {
  yield takeLatest(LOGOUT_REQUEST, handleLogout);
}

function* handleForgotPassword(action) {
  const { payload, resolve, reject } = action;
  try {
    const user = yield call(sendPasswordReset, payload);
    if (!isEmpty(user)) {
      yield put(forgotPasswordSuccess(user));
      if (resolve) {
        resolve(user);
      }
    } else {
      yield put(forgotPasswordFailure(null));
      if (reject) {
        reject(null);
      }
    }
  } catch (error) {
    yield put(forgotPasswordFailure(error.message));
    if (reject) {
      reject(error);
    }
  }
}

export function* watchForgotPassword() {
  yield takeLatest(FORGOT_PASSWORD_REQUEST, handleForgotPassword);
}
