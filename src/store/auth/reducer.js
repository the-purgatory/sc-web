import { getUserData } from '__UTILS/auth';

import {
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  REGISTER_START,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGOUT_SUCCESS,
  HIDE_ERRORS
} from './types';

const INITIAL_STATE = {
  isLoading: false,
  error: null,
  data: getUserData()
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
        data: payload,
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
        data: null,
        isLoading: false
      };
    case HIDE_ERRORS:
      return {
        ...state,
        error: null
      };
    default:
      return state;
  }
};
