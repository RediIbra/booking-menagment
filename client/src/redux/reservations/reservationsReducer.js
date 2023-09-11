import { createSlice } from "@reduxjs/toolkit";
import { logoutSuccess } from "../auth/login/loginReducer";

const initialState = {
  loading: false,
  error: null,
  allReservations: [],
  reservation: {},
};

const reservationsSlice = createSlice({
  name: "reservations",
  initialState,
  reducers: {
    getReservations: (state) => {
      state.loading = true;
    },
    setReservations: (state, { payload }) => {
      state.loading = false;
      state.error = null;
      if (payload.type === "filter" || payload.type === "sort") {
        if (payload.number === 0) {
          state.allReservations = payload.content;
        } else {
          state.allReservations = [
            ...state.allReservations,
            ...payload.content,
          ];
        }
      } else {
        if (
          ((state.allReservations.length >= 20 && payload.number !== 0) ||
            (state.allReservations.length === 0 && payload.number === 0)) &&
          state.allReservations.length < payload.totalElements
        ) {
          state.allReservations = [
            ...state.allReservations,
            ...payload.content,
          ];
        }
      }
    },
    addReservation: (state, { payload }) => {
      state.loading = true;
    },
    addReservationSuccess: (state, { payload }) => {
      state.loading = false;
      state.error = null;
      state.allReservations = { ...state.allReservations, payload };
    },
    addReservationFailure: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
    editReservation: (state, { payload }) => {
      state.loading = true;
      state.reservation = payload;
    },
    editReservationSuccess: (state, { payload }) => {
      state.loading = false;
      state.error = null;
      const index = state.allReservations.indexOf(
        state.allReservations.filter((r) => r.id === payload.id)[0]
      );
      state.allReservations.splice(index, 1, payload);
      state.reservation = {};
    },
    editReservationFailure: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
      state.reservation = {};
    },
    deleteReservation: (state, { payload }) => {
      state.loading = true;
      state.reservation =
        state.allReservations[
          state.allReservations.indexOf(
            state.allReservations.filter((r) => r.id === payload)
          )
        ];
    },
    deleteReservationSuccess: (state, { payload }) => {
      state.error = null;
      state.loading = false;
      state.reservation = {};
      state.allReservations = state.allReservations.filter(
        (r) => r.id !== payload
      );
    },
    deleteReservationFailure: (state, { payload }) => {
      state.error = payload;
      state.loading = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(logoutSuccess, (state) => {
      state.allReservations = [];
      state.error = null;
      state.reservation = {};
    });
  },
});

export const {
  getReservations,
  setReservations,
  addReservation,
  addReservationSuccess,
  addReservationFailure,
  editReservation,
  editReservationSuccess,
  editReservationFailure,
  deleteReservation,
  deleteReservationSuccess,
  deleteReservationFailure,
} = reservationsSlice.actions;
export default reservationsSlice.reducer;
