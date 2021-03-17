import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing:border-box;
  }
  
  html, body {
    font-family: "Noto Sans JP", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: 16px;
    margin: 0;
  }

  main {
    padding: 30px 80px;
  }
`;

