import {
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  REGISTER_START,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGOUT_SUCCESS
} from './types';

const INITIAL_STATE = {
  isLoading: false,
  error: null,
  userData: null
};

export default (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case LOGIN_START:
    case REGISTER_START:
      return {
        ...state,
        isLoading: true,
        error: null
      };
    case LOGIN_SUCCESS:
    case REGISTER_SUCCESS:
      return {
        ...state,
        userData: payload,
        isLoading: false
      };
    case LOGIN_FAIL:
    case REGISTER_FAIL:
      return {
        ...state,
        error: payload,
        isLoading: false
      };
    case LOGOUT_SUCCESS:
      return {
        error: null,
        userData: null,
        isLoading: false
      };
    default:
      return state;
  }
};
