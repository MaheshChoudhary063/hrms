// store.js
import { createStore, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import createSagaMiddleware from "redux-saga";
import rootReducer from "./reducers"; // Adjust the import to your actual file
import rootSaga from "./sagas"; // Adjust the import to your actual file

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["auth", "customization"], // only persist user reducer (you can add other reducers if needed)
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const sagaMiddleware = createSagaMiddleware();

const store = createStore(persistedReducer, applyMiddleware(sagaMiddleware));

const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

export { store, persistor };
