import {
  loginRequest,
  loginSuccess,
  loginFailure,
  logoutSuccess,
} from "./loginReducer";

export const login = (values) => ({
  type: loginRequest.type,
  payload: values,
});

export const loginSucceded = (user) => ({
  type: loginSuccess.type,
  payload: user,
});

export const loginFailed = (error) => ({
  type: loginFailure.type,
  payload: error,
});

export const logOut = (error) => ({
  type: logoutSuccess.type,
  payload: error,
});
