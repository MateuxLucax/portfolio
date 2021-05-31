import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import colors from '@/styles/theme/colors';

export default createGlobalStyle`
  ${reset}

  html {
    font-size: 68.75%;
    scroll-behavior: smooth;
  }

  ::selection {
    color: ${colors.white};
    background: ${colors.primaryDark};
  }

  body {
    position: relative;
    min-height: 100vh;
    background: ${colors.white};
    color: ${colors.black};
    font-family: 'Fira Mono', monospace;
  }

  button {
    border: none;
    padding: none;
    margin: none;
  }

  a {
    color: currentColor;
    text-decoration: none;
  }
`
