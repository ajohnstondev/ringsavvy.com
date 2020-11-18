import styled, { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

export const GlobalStyles = createGlobalStyle`
  ${normalize}

  @font-face {
    font-family: 'Avenir';
    font-weight: 400;
    font-style: normal;
    src: url('/avenir-400.woff2') format('woff2');
    font-display: swap;
  }
  
  body {
    font-family: 'Avenir', Tahoma, Arial, Helvetica, sans-serif;
    font-size: 1em;
    line-height: 1.65;
    color: #373f49;
    margin: 0;
  }
  
  img {
    display: block;
    width: 100%;
  }
  
  h1,
  h2,
  h3 {
    font-size: 2em;
    font-weight: normal;
  }
  
  a {
    color: currentColor;
  }
  
  /**
   * article grid
   */
  .article-list {
    margin: 0;
    padding: 0;
    list-style: none;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    grid-gap: 5vmin;
  }
`;

export const Flex = styled.div`
  display: flex;
`;