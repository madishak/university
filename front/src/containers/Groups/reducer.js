import {
  TEACHER_ID_REQUEST,
  TEACHER_ID_SUCCESS,
  TEACHER_ID_FAILURE,
  TASK_ITEM_ID,
  ADD_TASK_REQUEST,
  ADD_TASK_SUCCESS,
  ADD_TASK_FAILURE,
} from "../../constants";

export const groups = (state = {}, action) => {
  switch (action.type) {
    case TEACHER_ID_REQUEST: {
      const { teacherId } = action;
      return { ...state, teacherId };
    }
    case TEACHER_ID_SUCCESS: {
      const { request } = action;
      return { ...state, request };
    }
    case TEACHER_ID_FAILURE: {
      const { message } = action;
      return { ...state, message };
    }
    default:
      return state;
  }
};

export const taskItemID = (state = "", action) => {
  switch (action.type) {
    case TASK_ITEM_ID:
      return action.task_id;
    default:
      return state;
  }
};

export const tasks = (state = {}, action) => {
  switch (action.type) {
    case ADD_TASK_REQUEST:
      const { files } = action;
      return { ...state, files };
    case ADD_TASK_SUCCESS: {
      const { request } = action;
      return { ...state, request };
    }
    case ADD_TASK_FAILURE: {
      const { message } = action;
      return { ...state, message };
    }
    default:
      return state;
  }
};
