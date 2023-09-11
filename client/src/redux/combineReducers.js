import { combineReducers } from "@reduxjs/toolkit";
import loginReducer from "./auth/login/loginReducer";
import reservationsReducer from "./reservations/reservationsReducer";
import registerReducer from "./auth/register/registerReducer";

const rootReducer = combineReducers({
  login: loginReducer,
  reservations: reservationsReducer,
  register: registerReducer,
});

export default rootReducer;
