import { combineReducers } from "redux";
import { users } from "./containers/LogIn/reducer";
import { disciplines, disitemID, studentTasks } from "./containers/Disciplines/reducer";
import { groups, taskItemID, tasks } from "./containers/Groups/reducer";


export default combineReducers({
    users,
    disciplines,
    disitemID,
    studentTasks,
    groups,
    taskItemID,
    tasks,
});