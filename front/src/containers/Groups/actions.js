import {
    TEACHER_ID_REQUEST,
    TEACHER_ID_SUCCESS,
    TEACHER_ID_FAILURE,
    TASK_ITEM_ID,
    ADD_TASK_REQUEST,
    ADD_TASK_SUCCESS,
    ADD_TASK_FAILURE,
  } from "../../constants";
  
  export const getDisitemID = (task_id) => ({
    type: TASK_ITEM_ID,
    task_id,
  });
  
  export const studentIdRequest = (teacherId) => ({
    type: TEACHER_ID_REQUEST,
    teacherId,
  });
  
  export const studentIdSuccess = (request) => ({
    type: TEACHER_ID_SUCCESS,
    request,
  });
  
  export const studentIdFailure = (message) => ({
    type: TEACHER_ID_FAILURE,
    message,
  });
  
export const addTaskRequest = (files) => ({
    type: ADD_TASK_REQUEST,
    files,
})

export const addTaskSuccess = (request) => ({
    type: ADD_TASK_SUCCESS,
    request,
  });
  
  export const addTaskFailure = (message) => ({
    type: ADD_TASK_FAILURE,
    message,
  });