import { getUserData } from '__UTILS/auth';

import {
  FETCH_FRIENDS_PROGRESS,
  FETCH_FRIENDS_SUCCESS,
  FETCH_FRIENDS_ERROR,
  CHANGE_ACTIVE_FRIEND
} from './types';

const userData = getUserData();

const INITIAL_STATE = {
  activeFriend: null,
  friendsList: [],
  error: null,
  isLoading: false
};

/**
 * Friends related handlers from everywhere are placed here (API, Socket, usual, etc)
 */
export default (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case FETCH_FRIENDS_PROGRESS: {
      return {
        ...state,
        error: null,
        isLoading: true
      };
    }
    case FETCH_FRIENDS_ERROR: {
      return {
        ...state,
        error: payload,
        isLoading: false
      };
    }
    case FETCH_FRIENDS_SUCCESS: {
      const friends = payload.filter((user) => user._id !== userData._id);
      return {
        ...state,
        friendsList: friends,
        isLoading: false
      };
    }

    case CHANGE_ACTIVE_FRIEND: {
      return {
        ...state,
        activeFriend: payload
      };
    }

    default:
      return state;
  }
};
