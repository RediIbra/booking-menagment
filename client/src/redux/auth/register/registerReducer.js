import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  error: null,
  status: "",
  registerToken: "",
};

const registerSlice = createSlice({
  name: "register",
  initialState,
  reducers: {
    registerRequest: (state) => {
      state.loading = true;
    },
    registerSuccess: (state, { payload }) => {
      state.loading = false;
      state.registerToken = payload;
      state.error = "";
    },
    registerFailure: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
  },
});

export const { registerRequest, registerSuccess, registerFailure } =
  registerSlice.actions;
export default registerSlice.reducer;
