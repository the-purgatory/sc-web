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
  FETCH_USER_DATA_START,
  FETCH_USER_DATA_SUCCESS,
  FETCH_USER_DATA_FAIL,
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
        window.location.href = '/';
      } else {
        dispatch(triggerLoginFail(res.error));
      }
    })
    .catch((err) => {
      dispatch(triggerLoginFail(err.message));
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
        window.location.href = '/';
      } else {
        dispatch(triggerRegisterFail(res.error));
      }
    })
    .catch((err) => {
      dispatch(triggerRegisterFail(err.message));
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
  fetch(`${Endpoints.AUTH_URL}/logout`, {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(() => {
      dispatch(triggerLogoutSuccess());
      clearUserData();
      window.location.href = '/auth';
    })
    .catch(() => {
      dispatch(triggerLogoutSuccess());
      clearUserData();
      window.location.href = '/auth';
    });
};

/**
 * API - /me
 * Need not use this API. On login and register, we are getting the user data
 */
const fetchUserDataStart = () => {
  return {
    type: FETCH_USER_DATA_START
  };
};

const fetchUserDataSuccess = (payload) => {
  return {
    type: FETCH_USER_DATA_SUCCESS,
    payload
  };
};

const fetchUserDataFail = (payload) => {
  return {
    type: FETCH_USER_DATA_FAIL,
    payload
  };
};

const fetchUserData = (data) => (dispatch) => {
  dispatch(fetchUserDataStart());

  fetch(`${Endpoints.USER_URL}/me`, {
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
        dispatch(fetchUserDataSuccess(res.data));
        window.location.href = '/';
      } else {
        dispatch(fetchUserDataFail(res.error));
      }
    })
    .catch((err) => {
      dispatch(fetchUserDataFail(err.message));
    });
};

export { tryLogin, tryRegister, tryLogout, fetchUserData, hideErrors };
