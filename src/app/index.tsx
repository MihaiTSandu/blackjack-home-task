import React from "react";
import { ThemeProvider } from "styled-components";
import GamePage from "./pages/GamePage";
import { GlobalStyle } from "./styles/global-styles";
import { themes } from "./styles/themes";

const App = () => {
  return (
    <ThemeProvider theme={themes.dark}>
      <GlobalStyle />

      <GamePage />
    </ThemeProvider>
  );
};

export default App;
