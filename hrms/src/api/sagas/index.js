// rootSaga.js
import { all } from "redux-saga/effects";
import {
  watchCreateUser,
  watchForgotPassword,
  watchLogin,
  watchLogout,
} from "./authSaga";
import { watchUpdateProfile } from "./userSaga";
// import { watchAddUpdateHotel } from "./hotelSaga";
// import { watchAddUpdateTour } from "./tourSaga";
// import { watchAddUpdatePackage } from "./packageSaga"

export default function* rootSaga() {
  yield all([
    watchCreateUser(),
    watchLogin(),
    watchLogout(),
    watchForgotPassword(),
    watchUpdateProfile(),
    // watchAddUpdateHotel(),
    // watchAddUpdateTour(),
    // watchAddUpdatePackage(),
    // other sagas can be added here
  ]);
}
