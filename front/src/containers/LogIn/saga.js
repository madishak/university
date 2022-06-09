import axios from "axios";
import { call, put, takeEvery } from "redux-saga/effects";
import {
  GET_USERS_REQUEST,
  GET_USERS_SUCCESS,
  GET_USERS_FAILURE,
  // STUDENT_ID_REQUEST,
  // STUDENT_ID_SUCCESS, 
  // STUDENT_ID_FAILURE
} from "../../constants";

function* getUsers() {
  const path = "http://127.0.0.1:5000/ ";
  try {
    const response = yield call(axios.get, path);
    const users = yield response.data;
    yield put({ type: GET_USERS_SUCCESS, users });
  } catch (error) {
    yield put({ type: GET_USERS_FAILURE, message: error });
  }
}

export function* getUsersWatcher() {
  yield takeEvery(GET_USERS_REQUEST, getUsers);
}

// export default getUsersWatcher;


// function* postStudId(studId) {
//   const path = "http://127.0.0.1:5000/disciplines"
//   try {
//     const request = yield call(axios.post, path, {
//       studId,
//     });
//     console.log(request);
//     yield put({ type: STUDENT_ID_SUCCESS, request });
//   } catch (error) {
//     yield put({ type: STUDENT_ID_FAILURE, message: error });
//   }
// }

// export function* postStudIdWatcher() {
//   const { studId } = yield take(STUDENT_ID_REQUEST);
//   yield fork(postStudId, studId);
// }

// export default loginUserWatcher;