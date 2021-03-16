import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import colors from '@/styles/theme/colors';

export default createGlobalStyle`
  ${reset}

  html {
    font-size: 68.75%;
    height: -webkit-fill-available;
  }

  ::selection {
    color: ${colors.white};
    background: ${colors.primaryDark};
  }

  body {
    min-height: 100vh;
    min-height: -webkit-fill-available;
    background: ${colors.white};
    color: ${colors.black};
    font-family: 'Montserrat', Arial, Helvetica, sans-serif;
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