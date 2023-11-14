import React from "react";
import styled from "styled-components";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import GlobalStyles from "./styles/GlobalStyles";
import theme from "./styles/theme";
import Main from "./pages/Main";
import Header from "./pages/components/Header";
import MyBlog from "./pages/MyBlog";

const Wrapper = styled.section`
  /* align-items: center; */
  background-color: ${theme.backgroundColor};
  /* display: flex; */
  /* flex-direction: column; */
  height: 100%;
  /* justify-content: center; */
  padding: 0px 20px;
  width: 100%;
`;

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Wrapper>
          <Header />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/myblog" element={<MyBlog />} />
          </Routes>
        </Wrapper>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
