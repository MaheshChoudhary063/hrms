// reducers/index.js
import { combineReducers } from "redux";
import userReducer from "./userReducer"; // Adjust the path to where your userReducer is located
// import hotelReducer from "./hotelReducer";
// import packageReducer from "./packageReducer";
// import tourReducer from "./tourReducer";
import customizationReducer from "./customizationReducer";

const rootReducer = combineReducers({
  customization: customizationReducer,
  auth: userReducer,
  // hotel: hotelReducer,
  // package: packageReducer,
  // tour:tourReducer,
  // add other reducers here
});

export default rootReducer;
