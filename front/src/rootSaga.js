import { all } from "redux-saga/effects";
import { getUsersWatcher } from "./containers/LogIn/saga";
import { getDisciplinesWatcher, postStudIdWatcher } from "./containers/Disciplines/saga";
import { postTeacherIdWatcher } from "./containers/Groups/saga";

export default function* rootSaga() {
    yield all([
        getUsersWatcher(),
        getDisciplinesWatcher(),
        postStudIdWatcher(),
        postTeacherIdWatcher(),
        // postTaskWatcher(),
    ])
}