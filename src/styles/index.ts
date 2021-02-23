import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
    --cb-animation: cubic-bezier(.51,.56,.11,1.03);
    --alert-display-time: 3900ms;
    --red: #b53d1f;
    --green: #7ab51f;
    --black: #000000;
    --white: #ffffff;
    --offwhite: #f8f8f2;
    --brown: #5c4d36;

    --mod: #b53d1f; 
    --vip: #5b1fb5;
    --broadcaster: #7ab51f;

    --grid-unit: 0.5rem;

    --font-weight-normal: 400;
    --font-weight-bold: 700;

    --font-family-heading: "Arial Rounded MT Bold", "Helvetica Rounded", Arial, sans-serif;
    --font-family-main: "Arial Rounded MT Bold", "Helvetica Rounded", Arial, sans-serif;

    --global-transition-time: 0.2s;
  }

  html,
  body {
    position: relative;
    width: 100%;
    height: 100%;
  }

  body {
    font-size: 16px;
    font-weight: var(--font-weight-normal);
    margin: 0;
    box-sizing: border-box;
    font-family: var(--font-family-main);
    background-position: center;
    background-color: transparent;
  }

  body > * {
    box-sizing: border-box;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    margin: 0;
    font-weight: var(--font-weight-normal);
  }

  .background-clip-text-hack {
    -webkit-background-clip: text;
  }

  .tag {
    color: var(--yellow);
    padding-left: 4px;
    padding-right: 4px;
  }
  
  .emote {
    display: inline-block;
    position: relative;
    top: 2px;
    margin-left: -4px;
    margin-right: -4px;
  }

  .alert__subtitle {
    margin-left: auto;
    margin-right: auto;
    display: block;
    font-family: var(--font-family-heading);
    text-transform: uppercase;
    font-size: 4rem;
    fill: var(--black);
  }
  
  .alert__bannerImage {
    width: 100%;
  }

  .alert__bannerTextPath {
    overflow: visible;
    position: relative;
    bottom: 100px;
    width: 100%;
  }
`;

export { GlobalStyle };
