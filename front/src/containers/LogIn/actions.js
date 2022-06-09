import {
    GET_USERS_REQUEST,
    GET_USERS_SUCCESS,
    GET_USERS_FAILURE,
    LOGGED_IN,
    // STUDENT_ID_REQUEST,
    // STUDENT_ID_SUCCESS,
    // STUDENT_ID_FAILURE
  } from "../../constants";
  
  export const getUsersRequest = () => ({
      type: GET_USERS_REQUEST,
  })
  
  export const getUsersSuccess = (users) => ({
      type: GET_USERS_SUCCESS,
      users,      
  })
  
  export const getUsersFailure = (message) => ({
      type: GET_USERS_FAILURE,
      message,
  })

  export const loggedIn = (state) => ({
    type: LOGGED_IN,
    loggedIn: state,
})

// export const studentIdRequest = (studId) => ({
//     type: STUDENT_ID_REQUEST,
//     studId,
// })

// export const studentIdSuccess = (request) => ({
//     type: STUDENT_ID_SUCCESS,
//     request,
// })

// export const studentIdFailure = (message) => ({
//     type: STUDENT_ID_FAILURE,
//     message,
// })