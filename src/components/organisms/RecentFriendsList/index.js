import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Input, Text, Box } from '__COMPONENTS/atoms';
import ListItem from './ListItem';

const RecentFriendsList = ({ friends, pinned, activeFriend }) => {
  const [searchText, setSearchText] = useState('');
  let listDOM = null;
  const data = [...pinned, ...friends];
  if (data.length) {
    const combinedList = data.filter((item) => {
      return (
        item.username.includes(searchText) ||
        item.email.includes(searchText) ||
        item.phone.includes(searchText)
      );
    });
    listDOM = combinedList.length ? (
      combinedList.map((item) => (
        <ListItem
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
    );
  } else {
    listDOM = (
      <Box px={4}>
        <Text color='light'>No recent chats found!</Text>
      </Box>
    );
  }
  return (
    <Box mb={6}>
      <Text fontWeight='heavy' px={4} mb={4}>
        Recent
      </Text>
      <Box px={4} mb={4}>
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
      <Box>{listDOM}</Box>
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
