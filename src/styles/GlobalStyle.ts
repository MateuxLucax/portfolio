import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import colors from './theme/colors';

export default createGlobalStyle`
  ${reset}

  html {
    font-size: 68.75%;
  }

  body {
    background: ${colors.white};
    color: ${colors.black};
    font-family: 'Montserrat', Arial, Helvetica, sans-serif;
  }
`