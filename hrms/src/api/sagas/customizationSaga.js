import { put, takeEvery, call, all } from "redux-saga/effects";
import { LOAD_DARK_MODE, SET_DARK_MODE, TOGGLE_DARK_MODE } from "./actionTypes";

// Mock function to simulate loading from local storage
const loadDarkModeFromLocalStorage = () => {
  return JSON.parse(localStorage.getItem("darkMode")) || false;
};

// Mock function to simulate saving to local storage
const saveDarkModeToLocalStorage = (isDarkMode) => {
  localStorage.setItem("darkMode", JSON.stringify(isDarkMode));
};

function* loadDarkModeSaga() {
  const isDarkMode = yield call(loadDarkModeFromLocalStorage);
  yield put({ type: SET_DARK_MODE, payload: isDarkMode });
}

function* toggleDarkModeSaga() {
  const isDarkMode = yield call(loadDarkModeFromLocalStorage);
  const newMode = !isDarkMode;
  yield call(saveDarkModeToLocalStorage, newMode);
  yield put({ type: SET_DARK_MODE, payload: newMode });
}

function* watchLoadDarkMode() {
  yield takeEvery(LOAD_DARK_MODE, loadDarkModeSaga);
}

function* watchToggleDarkMode() {
  yield takeEvery(TOGGLE_DARK_MODE, toggleDarkModeSaga);
}

export default function* rootSaga() {
  yield all([watchLoadDarkMode(), watchToggleDarkMode()]);
}
