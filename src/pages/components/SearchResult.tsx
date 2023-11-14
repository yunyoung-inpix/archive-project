import styled from "styled-components";
import { DataProps } from "../Search";

const Wrapper = styled.a`
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  min-width: 300px;
  box-shadow: rgba(17, 17, 26, 0.1) 0px 0px 16px;

  :hover {
    transform: scale(1.05);
    transition: all 0.3s ease-in-out;
  }
`;

const ImgBox = styled.div`
  align-items: center;
  background-color: blueviolet;
  display: flex;
  justify-content: center;
  margin-bottom: 22px;

  img {
    width: 100%;
  }
`;

const ContentBox = styled.div`
  display: grid;
  gap: 18px;
  grid-template-rows: max-content;
`;

const BlogName = styled.div`
  font-size: 12px;
  text-decoration: underline;
`;

const Title = styled.div`
  font-weight: 700;
`;

const Content = styled.div`
  font-size: 12px;
  font-weight: 100;
  line-height: 1.3;
`;

const SearchResult = ({ blogname, contents, title, thumbnail, url }: DataProps) => {
  const setTitle = title.replace(/(<([^>]+)>)/gi, "");
  const setContents = contents.replace(/(<([^>]+)>)/gi, "");
  return (
    <Wrapper key={url} href={url} target="_blank">
      <ImgBox>{thumbnail.length !== 0 ? <img src={thumbnail} alt="블로그 썸네일" loading="lazy" /> : null}</ImgBox>
      <ContentBox>
        <BlogName>{blogname}</BlogName>
        <Title>{setTitle}</Title>
        <Content>{setContents}</Content>
      </ContentBox>
    </Wrapper>
  );
};

export default SearchResult;
