import { createGlobalStyle } from 'styled-components';
import colors from './colors';

const GlobalStyles = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    color: ${colors.black};
    font-size: 1rem;
    font-weight: 400;
    line-height: 1;
    margin: 0;
    padding: 0;
    overflow: hidden;
  }

  img {
    display: block;
    max-width: 100%;
  }
`;

export default GlobalStyles;
