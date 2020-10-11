import { api } from "../../Utils/api"
import history from "../../Utils/history"
import { LOG_IN, LOG_IN_FAILURE } from "../actions"

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
  api
    .post("/api/auth/verify", {
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