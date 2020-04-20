import React from 'react';

import { FlexBox } from '__COMPONENTS/atoms';

import NavigationMenu from './components/navigation-menu';
import LeftPanel from './components/left-panel';
import RightPanel from './components/right-panel';
import ContentPanel from './components/content-panel';

const HomeScreen = () => {
  return (
    <FlexBox flex={1}>
      <NavigationMenu />
      <LeftPanel />
      <ContentPanel />
      <RightPanel />
    </FlexBox>
  );
};

export default HomeScreen;
