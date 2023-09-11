import axios from "axios";
import { put, takeLatest } from "redux-saga/effects";
import { loginSucceded, loginFailed } from "./loginActions";
import { Notification } from "../../../components/notification/Notification";

const logInFunction = async (email, password) => {
  const loginFormData = new FormData();
  loginFormData.append("email", email);
  loginFormData.append("password", password);

  for (const value of loginFormData.values()) {
    console.log(value);
  }
  const response = await axios.post(
    "http://192.168.10.94:8080/enjoyAlbania/auth/login",
    loginFormData
  );
  console.log(response);
  if (!response.data.statusCode) {
    return response.data;
  } else {
    return {
      statusCode: response.data.statusCode,
      user: response.data.body,
    };
  }
};

function* logIn({ payload: { email, password } }) {
  try {
    const response = yield logInFunction(email, password);
    if (response.statusCode) {
      yield put(loginSucceded(response.user));
      Notification("success", "Logged in successfully", 500);
    } else {
      yield put(loginFailed(response));
      console.log(response);
      Notification("error", response, 1000);
    }
  } catch (e) {
    yield put(loginFailed(e.message));
  }
}

function* loginSaga() {
  yield takeLatest("login/loginRequest", logIn);
}

export default loginSaga;
