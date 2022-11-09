import React, { useEffect, useState } from 'react';
import { axiosApi } from '../axios/axios';

const SearchBar = () => {
  const [stateWordLength, setWordLength] = useState<string|null>(null)
  const getSearchList = async (word: string) => {
    const searchList = await axiosApi(word);
    console.log(searchList.data);
    return searchList.data;
  };

  return (
    <React.Fragment>
        <h1>국내 모든 임상시험 검색하고 온라인으로 참여하기</h1>
      <div>
        <input type="text" onChange={e=>{
          console.log(e.target.value, e.target.value.length)
          setWordLength(e.target.value)
          }}/>
        <button
          onClick={() => {
            getSearchList('담');
          }}
        >
          데이터보기
        </button>
      </div>
    </React.Fragment>
  );
};

export default SearchBar;
