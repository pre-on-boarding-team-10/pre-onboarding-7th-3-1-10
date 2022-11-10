import axios from 'axios';
import { debounce } from 'lodash';
import React, { useEffect, useMemo, useState } from 'react';
import styled from 'styled-components';
type ValusInerface = {
  name: string;
  list: testInterface[];
};
type testInterface = {
  sickCd: string;
  sickNm: string;
};
const SearchBar = () => {
  const [isSearchValue, setIsSearchValue] = useState<string>('');
  const [isSearchList, setIsSearchList] = useState<ValusInerface[]>([]);
  const [isResponseList, setIsResponseList] = useState<testInterface[]>([]);
  const searchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    debounceOnChange(e.target.value);
  };

  const debounceOnChange = debounce(value => {
    setIsSearchValue(value);
    if (isSearchList.find(v => v.name === value)) {
      console.log('haha');
    } else if (value) {
      axios
        .get('http://localhost:4000/sick', {
          params: {
            sickNm_like: value,
          },
        })
        .then(res => {
          const testObj = {
            name: value,
            list: res.data,
          };
          setIsSearchList(prev => [...prev, testObj]);
          setIsResponseList(res.data);
          setIsSearchValue('');
          console.log(res.data, '이거 통신 된거');
        });
    } else if (!value) {
      setIsResponseList([]);
    }
  }, 500);

  const testArr = isSearchList?.find(v => v.name === isSearchValue);
  // const testArr2 = isResponseList?.find(v => v.name === isSearchValue);
  console.log(testArr, '저장된 검색결과');
  console.log(isResponseList, '통신되고 검색결과');
  console.log(isSearchList);
  return (
    <MainBox>
      <InputBox>
        <input onChange={searchChange} />
      </InputBox>
      <BtnBox>
        <button>검색</button>
      </BtnBox>
      <div>
        {/* {testArr2?.list.map((i, idx) => (
          <span key={idx}>{i.sickNm}</span>
        ))} */}
        {isResponseList.map((i, idx) => (
          <span key={idx}>{i.sickNm}</span>
        ))}
      </div>
      <div>
        {testArr?.list.map((i, idx) => (
          <span key={idx}>{i.sickNm}</span>
        ))}
      </div>
    </MainBox>
  );
};

const MainBox = styled.div`
  width: 90%;
  height: 100px;
  margin-top: 50px;
  display: flex;
  /* flex-direction: column; */
  justify-content: space-between;
  align-items: center;
`;

const InputBox = styled.div`
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  input {
    width: 100%;
    height: 90px;
    padding: 15px 10px;
    font-size: 2.4rem;
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
  }
`;

const BtnBox = styled.div`
  width: 20%;
  height: 90px;
  display: flex;
  justify-content: center;
  align-items: center;
  button {
    width: 100%;
    height: 100%;
    border: none;
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
    background-color: #3498db;
    color: #fff;
    font-size: 1.5rem;
  }
`;

export default SearchBar;
