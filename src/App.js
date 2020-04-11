import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import AuthScreen from '__SCREENS/Auth';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path='/'>
          <AuthScreen />
        </Route>
      </Switch>
    </Router>
  );
}
