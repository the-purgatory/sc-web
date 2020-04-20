import React from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';

import { useQuery } from '__UTILS';

import { Text, FlexBox } from '__COMPONENTS/atoms';

const ContentPanel = () => {
  const match = useRouteMatch();
  const leftPanelType = useQuery().get('left_panel');
  const rightPanelType = useQuery().get('right_panel');
  return (
    <Switch>
      <Route path={`${match.path}chat`}>
        <FlexBox flex={1} flexDirection='column'>
          <Text>
            Chat Content
            <br />
            Left Panel : {leftPanelType}
            <br />
            Right Panel : {rightPanelType}
          </Text>
        </FlexBox>
      </Route>
      <Route path={`${match.path}dashboard`}>
        <FlexBox flex={1} flexDirection='column'>
          <Text>
            Dashboard Content
            <br />
            Left Panel : {leftPanelType}
            <br />
            Right Panel : {rightPanelType}
          </Text>
        </FlexBox>
      </Route>
    </Switch>
  );
};

export default ContentPanel;
