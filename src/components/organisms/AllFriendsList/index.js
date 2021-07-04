import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Input, Text, Box } from '__COMPONENTS/atoms';
import ListItem from './ListItem';

const AllFriendsList = ({ data }) => {
  const [searchText, setSearchText] = useState('');
  let listDOM = null;
  if (data.length) {
    const combinedList = data.filter((item) => {
      return (
        item.username.includes(searchText) ||
        item.email.includes(searchText) ||
        item.phone.includes(searchText)
      );
    });
    listDOM = combinedList.length ? (
      combinedList.map((item) => <ListItem data={item} key={item._id} />)
    ) : (
      <Box px={4}>
        <Text color='light'>No results found!</Text>
      </Box>
    );
  } else {
    listDOM = (
      <Box px={4}>
        <Text color='light'>No friends found!</Text>
      </Box>
    );
  }
  return (
    <Box>
      <Text fontWeight='heavy' px={4} mb={4}>
        All Friends
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

AllFriendsList.propTypes = {
  data: PropTypes.arrayOf(
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

export default AllFriendsList;
