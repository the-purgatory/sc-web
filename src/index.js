import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import styled, { ThemeProvider } from 'styled-components';
import { themeGet } from '@styled-system/theme-get';
import { space } from 'styled-system';

import CommonStyle from '__STYLES/common';
import ResetStyle from '__STYLES/reset';
import theme from '__STYLES/theme';

import store from './store';

const StyledDiv = styled.div`
  ${space}
  background: ${themeGet('color.red.0')};
  color: ${themeGet('color.primary')};
  font-family: ${themeGet('font.family.cursive3')};
  font-size: ${themeGet('font.size.5')};
  border: solid 5px ${themeGet('color.red.1')};
`;

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <>
          <ResetStyle />
          <CommonStyle />
          <StyledDiv py={4} px={4}>
            This is dark web
          </StyledDiv>
        </>
      </ThemeProvider>
    </Provider>
  );
};

ReactDOM.render(<App />, document.getElementById('app-container'));
