import React from 'react';

import { Text, FlexBox, Box } from '__COMPONENTS/atoms';

import Logo from '__ASSETS/images/logo.svg';

const AuthScreen = () => {
  return (
    <FlexBox
      flex='1'
      flexDirection='column'
      alignItems='center'
      justifyContent='center'
    >
      <FlexBox
        alignItems='flex-start'
        px={3}
        py={2}
        maxWidth='1200px'
        width='100%'
      >
        <Text fontSize={3} fontWeight='2'>
          /the-purgatory
        </Text>
      </FlexBox>
      <FlexBox
        flex='1'
        maxWidth='1200px'
        width='100%'
        alignItems='center'
        justifyContent='center'
      >
        <FlexBox
          flexDirection='column'
          alignItems='center'
          justifyContent='center'
        >
          <Box>
            <img src={Logo} alt='semantic-chat' />
          </Box>
          <Box pt={4}>Loading...</Box>
        </FlexBox>
      </FlexBox>
    </FlexBox>
  );
};

export default AuthScreen;
