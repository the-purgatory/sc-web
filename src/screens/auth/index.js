import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import themeGet from '@styled-system/theme-get';

import { getUserData } from '__UTILS/auth';

import { Text, Logo, FlexBox } from '__COMPONENTS/atoms';
import FormContainer from './components/form-container';

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

const FormWrapper = styled(FlexBox)``;

const Wrapper = styled(FlexBox)`
  background: ${themeGet('colors.white.0')};
  min-width: 80%;
  min-height: 600px;

  @media screen and (max-width: ${themeGet('breakpoints.1')}) {
    min-width: 100%;
    min-height: 100%;
  }
  @media screen and (max-width: ${themeGet('breakpoints.0')}) {
    flex-direction: column;
    ${LogoWrapper} {
      padding-bottom: ${themeGet('sizes.12')};
    }
    ${FormWrapper} {
      background: ${themeGet('colors.white.0')};
      box-shadow: ${themeGet('shadows.large')};
      border-radius: ${themeGet('radii.2')};
      transform: translateY(-${themeGet('sizes.12')});
      margin: 0 auto;
      width: 80%;
      min-width: ${themeGet('sizes.40')};
    }
  }
`;

const AuthScreen = () => {
  const history = useHistory();
  const userData = getUserData();
  if (userData) {
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
        <FormWrapper alignItems='center' justifyContent='center' p={5} flex={1}>
          <FormContainer />
        </FormWrapper>
      </Wrapper>
    </FlexBox>
  );
};

export default AuthScreen;
