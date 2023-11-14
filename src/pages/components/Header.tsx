import { Link } from "react-router-dom";
import styled from "styled-components";

import theme from "../../styles/theme";

const Wrapper = styled.section`
  align-items: center;
  display: flex;
  height: 60px;
  justify-content: space-between;
  width: 100%;
`;

const Logo = styled.h1`
  color: ${theme.mainColor};
  cursor: pointer;
  display: block;
  font-size: 18px;
  font-weight: 100;

  :hover {
    color: black;
    transition: all 0.8s ease-in-out;
  }
`;

const Menu = styled.div`
  display: flex;
  gap: 20px;

  a {
    color: ${theme.mainColor};
    font-weight: 100;
  }
`;

const Header = () => {
  return (
    <Wrapper>
      <Logo>
        <Link to="/">Archive</Link>
      </Logo>
      <Menu>
        <Link to="/myblog">MyBlog</Link>
        <span>뿅</span>
      </Menu>
    </Wrapper>
  );
};

export default Header;
