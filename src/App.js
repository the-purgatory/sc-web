import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';

import AuthScreen from '__SCREENS/auth';
import HomeScreen from '__SCREENS/home';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path='/auth'>
          <AuthScreen />
        </Route>
        <Redirect exact from='/' to='/chat' />
        <Route>
          <HomeScreen />
        </Route>
      </Switch>
    </Router>
  );
}
