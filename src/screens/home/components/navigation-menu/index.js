import React from 'react';
import styled from 'styled-components';
import themeGet from '@styled-system/theme-get';

import { FontIcon, FlexBox, Box } from '__COMPONENTS/atoms';
import { Avatar } from '__COMPONENTS/molecules';

const NavigationContainer = styled(FlexBox)`
  border-right: solid 1px ${themeGet('colors.white.2')};
`;

const NavLink = styled(FlexBox)`
  border-radius: ${themeGet('radii.1')};
  color: ${themeGet('colors.black.3')};
  cursor: pointer;
  height: ${themeGet('sizes.5')};
  width: ${themeGet('sizes.5')};
  justify-content: center;
  align-items: center;
  margin-bottom: ${themeGet('space.2')};
  &:hover {
    background: ${themeGet('colors.white.2')};
  }
`;

export default function NavigationMenu() {
  return (
    <NavigationContainer
      width={7}
      flexDirection='column'
      justifyContent='space-between'
      alignItems='center'
      bg='white.0'
      py={4}
    >
      <Box>
        <Avatar
          title='profile pic'
          src='https://avatars2.githubusercontent.com/u/13179262?s=60&v=4'
          width={4}
          height={4}
        />
      </Box>
      <Box>
        <NavLink>
          <FontIcon className='far fa-bell' color='black.3' fontSize={3} />
        </NavLink>
        <NavLink>
          <FontIcon className='fas fa-power-off' color='black.3' fontSize={3} />
        </NavLink>
        <NavLink>
          <FontIcon className='fas fa-cog' color='black.3' fontSize={3} />
        </NavLink>
      </Box>
    </NavigationContainer>
  );
}
