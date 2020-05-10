import React from 'react';
import { useHistory } from 'react-router-dom';
import { getUserData, clearUserData } from '__UTILS/auth';

import { FlexBox } from '__COMPONENTS/atoms';
import { ErrorBoundary } from '__COMPONENTS/organisms';

import NavigationMenu from './components/navigation-menu';
import LeftPanel from './components/left-panel';
import RightPanel from './components/right-panel';
import ContentPanel from './components/content-panel';

const HomeScreen = () => {
  const history = useHistory();
  const useData = getUserData();
  if (!useData) {
    clearUserData();
    history.push('/auth');
  }
  return (
    <ErrorBoundary>
      <FlexBox flex={1}>
        <NavigationMenu />
        <LeftPanel />
        <ContentPanel />
        <RightPanel />
      </FlexBox>
    </ErrorBoundary>
  );
};

export default HomeScreen;
