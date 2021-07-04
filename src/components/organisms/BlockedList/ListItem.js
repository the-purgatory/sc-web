import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import themeGet from '@styled-system/theme-get';

import { capitalize } from '__UTILS/common';

import { Text, Box, FlexBox } from '__COMPONENTS/atoms';
import { Avatar } from '__COMPONENTS/molecules';

const ItemWrapper = styled(FlexBox)`
  cursor: pointer;
  &:hover {
    background: ${themeGet('colors.white.1')};
  }
  ${(props) => props.isActive && `background: ${themeGet('colors.white.2')};`}
`;

const ListItem = ({ data, ...props }) => {
  return (
    <ItemWrapper px={4} py={2} width='100%' alignItems='center' {...props}>
      <Avatar
        title={data.username}
        src={data.profile_pic}
        width={4}
        height={4}
      />
      <Box pl={4}>
        <Text fontSize={2}>{capitalize(data.username)}</Text>
        <Text fontSize={1} fontFamily='mono' color='light'>
          {data.phone}
        </Text>
      </Box>
    </ItemWrapper>
  );
};

ListItem.propTypes = {
  data: PropTypes.shape({
    _id: PropTypes.string,
    is_active: PropTypes.bool,
    username: PropTypes.string,
    profile_pic: PropTypes.string,
    phone: PropTypes.string,
    email: PropTypes.string
  }),
  pinned: PropTypes.bool
};

export default ListItem;
