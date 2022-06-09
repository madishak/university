import {
    GET_USERS_REQUEST,
    GET_USERS_SUCCESS,
    GET_USERS_FAILURE,
    LOGGED_IN,
    // STUDENT_ID_REQUEST,
    // STUDENT_ID_SUCCESS, 
    // STUDENT_ID_FAILURE
  } from "../../constants";

  export const users = (state = {}, action) => {
    switch (action.type) {
      case GET_USERS_REQUEST: {
        return state;
      }
      case GET_USERS_SUCCESS: {
        const { users } = action;
        return { ...state, users };
      }
      case GET_USERS_FAILURE: {
        const { message } = action;
        return { ...state, message };
      }
      case LOGGED_IN: {
        const { loggedIn } = action;
        return { ...state, loggedIn };
      }
      // case STUDENT_ID_REQUEST: {
      //   const { studId } = action;
      //   return { ...state, studId };;
      // }
      // case STUDENT_ID_SUCCESS: {
      //   const { request } = action;
      //   return { ...state, request };
      // }
      // case STUDENT_ID_FAILURE: {
      //   const { message } = action;
      //   return { ...state, message };
      // }
      default:
        return state;
    }
  };

  // export default users;

  // export const disciplines = (state = {}, action) => {
  //   switch (action.type) {
  //     case STUDENT_ID_REQUEST: {
  //       const { studId } = action;
  //       return { ...state, studId };;
  //     }
  //     case STUDENT_ID_SUCCESS: {
  //       const { request } = action;
  //       return { ...state, request };
  //     }
  //     case STUDENT_ID_FAILURE: {
  //       const { message } = action;
  //       return { ...state, message };
  //     }
  //     default:
  //       return state;
  //   }
  // };