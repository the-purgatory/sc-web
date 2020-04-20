import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import AuthScreen from '__SCREENS/auth';
import HomeScreen from '__SCREENS/home';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/auth'>
          <AuthScreen />
        </Route>
        <Route path='/'>
          <HomeScreen />
        </Route>
      </Switch>
    </Router>
  );
}
