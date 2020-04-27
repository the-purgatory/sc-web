import { LOGIN_START, LOGIN_SUCCESS, LOGIN_FAIL } from './types';

const triggerLoginStart = () => {
  return {
    type: LOGIN_START
  };
};

const triggerLoginSuccess = (payload) => {
  return {
    type: LOGIN_SUCCESS,
    payload
  };
};

const triggerLoginFail = (payload) => {
  return {
    type: LOGIN_FAIL,
    payload
  };
};

const tryLoggingIn = (data) => {
  return (dispatch) => {
    console.log(data);
    dispatch(triggerLoginStart());
    dispatch(triggerLoginSuccess());
    dispatch(triggerLoginFail());
  };
};

const tryLoggingOut = (data) => {
  return (dispatch) => {
    console.log(data);
    dispatch(triggerLoginStart());
    dispatch(triggerLoginSuccess());
    dispatch(triggerLoginFail());
  };
};

export { tryLoggingIn, tryLoggingOut };
