import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import themeGet from '@styled-system/theme-get';

import { useScroller } from '__UTILS/hooks';

import { Text, FontIcon, Box, FlexBox } from '__COMPONENTS/atoms';
import ListItem from './ListItem';

const ListWrapper = styled(Box)`
  white-space: nowrap;
  scroll-behavior: smooth;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const NavControlButton = styled(FlexBox)`
  border-radius: ${themeGet('radii.4')};
  cursor: pointer;
  height: ${themeGet('sizes.4')};
  width: ${themeGet('sizes.4')};
  background-color: ${themeGet('colors.background')};
  ${(props) =>
    props.hide &&
    `
    visibility: hidden;
  `}
  &:hover {
    background-color: ${themeGet('colors.white.1')};
  }
`;

const FavouriteFriendsList = ({ data, itemWidth = 20 }) => {
  const listRef = useRef(null);
  const { showNext, showPrev, scrollNext, scrollPrev, onScroll } = useScroller(
    listRef,
    {
      minScrollAmount: itemWidth * 8 + 16
    }
  );

  return (
    <Box position='relative' mb={6}>
      <Text fontWeight='heavy' px={4} mb={4}>
        Favourites
      </Text>
      {data.length ? (
        <>
          <ListWrapper
            ref={listRef}
            overflow='auto'
            whiteSpace='nowrap'
            pr={4}
            pb={1}
            onScroll={onScroll}
          >
            {data.map((item) => (
              <ListItem data={item} itemWidth={itemWidth} key={item._id} />
            ))}
          </ListWrapper>
          <FlexBox justifyContent='center'>
            <NavControlButton onClick={scrollPrev} ac hide={!showPrev}>
              <FontIcon
                className='fas fa-chevron-left'
                fontSize={1}
                color='light'
              />
            </NavControlButton>
            <NavControlButton onClick={scrollNext} ac hide={!showNext} ml={1}>
              <FontIcon
                className='fas fa-chevron-right'
                fontSize={1}
                color='light'
              />
            </NavControlButton>
          </FlexBox>
        </>
      ) : (
        <Box px={4}>
          <Text color='light'>No favourites found!</Text>
        </Box>
      )}
    </Box>
  );
};

FavouriteFriendsList.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string,
      is_active: PropTypes.bool,
      username: PropTypes.string,
      profile_pic: PropTypes.string,
      phone: PropTypes.string,
      email: PropTypes.string
    })
  ),
  itemWidth: PropTypes.number
};

export default FavouriteFriendsList;
