import React from 'react';

import { Text, Loader, Logo, FlexBox, Box } from '__COMPONENTS/atoms';
import { Dropdown } from '__COMPONENTS/molecules';

const dropdownOptions = [
  { icon: '', label: 'Label', key: 'key1' },
  { icon: '', label: 'Label', key: 'key2' }
];

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
        <Text fontSize={3} fontWeight='3'>
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
            <Logo primaryColor='indigo.0' secondaryColor='indigo.2' />
          </Box>
          <Box pt={5}>
            <Loader />
          </Box>
          <Box pt={5}>
            <Dropdown direction='right' options={dropdownOptions} />
          </Box>
        </FlexBox>
      </FlexBox>
    </FlexBox>
  );
};

export default AuthScreen;
