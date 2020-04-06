import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import styled, { ThemeProvider } from 'styled-components';
import { themeGet } from '@styled-system/theme-get';
import { space } from 'styled-system';

import GlobalStyle from '__STYLES/global-styles';
import theme from '__STYLES/theme';

import store from './store';

const App = styled.div`
  ${space}
  background: ${themeGet('colors.background')};
  color: ${(props) => props.theme.colors.text};
  border: solid 5px ${themeGet('colors.blue.5')};
`;

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <>
        <App py={10} px={20}>
          This is dark web
        </App>
        <GlobalStyle />
      </>
    </ThemeProvider>
  </Provider>,
  document.getElementById('app-container')
);
