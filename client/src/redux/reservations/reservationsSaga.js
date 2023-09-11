import axios from "axios";
import { put, takeLatest } from "redux-saga/effects";
import {
  addReservation,
  deleteReservation,
  deleteReservationFailure,
  deleteReservationSuccess,
  getReservations,
  editReservation,
  editReservationSuccess,
  editReservationFailure,
} from "./reservationsReducer";
import { setAllReservations, addSingleFailure } from "./reservationsActions";
import { Notification } from "../../components/notification/Notification";

const getResFunction = async (params, pageSize, accessToken, type) => {
  const paramsForAPI = { ...params, pageNo: pageSize };
  console.log("params: ", paramsForAPI);
  const response = await axios.get(
    "http://192.168.10.94:8080/enjoyAlbania/reservation/findAll",
    {
      params: paramsForAPI,
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );
  console.log(response);
  return { ...response.data, type: type };
};

function* getRes({ payload: { params, pageSize, accessToken, type } }) {
  try {
    const response = yield getResFunction(params, pageSize, accessToken, type);
    console.log(response);
    yield put(setAllReservations(response));
  } catch (e) {
    console.log(e);
  }
}

const addResFunction = async (values, accessToken) => {
  const response = await axios.post(
    "http://192.168.10.94:8080/enjoyAlbania/reservation",
    values,
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );
  if (response.status === 200) {
    return response.data;
  } else if (response.response.status === 400) {
    return response.data;
  }

  console.log("params: ", values);
  console.log(response);
};

function* addRes({ payload: { values, accessToken } }) {
  try {
    const response = yield addResFunction(values, accessToken);
    Notification("success", response, 1000);
    setTimeout(() => {
      window.location.href = "/dashboard";
    }, 1200);
  } catch (e) {
    yield put(addSingleFailure(e.response.data));
    Notification("error", e.response.data, 1000);
    console.log(e.response.data);
  }
}

const removeRes = async (resId, accessToken) => {
  console.log(resId, accessToken);
  const response = await axios.delete(
    `http://192.168.10.94:8080/enjoyAlbania/reservation/${resId}`,
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );
  if (response.status === 200) {
    return response.data;
  } else {
    return "Could not delete record! Please try again!";
  }
};

function* removeReservation({ payload: { resId, accessToken } }) {
  try {
    const response = yield removeRes(resId, accessToken);
    Notification("success", response, 1000);
    yield put(deleteReservationSuccess(resId));
  } catch (e) {
    yield put(deleteReservationFailure(e.response.data));
    Notification("error", e.response.data, 1000);
  }
}

const editRes = async (values, accessToken) => {
  const response = await axios.post(
    "http://192.168.10.94:8080/enjoyAlbania/reservation",
    values,
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );
  console.log(response);
  if (response.status === 200) {
    return response.data;
  } else {
    return response.response.data;
  }
};

function* updateReservation({ payload: { values, accessToken } }) {
  try {
    const response = yield editRes(values, accessToken);
    yield put(editReservationSuccess(values));
    Notification("success", response, 1000);
    setTimeout(() => {
      window.location.href = "/dashboard";
    }, 1200);
  } catch (e) {
    yield put(editReservationFailure(e.response.data));
    Notification("error", e.response.data, 1000);
  }
}

export function* getReservationsSaga() {
  yield takeLatest(getReservations.type, getRes);
}

export function* addReservationSaga() {
  yield takeLatest(addReservation.type, addRes);
}

export function* removeReservationSaga() {
  yield takeLatest(deleteReservation.type, removeReservation);
}

export function* editReservationSaga() {
  yield takeLatest(editReservation.type, updateReservation);
}
