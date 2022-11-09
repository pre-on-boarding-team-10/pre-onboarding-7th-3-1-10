import React, { useEffect, useState } from 'react';
import { axiosApi } from '../axios/axios';
import styled from 'styled-components';

const SearchBar = () => {
  const [stateSearchWord, setSearchWord] = useState<string>();
  const [stateSearchList, setSearchList] = useState<any[]>();
  const regex1 = /[^ㄱ-ㅎ]/g;
  const regex2 = /[^ㄱ-ㅎ]/g;

  const getSearchList = async (word: string) => {
    if (
      regex1.test(word.split('')[0]) &&
      regex2.test(word.split('')[word.length - 1]) &&
      word.length > 0
    ) {
      const searchList = await axiosApi(word);
      if (searchList.data.length == 0) {
        setSearchList([{ sickCd: 1, sickNm: '검색어없음' }]);
      } else {
        setSearchList(searchList.data);
      }
      // return searchList.data;
    } else {
      setSearchList([{ sickCd: 1, sickNm: '검색어없음' }]);
    }
  };
  return (
    <React.Fragment>
      <h1>국내 모든 임상시험 검색하고 온라인으로 참여하기</h1>
      <div>
        <input
          type="search"
          onChange={e => {
            getSearchList(e.target.value);
            setSearchWord(e.target.value);
          }}
        />
        <RecommandBox>
          {stateSearchWord &&
            stateSearchList &&
            stateSearchList.map(el => {
              return (
                <RecommandWord key={el.sickCd}>
                  {el.sickNm.split('').map((word: string) => {
                    for (let i = 0; i < stateSearchWord.length; i++) {
                      if (stateSearchWord.includes(word)) {
                        return <BoldWord>{word}</BoldWord>;
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
      </div>
    </React.Fragment>
  );
};

const RecommandWord = styled.p`
  background-color: #000;
  color: white;
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
