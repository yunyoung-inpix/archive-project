import React from "react";
import Main from "./pages/main";
import styled from "styled-components";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import theme from "./styles/theme";

const Layout = styled.section`
  align-items: center;
  background-color: ${theme.backgroundColor};
  display: flex;
  height: 100%;
  justify-content: center;
  padding: 20px;
  width: 100%;
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Layout>
        <Main />
      </Layout>
    </ThemeProvider>
  );
}

export default App;
