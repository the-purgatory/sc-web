import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Input, Text, Box } from '__COMPONENTS/atoms';
import RecentItem from './RecentItem';

const RecentFriendsList = ({ friends, pinned, activeFriend }) => {
  const [searchText, setSearchText] = useState('');
  const combinedList = [...pinned, ...friends].filter((item) => {
    return (
      item.username.includes(searchText) ||
      item.email.includes(searchText) ||
      item.phone.includes(searchText)
    );
  });
  return (
    <Box>
      <Box px={4}>Recent</Box>
      <Box px={4} py={4}>
        <Input
          backgroundColor='white.1'
          borderColor='white.3'
          inputProps={{
            value: searchText,
            placeholder: 'search',
            type: 'search',
            onChange: setSearchText
          }}
        />
      </Box>
      <Box>
        {!friends.length && !pinned.length ? 'No recent chats!!' : ''}
        {combinedList.length ? (
          combinedList.map((item) => (
            <RecentItem
              data={item}
              isActive={activeFriend === item._id}
              pinned
              key={item._id}
            />
          ))
        ) : (
          <Box px={4}>
            <Text color='light'>No results found!</Text>
          </Box>
        )}
      </Box>
    </Box>
  );
};

RecentFriendsList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string,
      is_active: PropTypes.bool,
      username: PropTypes.string,
      profile_pic: PropTypes.string,
      phone: PropTypes.string,
      email: PropTypes.string
    })
  ),
  pinned: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string,
      is_active: PropTypes.bool,
      username: PropTypes.string,
      profile_pic: PropTypes.string,
      phone: PropTypes.string,
      email: PropTypes.string
    })
  ),
  activeFriend: PropTypes.string
};

export default RecentFriendsList;
