import {
    LOG_IN,
    LOG_OFF,
    LOG_IN_FAILURE
  } from '../actions'
  
  const INITIAL_STATE = { isAuthenticated: false, error: '' }
  
  export default (state = INITIAL_STATE, { type, user, error }) => {
    switch (type) {
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
      case LOG_IN_FAILURE:
        return {
          ...state,
          error,
        }
      default:
        return state
    }
  }
  