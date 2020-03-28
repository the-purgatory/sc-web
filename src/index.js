import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import store from './store';

// import Routes from '__ROUTES/';

ReactDOM.render(
  <Provider store={store}>
    <div>This is sc-web</div>
  </Provider>,
  document.getElementById('app-container')
);
