import { useHistory } from 'react-router-dom';

import Endpoints from '__CONSTANTS/endpoints';
import { setUserData, clearUserData } from '__UTILS/auth';

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

const tryLogin = (data) => (dispatch) => {
  dispatch(triggerLoginStart());

  fetch(`${Endpoints.AUTH_URL}/login`, {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
    .then((res) => res.json())
    .then((res) => {
      const isSuccess = res && res.status && res.status === 'SUCCESS';
      if (isSuccess) {
        setUserData(res.data);
        dispatch(triggerLoginSuccess(res.data));
      } else {
        dispatch(triggerLoginFail(res.error));
      }
    })
    .catch((err) => {
      dispatch(triggerLoginFail(err));
    });
};

const triggerRegisterStart = () => {
  return {
    type: REGISTER_START
  };
};

const triggerRegisterSuccess = (payload) => {
  return {
    type: REGISTER_SUCCESS,
    payload
  };
};

const triggerRegisterFail = (payload) => {
  return {
    type: REGISTER_FAIL,
    payload
  };
};

const tryRegister = (data) => (dispatch) => {
  dispatch(triggerRegisterStart());

  fetch(`${Endpoints.AUTH_URL}/register`, {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
    .then((res) => res.json())
    .then((res) => {
      const isSuccess = res && res.status && res.status === 'SUCCESS';
      if (isSuccess) {
        setUserData(res.data);
        dispatch(triggerRegisterSuccess(res.data));
      } else {
        dispatch(triggerRegisterFail(res.error));
      }
    })
    .catch((err) => {
      dispatch(triggerRegisterFail(err));
    });
};

const triggerLogoutSuccess = () => {
  return {
    type: LOGOUT_SUCCESS
  };
};

const hideErrors = () => {
  return {
    type: HIDE_ERRORS
  };
};

const tryLogout = () => (dispatch) => {
  clearUserData();
  dispatch(triggerLogoutSuccess());
  useHistory().push('/auth');
};

export { tryLogin, tryRegister, tryLogout, hideErrors };
