import {
  DIS_ITEM_ID,
  GET_DISCIPLINES_REQUEST,
  GET_DISCIPLINES_SUCCESS,
  GET_DISCIPLINES_FAILURE,
  STUDENT_ID_REQUEST,
  STUDENT_ID_SUCCESS,
  STUDENT_ID_FAILURE,
  ADD_TASK_REQUEST,
  ADD_TASK_SUCCESS,
  ADD_TASK_FAILURE,
} from "../../constants";

export const getDisitemID = (id) => ({
  type: DIS_ITEM_ID,
  id,
});

export const getDisciplinesRequest = () => ({
  type: GET_DISCIPLINES_REQUEST,
});

export const getDisciplinesSuccess = (disciplines) => ({
  type: GET_DISCIPLINES_SUCCESS,
  disciplines,
});

export const getDisciplinesFailure = (message) => ({
  type: GET_DISCIPLINES_FAILURE,
  message,
});

export const studentIdRequest = (studId) => ({
  type: STUDENT_ID_REQUEST,
  studId,
});

export const studentIdSuccess = (request) => ({
  type: STUDENT_ID_SUCCESS,
  request,
});

export const studentIdFailure = (message) => ({
  type: STUDENT_ID_FAILURE,
  message,
});

export const addTaskRequest = (files) => ({
  type: ADD_TASK_REQUEST,
  files,
});

export const addTaskSuccess = (request) => ({
  type: ADD_TASK_SUCCESS,
  request,
});

export const addTaskFailure = (message) => ({
  type: ADD_TASK_FAILURE,
  message,
});
