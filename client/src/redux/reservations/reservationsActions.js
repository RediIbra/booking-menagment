import {
  getReservations,
  setReservations,
  addReservation,
  editReservation,
  deleteReservation,
  addReservationSuccess,
  addReservationFailure,
} from "./reservationsReducer";

export const getAllreservations = (params) => ({
  type: getReservations.type,
  payload: params,
});

export const setAllReservations = (data) => ({
  type: setReservations.type,
  payload: data,
});

export const addSingleReservation = (values) => ({
  type: addReservation.type,
  payload: values,
});

export const addSingleSuccess = (reservation) => ({
  type: addReservationSuccess.type,
  payload: reservation,
});

export const addSingleFailure = (error) => ({
  type: addReservationFailure.type,
  payload: error,
});

export const editSingleReservation = (reservation) => ({
  type: editReservation.type,
  payload: reservation,
});

export const deleteSingleReservation = (resId) => ({
  type: deleteReservation.type,
  payload: resId,
});
