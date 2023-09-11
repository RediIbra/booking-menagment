import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import createSagaMiddleware from "redux-saga";
import rootReducer from "./combineReducers";
import rootSaga from "./combineSagas";

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["reservations"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: persistedReducer,
  middleware: [sagaMiddleware],
});

const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

export { store, persistor };
