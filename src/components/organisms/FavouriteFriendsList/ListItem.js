import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import themeGet from '@styled-system/theme-get';

import { capitalize } from '__UTILS/common';

import { Text, Box, FlexBox } from '__COMPONENTS/atoms';
import { Avatar } from '__COMPONENTS/molecules';

const Ball = styled(Box)`
  border-radius: ${themeGet('radii.2')};
  width: ${themeGet('space.2')};
  height: ${themeGet('space.2')};
`;

const ItemWrapper = styled(Box)`
  border-radius: ${themeGet('radii.3')};
  border: solid 1px ${themeGet('colors.white.2')};
  cursor: pointer;
  flex-shrink: 0;
  flex-grow: 0;
  display: inline-block;
  &:last-of-type {
    padding-right: 16px;
  }
  &:hover {
    background: ${themeGet('colors.white.1')};
  }
`;

const getStatusDom = (isActive) => {
  const color = isActive ? 'success' : 'error';
  const message = isActive ? 'Active' : 'Inactive';
  return (
    <FlexBox alignItems='center'>
      <Ball bg={color} mr={2} />
      <Text fontSize={1} color={color}>
        {message}
      </Text>
    </FlexBox>
  );
};

const ListItem = ({ data, itemWidth, ...props }) => {
  const statusDom = useCallback(getStatusDom(data.is_active), [data.is_active]);
  return (
    <ItemWrapper px={4} py={4} ml={4} width={itemWidth} {...props}>
      {statusDom}
      <FlexBox py={2} alignItems='center' justifyContent='center'>
        <Avatar
          title={data.username}
          src={data.profile_pic}
          width={7}
          height={7}
        />
      </FlexBox>
      <Box>
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
  }).isRequired,
  itemWidth: PropTypes.number
};

export default ListItem;
