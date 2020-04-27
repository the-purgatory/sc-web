import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { ThemeProvider } from 'styled-components';

import CommonStyle from '__STYLES/common';
import ResetStyle from '__STYLES/reset';
import theme from '__STYLES/theme';

import store from './store';

import App from './App';

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <>
        <ResetStyle />
        <CommonStyle />
        <App />
      </>
    </ThemeProvider>
  </Provider>,
  document.getElementById('app-container')
);
