import { createGlobalStyle } from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

export default createGlobalStyle`
  /* Set core body defaults */
  body {
    min-height: 100vh;
    scroll-behavior: smooth;
    text-rendering: optimizeSpeed;
    line-height: 1.5;
    font-size: ${themeGet('font.size.2')};
    font-family: ${themeGet('font.family.normal')};
  }
`;
