import React, { useEffect, useState, useCallback } from 'react';
import styled from 'styled-components';
import { getSerch } from '../api/api';
import List from './components/List';

const Main = () => {
  const [buckets, setBuckets] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const checkList = buckets.length > 0;

  interface Search {
    q: string;
  }

  interface ListProps {
    sickCd: string;
    sickNm: string;
  }

  const handleSearchValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const fetchData = useCallback(async () => {
    const payload: Search = {
      q: searchValue,
    };

    await getSerch(payload)
      .then(({ data }) => {
        setBuckets(data);
      })
      .catch(e => {
        console.log(e);
      });
  }, [searchValue]);

  useEffect(() => {
    searchValue && fetchData();
  }, [searchValue]);
  console.log(searchValue);
  return (
    <MainContainer>
      <MainTitle>국내 모든임상</MainTitle>
      <SearchBox>
        <SearchInput onChange={handleSearchValue} />
        <SearchBtn>검색</SearchBtn>
        <SearchIcon className="fa-solid fa-magnifying-glass" />
      </SearchBox>
      <SearchedList isActive={checkList}>
        {buckets.map((item: ListProps, idx: number) => {
          return (
            <List
              key={`item${idx}`}
              sickNm={item.sickNm}
              searchValue={searchValue}
            />
          );
        })}
      </SearchedList>
    </MainContainer>
  );
};

export default Main;

const MainContainer = styled.div`
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  background-color: rgb(213, 231, 251);
  padding: 50px 30px;
`;

const MainTitle = styled.h1`
  font-size: 30px;
  font-weight: 800;
  line-height: 35px;
  text-align: center;
`;

const SearchBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
  flex-wrap: wrap;
  height: 70px;
  position: relative;
`;

const SearchInput = styled.input`
  width: 80%;
  height: 100%;
  padding: 15px 0px 15px 55px;
  border-radius: 25px 0px 0px 25px;
  border: none;
  font-size: 25px;
`;
const SearchBtn = styled.button`
  width: 20%;
  padding: 15px;
  height: 100%;
  border-radius: 0px 25px 25px 0px;
  background-color: rgb(71, 120, 218);
  font-size: 25px;
  font-weight: 800;
  color: #fff;
`;

const SearchedList = styled.div<{ isActive: boolean }>`
  width: 100%;
  border-radius: 10px;
  display: ${props => (props.isActive ? 'block' : 'hide')};

  background-color: #fff;
  margin-top: 20px;
  padding: 20px 10px;
`;

const SearchIcon = styled.i`
  position: absolute;
  left: 20px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 18px;
`;
