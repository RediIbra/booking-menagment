import axios from "axios";
import { put, takeLatest } from "redux-saga/effects";
import { registerSucceded, registerFailed } from "./registerActions";

import { Notification } from "../../../components/notification/Notification";

const registerInFunction = async (name, surname, email, phone) => {
  const response = await axios.post(
    "http://192.168.10.94:8080/enjoyAlbania/registration",
    {
      name: name,
      surname: surname,
      phone: phone,
      email: email,
      role: "ADMIN",
    }
  );

  return response;
};

function* register({ payload: { name, surname, email, phone } }) {
  try {
    const response = yield registerInFunction(
      name,
      surname,
      email,

      phone
    );
    Notification(
      "success",
      "Registered Successfully. Please check your email!",
      1500
    );
    localStorage.setItem("registerToken", response.data);
    yield put(registerSucceded(response.data));
  } catch (e) {
    console.log(e);
    yield put(registerFailed(e.response.data));
    Notification("error", e.request.response, 2500);
  }
}

function* registerSaga() {
  yield takeLatest("register/registerRequest", register);
}

export default registerSaga;
