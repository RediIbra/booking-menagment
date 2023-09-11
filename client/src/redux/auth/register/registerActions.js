import {
  registerRequest,
  registerSuccess,
  registerFailure,
} from "./registerReducer";

export const register = (values) => ({
  type: registerRequest.type,
  payload: values,
});

export const registerSucceded = (user) => ({
  type: registerSuccess.type,
  payload: user,
});

export const registerFailed = (error) => ({
  type: registerFailure.type,
  payload: error,
});
