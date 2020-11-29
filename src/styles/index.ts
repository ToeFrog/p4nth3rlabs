import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
    --cb-animation: cubic-bezier(.51,.56,.11,1.03);
    --alert-display-time: 3900ms;
    --red: #f11012;
    --red-darker: #d90d10;
    --green: #82af3a;
    --black: #0f111a;
    --white: #ffffff;
    --offwhite: #f8f8f2;
    --yellow: #ffb626;

    --mod: #13a133;
    --vip: #d91ca8;
    --broadcaster: #e20f1f;

    --grid-unit: 0.5rem;

    --font-weight-normal: 400;
    --font-weight-bold: 700;

    --font-family-heading: 'Ribeye Marrow', cursive;
    --font-family-main: 'Titillium Web', sans-serif;

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
    margin-top: 366px;
  }

  .alert__bannerTextPath {
    overflow: visible;
    position: relative;
    bottom: 192px;
    width: 100%;
  }
`;

export { GlobalStyle };
