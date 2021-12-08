import { createGlobalStyle } from 'styled-components';
import colors from './colors';

const GlobalStyles = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    max-width: 100%;
  }

  html{ 
    margin: 0;
    padding:0 ;
    max-width: 100%;
  }
  body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    color: ${colors.black};
    font-size: 1rem;
    font-weight: 400;
    line-height: 1;
    max-width: 100%;
    margin: 0;
    padding: 0;
    overflow-x: hidden;
    box-sizing: border-box;
/*     background-color: green;
 */  }

 
  img {
    display: block;
    max-width: 100%;
  }
  #root{
    display: flex;
    flex-direction: column;
    margin: 0;
    padding: 0;
  }


`;

export default GlobalStyles;
