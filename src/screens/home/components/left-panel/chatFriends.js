import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';
import themeGet from '@styled-system/theme-get';

import { getUserData } from '__UTILS/auth';
import { tryFetchingAllFriends } from '__STORE/friends/actions';

import { FontIcon, FlexBox } from '__COMPONENTS/atoms';
import {
  AllFriendsList,
  BlockedList,
  FavouriteFriendsList,
  RecentFriendsList
} from '__COMPONENTS/organisms';

const IconContainer = styled(FlexBox)`
  ${'' /* border-top: solid 1px ${themeGet('colors.white.2')}; */}
  background-color: ${themeGet('colors.white.1')};
  cursor: pointer;
  ${(props) =>
    props.active &&
    `
    background-color: ${themeGet('colors.white.0')(props)};
  `}
`;

const ChatFriends = ({
  fetchAllFriends,
  activeFriend,
  blockedList,
  friendsList,
  pinnedList,
  error,
  isLoading
}) => {
  const [activeView, setActiveView] = useState('recent-view');

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
    <FlexBox flexDirection='column' width='100%' flex={1}>
      <FlexBox flexDirection='column' flex={1}>
        {activeView === 'recent-view' && (
          <>
            <FavouriteFriendsList data={friendsList} />
            <RecentFriendsList
              friends={friendsList}
              pinned={pinnedList}
              activeFriend={activeFriend}
            />
          </>
        )}
        {activeView === 'all-view' && <AllFriendsList data={friendsList} />}
        {activeView === 'blocked-view' && <BlockedList data={blockedList} />}
      </FlexBox>
      <FlexBox>
        <IconContainer
          ac
          flex={1}
          p={4}
          active={activeView === 'recent-view'}
          onClick={() => setActiveView('recent-view')}
        >
          <FontIcon color='light' fontSize={3} className='fas fa-history' />
        </IconContainer>
        <IconContainer
          ac
          flex={1}
          p={4}
          active={activeView === 'all-view'}
          onClick={() => setActiveView('all-view')}
        >
          <FontIcon
            color='light'
            fontSize={3}
            className='fas fa-address-book'
          />
        </IconContainer>
        <IconContainer
          ac
          flex={1}
          p={4}
          active={activeView === 'blocked-view'}
          onClick={() => setActiveView('blocked-view')}
        >
          <FontIcon color='light' fontSize={3} className='fas fa-ban' />
        </IconContainer>
      </FlexBox>
    </FlexBox>
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
