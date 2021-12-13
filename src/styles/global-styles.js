import { createGlobalStyle } from 'styled-components';
import colors from './colors';

const GlobalStyles = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    font-family: "Montserrat", Helvetica, sans-serif;
    color: ${colors.black};
    font-size: 1rem;
    font-weight: 400;
    line-height: 1;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

 
  img {
    display: block;
    max-width: 100%;
  }
`;

export default GlobalStyles;
