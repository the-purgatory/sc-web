import { LOGIN_START, LOGIN_SUCCESS, LOGIN_FAIL } from './types';

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOGIN_START:
      return state;
    case LOGIN_SUCCESS:
      return state;
    case LOGIN_FAIL:
      return state;
    default:
      return state;
  }
};
