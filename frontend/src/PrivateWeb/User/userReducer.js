import { FETCH_USERS_DATA, USER_CREATE_EXISTS } from '../../PublicWeb/actions'

const INITIAL_STATE = { isAuthenticated: false, data: [], error: '' }
export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case FETCH_USERS_DATA:
        return {
          ...state,
          data: action.items,
          error: '',
        };
      case USER_CREATE_EXISTS:
        return {
          ...state,
          error: action.error,
        }
      default: 
        return state;
    }
  }