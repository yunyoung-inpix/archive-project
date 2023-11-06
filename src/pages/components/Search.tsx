import React from "react";
import { useState } from "react";
import axios from "axios";
import styled from "styled-components";
import theme from "../../styles/theme";
import Loading from "./Loading";
import SearchResult from "./SearchResult";

export type DataProps = {
  blogname: string;
  contents: string;
  title: string;
  thumbnail: string;
  url: string;
};

const SearchSection = styled.section`
  align-items: center;
  height: 40px;
  display: flex;
  justify-content: center;
  margin-bottom: 50px;

  input {
    background-color: ${theme.backgroundColor};
    border: none;
    border-bottom: 1px solid ${theme.mainColor};
    font-size: 18px;
    height: 100%;
    padding: 0px 14px;
    width: 360px;
  }
  input::placeholder {
    color: lightgray;
    font-size: 18px;
  }

  button {
    background-color: ${theme.mainColor};
    border-radius: 8px;
    color: white;
    height: 100%;
    margin-left: 30px;
    padding: 0px 30px;
  }

  button:hover {
    opacity: 0.8;
    transition: all 0.2s ease-in-out;
  }
`;

const SearchResultSection = styled.section`
  display: grid;
  gap: 60px;
  grid-template-columns: repeat(4, 1fr);

  h3 {
    font-size: 14px;
    font-weight: 700;
    margin-bottom: 20px;
  }
  p {
    font-size: 12px;
    line-height: 1.3;
  }
`;

const SearchInput = () => {
  const KAKAO_API = "cf9234ea5d7459ac09ff312f052abc61";
  const apiUrl = "https://dapi.kakao.com/v2/search/blog";

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [keyword, setKeyword] = useState<string>("");
  const [searchResults, setSearchResults] = useState<DataProps[]>([]);

  const getSearchResults = async () => {
    await axios({
      method: "GET",
      url: apiUrl,
      params: {
        query: keyword,
        size: 50,
      },
      headers: {
        Authorization: `KakaoAK ${KAKAO_API}`,
      },
    })
      .then((response) => {
        const data = response.data.documents;
        setSearchResults(data);
        setTimeout(() => setIsLoading(false), 2000);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  function onSearchInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    setKeyword(e.target.value);
  }

  function onSearchBtnClick(e: React.MouseEvent<HTMLButtonElement>) {
    if (keyword === "") {
      alert("검색어를 입력해주세요!");
    } else {
      setIsLoading(true);
      setKeyword("");
      getSearchResults();
    }
  }

  return (
    <div>
      <SearchSection>
        <input type="text" placeholder="검색어를 입력해주세요" onChange={onSearchInputChange} value={keyword} />
        <button onClick={onSearchBtnClick}>검색</button>
      </SearchSection>
      {isLoading ? (
        <Loading />
      ) : (
        <SearchResultSection>
          {searchResults.map((data) => {
            return (
              <SearchResult
                key={data.url}
                blogname={data.blogname}
                contents={data.contents}
                thumbnail={data.thumbnail}
                url={data.url}
                title={data.title}
              />
            );
          })}
        </SearchResultSection>
      )}
    </div>
  );
};

export default SearchInput;
