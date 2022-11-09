import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useDebounce from './hooks/useDebounce';
import useInput from './hooks/useInput';

type fetchDatas = {
  sickCd: string;
  sickNm: string;
};
const Test = (): JSX.Element => {
  const [keywordList, setKeywordList] = useState<fetchDatas[]>([]);
  const keyword = useInput();
  const { inputValue, onChange } = keyword;
  const debounceValue: string = useDebounce(inputValue, 2000);
  useEffect(() => {
    if (debounceValue) {
      const getSearchKeyword = async (debounceValue: string) => {
        axios
          .get(`http://localhost:4000/sick`, {
            params: {
              q: debounceValue,
            },
          })
          .then(res => {
            console.log(res.data);

            return setKeywordList(res.data);
          });
      };
      getSearchKeyword(debounceValue);
    } else {
      console.log('keywords 없음');
      setKeywordList([]);
    }
  }, [inputValue, debounceValue]);
  const searchItems = keywordList?.map((item: any, idx) => {
    if (item.sickNm.trim().includes(inputValue)) {
      return <div key={idx}>{item.sickNm}</div>;
    }
  });

  const noKeyword = <div>찾으시는 키워드가 없습니다</div>;

  if (inputValue === '') {
    return (
      <div>
        <input type="text" value={inputValue} onChange={onChange} />
        <div>{inputValue}</div>
      </div>
    );
  } else {
    return (
      <div>
        <input type="text" value={inputValue} onChange={onChange} />
        <div>{inputValue}</div>
        {keywordList.length < 1 ? noKeyword : undefined}
        {searchItems}
      </div>
    );
  }
};

export default Test;
