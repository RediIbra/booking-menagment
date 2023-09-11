import { createSlice } from "@reduxjs/toolkit";
import { Notification } from "../../../components/notification/Notification";
const initialState = {
  loading: false,
  error: null,
  status: "",
  user: {},
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    loginRequest: (state) => {
      state.loading = true;
    },
    loginSuccess: (state, { payload }) => {
      state.loading = false;
      state.user = payload;
      state.error = "";
    },
    loginFailure: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
      state.user = {};
    },
    logoutSuccess: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
      state.user = {};
      Notification("info", "Logged Out", 500);
    },
  },
});

export const { loginRequest, loginSuccess, loginFailure, logoutSuccess } =
  loginSlice.actions;
export default loginSlice.reducer;
