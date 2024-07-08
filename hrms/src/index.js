import ReactDOM from "react-dom/client";
import React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { BrowserRouter } from "react-router-dom";
import { Slide, ToastContainer } from "react-toastify";


import "./index.css";
import "react-toastify/dist/ReactToastify.css";

import App from "./App";
import { store } from "api/store";
import { persistor } from "api/store";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
    <ToastContainer
      position="bottom-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={true}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      transition={Slide}
    />
  </BrowserRouter>
);


// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyCqmlYCsUiLrf2A1VOSh-H78cqtcwqujBE",
//   authDomain: "hrms-fd376.firebaseapp.com",
//   projectId: "hrms-fd376",
//   storageBucket: "hrms-fd376.appspot.com",
//   messagingSenderId: "767901558786",
//   appId: "1:767901558786:web:80a70fa5a3d5348b321f1b"
// };

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
