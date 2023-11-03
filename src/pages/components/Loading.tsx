import styled from "styled-components";

const Wrapper = styled.div`
  height: 100%;
  text-align: center;
  width: 100%;
`;

const Loading = () => {
  return (
    <Wrapper>
      <h3>검색결과를 찾고 있어요 :-)</h3>
    </Wrapper>
  );
};

export default Loading;
