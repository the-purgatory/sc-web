import Endpoints from '__CONSTANTS/endpoints';

import {
  FETCH_FRIENDS_PROGRESS,
  FETCH_FRIENDS_SUCCESS,
  FETCH_FRIENDS_ERROR,
  CHANGE_ACTIVE_FRIEND
} from './types';

export const fetchFriendsProgress = () => {
  return {
    type: FETCH_FRIENDS_PROGRESS
  };
};

export const fetchFriendsSuccess = (data) => {
  return {
    type: FETCH_FRIENDS_SUCCESS,
    payload: data
  };
};

export const fetchFriendsError = (data) => {
  return {
    type: FETCH_FRIENDS_ERROR,
    payload: data
  };
};

export const tryFetchingAllFriends = (data) => (dispatch) => {
  dispatch(fetchFriendsProgress());

  fetch(`${Endpoints.USER_URL}`, {
    method: 'GET',
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
        dispatch(fetchFriendsSuccess(res.data));
      } else {
        dispatch(fetchFriendsError(res.error));
      }
    })
    .catch((err) => {
      dispatch(fetchFriendsError(err));
    });
};

export const changeActiveFriend = (data) => {
  return {
    type: CHANGE_ACTIVE_FRIEND,
    payload: data
  };
};
