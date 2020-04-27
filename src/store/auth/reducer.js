import { LOGIN_START, LOGIN_SUCCESS, LOGIN_FAIL } from './types';

const INITIAL_STATE = {
  isLoggingIn: false,
  error: null,
  userData: null
};

export default (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case LOGIN_START:
      return {
        ...state,
        isLoggingIn: true
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        userData: payload,
        isLoggingIn: false
      };
    case LOGIN_FAIL:
      return {
        ...state,
        error: payload,
        isLoggingIn: false
      };
    default:
      return state;
  }
};
