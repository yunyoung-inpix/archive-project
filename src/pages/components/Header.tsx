import styled from "styled-components";
import theme from "../../styles/theme";

const Wrapper = styled.section`
  /* background-color: antiquewhite; */
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
const Header = () => {
  return (
    <>
      <Wrapper>
        <Logo>Archive</Logo>
        <div>
          <span>뿅</span>
          <span>뿅</span>
        </div>
      </Wrapper>
    </>
  );
};

export default Header;
