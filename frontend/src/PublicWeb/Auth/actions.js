import { api } from "../../Utils/api"
import history from "../../Utils/history"
import { LOG_IN, LOG_IN_FAILURE, VERIFICATION_FAILURE } from "../actions"

export const LoginPress = data => dispatch => {
  api
    .post("/api/auth/authenticate", {
      email: data.email,
      password: data.password
    })
    .then(response => {
      dispatch({
        type: LOG_IN,
        user: response.data
      })
      localStorage.setItem('user', JSON.stringify(response.data));
      history.push("/pr/main")
    })
    .catch((err) => {
        if(typeof err.response === 'undefined'){
            dispatch({
                type: LOG_IN_FAILURE,
                error: "Network error, please check server availability"
              })
        } else {
            const error = err.response.data
            dispatch({
                type: LOG_IN_FAILURE,
                error: error
              })
        }
    })
}

export const Verification = data => dispatch => {
  if(data.password === data.passwordToMatch){
    if(data.password.length < 6){
      dispatch({
        type: VERIFICATION_FAILURE,
        error: "Password must be at least 6 characters long"
      })
    }
    else {
      api
      .post("/api/auth/verify/" + window.location.href.split('/')[window.location.href.split('/').length-1], {
        password: data.password
      })
      .then(response => {
        history.push("/login")
      })
      .catch((err) => {
          if(typeof err.response === 'undefined'){
              dispatch({
                  type: VERIFICATION_FAILURE,
                  error: "Network error, please check server availability"
                })
          } else {
              const error = err.response.data
              dispatch({
                  type: VERIFICATION_FAILURE,
                  error: error
                })
          }
      });
    }
  }
  else
  {
    dispatch({
      type: VERIFICATION_FAILURE,
      error: "Passwords do not match"
    })
  }
}