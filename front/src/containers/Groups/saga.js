import axios from "axios";
import { call, put, fork, take } from "redux-saga/effects";
import {
    TEACHER_ID_REQUEST,
    TEACHER_ID_SUCCESS,
    TEACHER_ID_FAILURE,
    ADD_TASK_REQUEST,
    ADD_TASK_SUCCESS,
    ADD_TASK_FAILURE,
} from "../../constants";

function* postTeacherId(teacherId) {
  const path = "http://127.0.0.1:5000/groups";
  try {
    const request = yield call(axios.post, path, {
      teacherId,
    });
    yield put({ type: TEACHER_ID_SUCCESS, request });
  } catch (error) {
    yield put({ type: TEACHER_ID_FAILURE, message: error });
  }
}

export function* postTeacherIdWatcher() {
  const { teacherId } = yield take(TEACHER_ID_REQUEST);
  yield fork(postTeacherId, teacherId);
}


function* postTask(files) {
  console.log(files.file, 'saga')
    const headers = {
        'Access-Control-Allow-Origin': "http://localhost:3000/groups",
        'usernameContent-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': 'OAuth AQAAAABezCaoAADLW_zvu8duokEGiLMyCXH2BoU',
    }
    const path = "https://cloud-api.yandex.net/v1/disk/resources/upload";
    const { file } = files;
    
        console.log(file.file instanceof Blob, 'saga')
    try {
      const request = yield call(axios.post, path, {
          path: '/tasks',
        // url: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fsnipp.ru%2Fphp%2Fdisk-yandex&psig=AOvVaw0Jr8aq4RMrHkYfV8Pi5rpM&ust=1654270104264000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCJC0tceKj_gCFQAAAAAdAAAAABAD',
    url: file.file,  
    }, {
        headers,
      });
      console.log(request)
      yield put({ type: ADD_TASK_SUCCESS, request });
    } catch (error) {
        console.log(error)
      yield put({ type: ADD_TASK_FAILURE, message: error });
    }
  }
  
  export function* postTaskWatcher() {
    const { files } = yield take(ADD_TASK_REQUEST);
    yield fork(postTask, files);
  }
  