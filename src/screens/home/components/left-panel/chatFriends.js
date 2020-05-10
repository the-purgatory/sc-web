import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { getUserData } from '__UTILS/auth';
import { tryFetchingAllFriends } from '__STORE/friends/actions';

import { Box } from '__COMPONENTS/atoms';
import {
  AllFriendsList,
  FavouriteFriendsList,
  RecentFriendsList
} from '__COMPONENTS/organisms';

const ChatFriends = ({
  fetchAllFriends,
  activeFriend,
  blockedList,
  friendsList,
  pinnedList,
  error,
  isLoading
}) => {
  useEffect(() => {
    const userData = getUserData();
    fetchAllFriends({ id: userData._id });
  }, [fetchAllFriends]);

  if (error) {
    return error;
  }

  if (isLoading) {
    return 'Loading...';
  }

  return (
    <Box width='100%'>
      <FavouriteFriendsList data={blockedList} />
      <RecentFriendsList
        friends={friendsList}
        pinned={pinnedList}
        activeFriend={activeFriend}
      />
      <AllFriendsList data={friendsList} />
    </Box>
  );
};

ChatFriends.propTypes = {
  fetchAllFriends: PropTypes.func,
  activeFriend: PropTypes.string,
  error: PropTypes.string,
  isLoading: PropTypes.bool,
  friendsList: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string,
      is_active: PropTypes.bool,
      username: PropTypes.string,
      profile_pic: PropTypes.string,
      phone: PropTypes.string,
      email: PropTypes.string
    })
  ),
  pinnedList: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string,
      is_active: PropTypes.bool,
      username: PropTypes.string,
      profile_pic: PropTypes.string,
      phone: PropTypes.string,
      email: PropTypes.string
    })
  ),
  blockedList: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string,
      is_active: PropTypes.bool,
      username: PropTypes.string,
      profile_pic: PropTypes.string,
      phone: PropTypes.string,
      email: PropTypes.string
    })
  )
};

const mapStateToProps = (state) => {
  const {
    activeFriend,
    blockedList,
    friendsList,
    pinnedList,
    error,
    isLoading
  } = state.friends;

  return {
    activeFriend,
    blockedList,
    friendsList,
    pinnedList,
    error,
    isLoading
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAllFriends: (data) => dispatch(tryFetchingAllFriends(data))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ChatFriends);
