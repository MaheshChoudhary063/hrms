export const TOGGLE_DARK_MODE = "TOGGLE_DARK_MODE";
export const SET_DARK_MODE = "SET_DARK_MODE";
export const LOAD_DARK_MODE = "LOAD_DARK_MODE";

export const toggleDarkMode = () => ({
  type: TOGGLE_DARK_MODE,
});

export const setDarkMode = (isDarkMode) => ({
  type: SET_DARK_MODE,
  payload: isDarkMode,
});

export const loadDarkMode = () => ({
  type: LOAD_DARK_MODE,
});
