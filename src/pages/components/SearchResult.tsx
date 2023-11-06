import styled from "styled-components";
import { DataProps } from "./Search";

const Wrapper = styled.a`
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  min-width: 300px;
  box-shadow: rgba(17, 17, 26, 0.1) 0px 0px 16px;
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

const LoadingBox = styled.div`
  background-color: lightgray;
  min-height: 200px;
  width: 100%;
`;

const SearchResult = ({ blogname, contents, title, thumbnail, url }: DataProps) => {
  const setTitle = title.replace(/(<([^>]+)>)/gi, "");
  const setContents = contents.replace(/(<([^>]+)>)/gi, "");
  return (
    <Wrapper key={url} href={url} target="_blank">
      <ImgBox>
        {thumbnail.length !== 0 ? (
          <img src={thumbnail} alt="블로그 썸네일" loading="lazy" />
        ) : (
          <LoadingBox></LoadingBox>
        )}
      </ImgBox>
      <p>{blogname}</p>
      <h3>{setTitle}</h3>
      <p>{setContents}</p>
    </Wrapper>
  );
};

export default SearchResult;
