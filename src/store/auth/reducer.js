import { getUserData } from '__UTILS/auth';

import {
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  REGISTER_START,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGOUT_SUCCESS,
  FETCH_USER_DATA_START,
  FETCH_USER_DATA_SUCCESS,
  FETCH_USER_DATA_FAIL,
  HIDE_ERRORS
} from './types';

const userData = getUserData();

const INITIAL_STATE = {
  isLoading: false,
  error: null,
  data: userData
};

export default (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case LOGIN_START:
    case REGISTER_START:
    case FETCH_USER_DATA_START:
      return {
        ...state,
        isLoading: true,
        error: null
      };
    case LOGIN_SUCCESS:
    case REGISTER_SUCCESS:
    case FETCH_USER_DATA_SUCCESS:
      return {
        ...state,
        data: payload,
        isLoading: false
      };
    case LOGIN_FAIL:
    case REGISTER_FAIL:
    case FETCH_USER_DATA_FAIL:
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
