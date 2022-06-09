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

export const disciplines = (state = {}, action) => {
  switch (action.type) {
    case GET_DISCIPLINES_REQUEST: {
      return state;
    }
    case GET_DISCIPLINES_SUCCESS: {
      const { disciplines } = action;
      return { ...state, disciplines };
    }
    case GET_DISCIPLINES_FAILURE: {
      const { message } = action;
      return { ...state, message };
    }
    case STUDENT_ID_REQUEST: {
      const { studId } = action;
      return { ...state, studId };
    }
    case STUDENT_ID_SUCCESS: {
      const { request } = action;
      return { ...state, request };
    }
    case STUDENT_ID_FAILURE: {
      const { message } = action;
      return { ...state, message };
    }
    default:
      return state;
  }
};

export const disitemID = (state = "", action) => {
  switch (action.type) {
    case DIS_ITEM_ID:
      return action.id;
    default:
      return state;
  }
};

export const studentTasks = (state = {}, action) => {
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
