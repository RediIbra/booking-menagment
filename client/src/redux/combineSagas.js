import { all } from "redux-saga/effects";
import loginSaga from "./auth/login/loginSaga";
import {
  addReservationSaga,
  getReservationsSaga,
  removeReservationSaga,
  editReservationSaga,
} from "./reservations/reservationsSaga";
import registerSaga from "./auth/register/registerSaga";
export default function* rootSaga() {
  yield all([
    loginSaga(),
    getReservationsSaga(),
    addReservationSaga(),
    registerSaga(),
    removeReservationSaga(),
    editReservationSaga(),
  ]);
}
