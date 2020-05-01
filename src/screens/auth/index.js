import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import themeGet from '@styled-system/theme-get';

import { getUserData } from '__UTILS/auth';

import { Text, Logo, FlexBox } from '__COMPONENTS/atoms';
import FormContainer from './components/form-container';

const Wrapper = styled(FlexBox)`
  background: ${themeGet('colors.white.0')};
  min-width: 80%;
  height: 600px;
`;

const LogoWrapper = styled(FlexBox)`
  position: relative;
  overflow: hidden;
  &:after {
    clip-path: polygon(100% 0, 100% 100%, 0 100%);
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: ${themeGet('colors.indigo.3')};
  }
`;

const AuthScreen = () => {
  const history = useHistory();
  const useData = getUserData();
  if (useData) {
    history.push('/');
  }
  return (
    <FlexBox
      flex='1'
      flexDirection='column'
      alignItems='center'
      justifyContent='center'
    >
      <Wrapper alignItems='stretch'>
        <LogoWrapper flexDirection='column' bg='indigo.2' p={5} flex={1}>
          <FlexBox justifyContent='flex-end'>
            <Text fontSize={3} fontWeight='heavy' color='indigo.0'>
              /the-purgatory
            </Text>
          </FlexBox>
          <FlexBox flex={1} alignItems='center' justifyContent='center'>
            <Logo primaryColor='indigo.0' secondaryColor='indigo.2' />
          </FlexBox>
        </LogoWrapper>
        <FlexBox alignItems='center' justifyContent='center' p={5} flex={1}>
          <FormContainer />
        </FlexBox>
      </Wrapper>
    </FlexBox>
  );
};

export default AuthScreen;
