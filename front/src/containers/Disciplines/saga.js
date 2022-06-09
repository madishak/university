import axios from "axios";
import { call, put, takeEvery, fork, take } from "redux-saga/effects";
import {
  GET_DISCIPLINES_REQUEST,
  GET_DISCIPLINES_SUCCESS,
  GET_DISCIPLINES_FAILURE,
  STUDENT_ID_REQUEST,
  STUDENT_ID_SUCCESS,
  STUDENT_ID_FAILURE,
} from "../../constants";

function* getDisciplines() {
  const path = "http://127.0.0.1:5000/disciplines";
  try {
    const response = yield call(axios.get, path);
    const disciplines = yield response.data;
    console.log(disciplines)
    yield put({ type: GET_DISCIPLINES_SUCCESS, disciplines });
  } catch (error) {
    yield put({ type: GET_DISCIPLINES_FAILURE, message: error });
  }
}

export function* getDisciplinesWatcher() {
  yield takeEvery(GET_DISCIPLINES_REQUEST, getDisciplines);
}

function* postStudId(studId) {
  const path = "http://127.0.0.1:5000/disciplines";
  try {
    const request = yield call(axios.post, path, {
      studId,
    });
    yield put({ type: STUDENT_ID_SUCCESS, request });
  } catch (error) {
    yield put({ type: STUDENT_ID_FAILURE, message: error });
  }
}

export function* postStudIdWatcher() {
  const { studId } = yield take(STUDENT_ID_REQUEST);
  yield fork(postStudId, studId);
}
