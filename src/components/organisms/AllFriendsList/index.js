import React, { useState } from 'react';

import { Input, Box } from '__COMPONENTS/atoms';

const AllFriendsList = () => {
  const [searchText, setSearchText] = useState('');

  return (
    <Box>
      <Box>
        <Input
          inputProps={{
            value: searchText,
            placeholder: 'search',
            type: 'search',
            onChange: setSearchText
          }}
          mb={3}
        />
      </Box>
      <Box>Friends List</Box>
    </Box>
  );
};

export default AllFriendsList;
