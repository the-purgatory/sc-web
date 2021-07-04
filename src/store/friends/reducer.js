import { getUserData } from '__UTILS/auth';

import {
  FETCH_FRIENDS_PROGRESS,
  FETCH_FRIENDS_SUCCESS,
  FETCH_FRIENDS_ERROR,
  CHANGE_ACTIVE_FRIEND
} from './types';

const INITIAL_STATE = {
  activeFriend: null,
  friendsList: [],
  pinnedList: [],
  blockedList: [],
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
      const userData = getUserData();

      /**
       * All friends
       * Favourites
       * Blocked
       * Recent [Pinned + unpinned]
       */
      const { friendsList, pinnedList, blockedList } = payload.reduce(
        (acc, user) => {
          if (userData.blocked_users.indexOf(user._id) !== -1) {
            acc.blockedList.push(user);
          } else if (userData.pinned_users.indexOf(user._id) !== -1) {
            acc.pinnedList.push(user);
          } else {
            acc.friendsList.push(user);
          }
          return acc;
        },
        { friendsList: [], pinnedList: [], blockedList: [] }
      );

      return {
        ...state,
        friendsList,
        pinnedList,
        blockedList,
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
