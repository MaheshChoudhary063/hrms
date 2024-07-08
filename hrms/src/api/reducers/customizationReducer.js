import { SET_DARK_MODE, TOGGLE_DARK_MODE } from "api/actions";

const initialState = {
  isDarkMode: false,
};

const customizationReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_DARK_MODE:
      return {
        ...state,
        isDarkMode: !state.isDarkMode,
      };
    case SET_DARK_MODE:
      return {
        ...state,
        isDarkMode: action.payload,
      };
    default:
      return state;
  }
};

export default customizationReducer;
