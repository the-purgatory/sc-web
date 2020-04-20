import React from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';

import { useQuery } from '__UTILS';

import { Logo, Box, FlexBox } from '__COMPONENTS/atoms';

const PANEL_TYPES = {
  CHAT_1: 'chat_1',
  CHAT_2: 'chat_2',
  DASHBOARD_1: 'dashboard_1',
  DASHBOARD_2: 'dashboard_2'
};

const getChatPanelComponent = (type) => {
  let component = null;
  switch (type) {
    case PANEL_TYPES.CHAT_1:
      component = <Box>Chat 1</Box>;
      break;
    case PANEL_TYPES.CHAT_2:
      component = <Box>Chat 2</Box>;
      break;
    default:
      component = <Box>Default Chat</Box>;
  }

  return component ? (
    <FlexBox bg='white.0' width={40} alignItems='center' flexDirection='column'>
      <Box py={4}>
        <Logo primaryColor='indigo.0' secondaryColor='indigo.2' width={20} />
      </Box>
      {component}
    </FlexBox>
  ) : null;
};

const getDashboardPanelComponent = (type) => {
  let component = null;
  switch (type) {
    case PANEL_TYPES.DASHBOARD_1:
      component = <Box>Dashboard 1</Box>;
      break;
    case PANEL_TYPES.DASHBOARD_2:
      component = <Box>Dashboard 2</Box>;
      break;
    default:
      component = <Box>Default Dashboard</Box>;
  }

  return component ? (
    <FlexBox bg='white.0' width={40} alignItems='center' flexDirection='column'>
      {component}
    </FlexBox>
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
