import { createGlobalStyle } from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

export default createGlobalStyle`
  /* Set core body defaults */
  html, body {
    height: 100%;
  }
  body {
    scroll-behavior: smooth;
    text-rendering: optimizeSpeed;
    line-height: 1.5;
    font-size: ${themeGet('font.size.2')};
    font-family: ${themeGet('font.family.normal')};
    letter-spacing: 0.0625em;
  }

  #app-container {
    min-height: 100vh;
    display: flex;
  }
`;
