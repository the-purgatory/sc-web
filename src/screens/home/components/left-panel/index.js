import React from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import styled from 'styled-components';
import themeGet from '@styled-system/theme-get';

import { useQuery } from '__UTILS/hooks';

import { Logo, Box, FlexBox } from '__COMPONENTS/atoms';
import ChatFriends from './chatFriends';

const PANEL_TYPES = {
  PROFILE_VIEW: 'PROFILE_VIEW',
  DASHBOARD_1: 'dashboard_1'
};

const PanelContainer = styled(FlexBox)`
  border-right: solid 1px ${themeGet('colors.white.2')};
`;

const getChatPanelComponent = (type) => {
  let component = null;
  switch (type) {
    case PANEL_TYPES.PROFILE_VIEW:
      component = <Box>Profile View</Box>;
      break;
    default:
      component = <ChatFriends />;
  }

  return component ? (
    <PanelContainer
      bg='white.0'
      width={40}
      alignItems='center'
      flexDirection='column'
    >
      <Box py={6}>
        <Logo primaryColor='indigo.0' secondaryColor='indigo.2' width={25} />
      </Box>
      {component}
    </PanelContainer>
  ) : null;
};

const getDashboardPanelComponent = (type) => {
  let component = null;
  switch (type) {
    case PANEL_TYPES.DASHBOARD_1:
      component = <Box>Dashboard 1</Box>;
      break;
    default:
      component = <Box>Default Dashboard</Box>;
  }

  return component ? (
    <PanelContainer
      bg='white.0'
      width={40}
      alignItems='center'
      flexDirection='column'
    >
      {component}
    </PanelContainer>
  ) : null;
};

const LeftPanel = () => {
  const match = useRouteMatch();
  const componentType = useQuery().get('left_panel');
  return (
    <Switch>
      <Route path={`${match.path}chat`}>
        {getChatPanelComponent(componentType)}
      </Route>
      <Route path={`${match.path}dashboard`}>
        {getDashboardPanelComponent(componentType)}
      </Route>
    </Switch>
  );
};

export default LeftPanel;
