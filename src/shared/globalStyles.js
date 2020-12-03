import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

export const GlobalStyles = createGlobalStyle`
  ${normalize}

  @font-face {
    font-family: 'Open Sans';
    src: url(../fonts/OpenSans-Regular.woff) format('woff') font-weight-normal,
        url(../fonts/OpenSans-Bold.woff) format('woff') font-weight-bold,
        url(../fonts/OpenSans-Italic.woff) format('woff') font-italic;
  }

  @font-face {
    font-family: 'Merriweather';
    src: url(../fonts/Merriweather-Bold.woff) format('woff') font-weight-bold,
  }

  * {
    box-sizing: border-box;
  }

  html, body {
    overflow-x: hidden;
    width: 100vw;
  }

  html {
    font-size: 16px;
  }
  
  body {
    font-family: 'Open Sans', sans-serif;
    font-size: 1rem;
    line-height: 1.65;
    margin: 0;
  }

  p,
  ul,
  ol {
    color: ${(props) => props.theme.global.colors.grey};
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
   
    font-family: 'Merriweather', serif;
    font-weight: bold;
    line-height: 1.3;
  }

  figure {
    margin: 0;
  }
  
  img {
    display: block;
    width: 100%;
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