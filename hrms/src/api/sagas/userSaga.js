import {
  updateProfileSuccess,
  updateProfileFailure,
  UPDATE_PROFILE_REQUEST,
} from "api/actions";
import { addUpdateProfile } from "api/common";
import { call, put, takeLatest } from "redux-saga/effects";

function* handleUpdateProfile(action) {
  const { payload, resolve, reject } = action;
  try {
    const { id, admin, ...rest } = payload;
    const userCredential = yield call(addUpdateProfile, id, rest, admin);
    yield put(updateProfileSuccess(userCredential));
    if (resolve) {
      resolve(userCredential);
    }
  } catch (error) {
    yield put(updateProfileFailure(null));
    if (reject) {
      reject(error);
    }
  }
}

export function* watchUpdateProfile() {
  yield takeLatest(UPDATE_PROFILE_REQUEST, handleUpdateProfile);
}
