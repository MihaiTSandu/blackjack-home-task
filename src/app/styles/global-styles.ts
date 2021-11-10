import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100%;
    width: 100%;
    margin: 0;
    padding: 0;
  }

  body {
    background-color: ${(p) => p.theme.background};
    color: ${(p) => p.theme.text};
  }
`;