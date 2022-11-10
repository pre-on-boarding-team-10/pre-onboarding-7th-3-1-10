import React, { useEffect, useRef, useState } from 'react';
import { axiosApi } from '../axios/axios';
import styled from 'styled-components';

const SearchBar = () => {
  const [stateSearchWord, setSearchWord] = useState<string>();
  const [stateSearchList, setSearchList] = useState<any>();
  const regex1 = /[^ㄱ-ㅎ]/g;
  const regex2 = /[^ㄱ-ㅎ]/g;

  const getSearchList = async (word: string) => {
    if (
      regex1.test(word.split('')[0]) &&
      regex2.test(word.split('')[word.length - 1]) &&
      word.length > 0
    ) {
      if (window.sessionStorage.getItem(word)) {
        const searchList = JSON.parse(window.sessionStorage.getItem(word)!);
        if (searchList?.data.length == 0) {
          setSearchList([{ sickCd: 1, sickNm: '검색어없음' }]);
        } else {
          setSearchList(searchList?.data);
        }
      } else {
        const searchList = await axiosApi(word);
        window.sessionStorage.setItem(word, JSON.stringify(searchList));
        if (searchList?.data.length == 0) {
          setSearchList([{ sickCd: 1, sickNm: '검색어없음' }]);
        } else {
          setSearchList(searchList?.data);
        }
      }
    } else {
      setSearchList([{ sickCd: 1, sickNm: '검색어없음' }]);
    }
  };
  return (
    <React.Fragment>
      <Heading>국내 모든 임상시험 검색하고 온라인으로 참여하기</Heading>
      <SearchContainer>
        <SearchInput
          type="search"
          value={stateSearchWord}
          onChange={e => {
            getSearchList(e.target.value);
            setSearchWord(e.target.value);
          }}
        />
        <RecommandBox>
          {stateSearchWord &&
            stateSearchList &&
            stateSearchList.map((el: any) => {
              return (
                <RecommandWord key={el.sickCd}>
                  {el.sickNm.split('').map((word: string) => {
                    for (let i = 0; i < stateSearchWord.length; i++) {
                      if (stateSearchWord.includes(word)) {
                        return (
                          <BoldWord key={Math.random() * 1000}>{word}</BoldWord>
                        );
                      } else {
                        return word;
                      }
                    }
                  })}
                </RecommandWord>
              );
            })}
        </RecommandBox>
        <StyledButton>데이터보기</StyledButton>
      </SearchContainer>
    </React.Fragment>
  );
};

const Heading = styled.h1`
  max-width: 50%;
  margin: 10% auto;
  margin-bottom: 3%;
  font-size: 3rem;
  text-align: center;
`;

const SearchContainer = styled.div`
  margin: 0 auto;
  width: 60%;
  margin-top: 30px;
`;

const SearchInput = styled.input`
  box-sizing: border-box;
  display: block;
  margin: 0 auto;
  margin-bottom: 10px;
  padding: 2% 5%;
  width: 100%;
  border: none;
  border-radius: 40px;
  font-size: 1.5rem;
`;

const RecommandWord = styled.p`
  box-sizing: border-box;
  padding: 10px 10px;
  font-size: 1.2rem;
  background-color: white;
  color: black;
`;

const RecommandBox = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledButton = styled.button`
  background-color: #228be6;
  color: #ffffff;
  border: none;
  border-radius: 5px;
  padding: 12px 24px;
  margin: 0;
`;

const BoldWord = styled.span`
  font-weight: bold;
`;

export default SearchBar;
