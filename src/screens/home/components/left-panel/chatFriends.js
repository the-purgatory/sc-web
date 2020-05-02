import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { tryFetchingAllFriends } from '__STORE/friends/actions';

import { Box } from '__COMPONENTS/atoms';
import {
  AllFriendsList,
  PinnedFriendsList,
  RecentFriendsList
} from '__COMPONENTS/organisms';

const ChatFriends = ({ fetchAllFriends, ...props }) => {
  useEffect(() => {
    fetchAllFriends();
  }, [fetchAllFriends]);

  return (
    <Box>
      <PinnedFriendsList {...props} />
      <RecentFriendsList {...props} />
      <AllFriendsList {...props} />
    </Box>
  );
};

ChatFriends.propTypes = {
  fetchAllFriends: PropTypes.func
};

const mapStateToProps = (state) => {
  const { friends } = state;
  return friends;
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAllFriends: (data) => dispatch(tryFetchingAllFriends(data))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ChatFriends);
