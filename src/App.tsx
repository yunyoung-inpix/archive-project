import React from "react";
import Main from "./pages/Main";
import styled from "styled-components";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import theme from "./styles/theme";
import Header from "./pages/components/Header";

const Layout = styled.section`
  align-items: center;
  background-color: ${theme.backgroundColor};
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  padding: 0px 20px;
  width: 100%;
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Layout>
        <Header />
        <Main />
      </Layout>
    </ThemeProvider>
  );
}

export default App;
