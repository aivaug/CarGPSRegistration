import {
    AUTH_USER,
    UNAUTH_USER,
    UPDATE_USER_DATA,
    LOG_IN,
    LOG_OFF,
    REGISTER_FAILURE,
    LOG_IN_FAILURE
  } from '../actions'
  
  const INITIAL_STATE = { isAuthenticated: false, error: '' }
  
  export default (state = INITIAL_STATE, { type, user, error }) => {
    switch (type) {
      case AUTH_USER:
        return {
          ...state,
          isAuthenticated: true,
          error: '',
        }
      case UNAUTH_USER:
        return {
          ...state,
          isAuthenticated: false,
          error: '',
        }
      case LOG_IN:
        return {
          ...state,
          isAuthenticated: true,
          error: '',
        }
      case LOG_OFF:
        return {
          isAuthenticated: false,
          error: '',
        }
      case UPDATE_USER_DATA:
        return {
          ...state,
          ...user,
          error: '',
        }
      case REGISTER_FAILURE:
        return {
          ...state,
          error,
        }
      case LOG_IN_FAILURE:
        return {
          ...state,
          error,
        }
      default:
        return state
    }
  }
  