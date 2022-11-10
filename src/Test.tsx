import axios, { AxiosResponse } from 'axios';
import React, { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import useDebounce from './hooks/useDebounce';
import useInput from './hooks/useInput';

type fetchDatas = {
  sickCd: string;
  sickNm: string;
};

const Test = (): JSX.Element => {
  const [keywordList, setKeywordList] = useState<AxiosResponse[] | null>(null);
  const keyword = useInput();
  const { inputValue, onChange } = keyword;
  const [selected, setSelected] = useState(0);
  const debounceValue: string = useDebounce(inputValue, 500);
  const lastindex = keywordList?.length - 1;

  const includeKeyword = (debounceValue: any) => {
    const exactWord = '';
    const sliceDebounceValue = debounceValue.trim().split('');
    for (let i = 0; i < window.localStorage.length; i++) {
      if (sliceDebounceValue.includes(localStorage.key(i))) {
        return exactWord + localStorage.key(i);
      }
    }
    return exactWord;
  };
  useEffect(() => {
    if (debounceValue) {
      console.log(debounceValue);
      const fetchData = async (debounceValue: string) => {
        if (window.localStorage.getItem(debounceValue)) {
          const result = JSON.parse(window.localStorage.getItem(debounceValue));
          setKeywordList(result);
        } else if (includeKeyword(debounceValue)) {
          const filtered = JSON.parse(
            window.localStorage.getItem(includeKeyword(debounceValue))
          ).filter((v: any) => v.sickNm.includes(debounceValue));
          setKeywordList(filtered);
        } else {
          try {
            const request = await axios
              .get('http://localhost:4000/sick', {
                params: { q: debounceValue },
              })
              .then(res => res.data);
            console.log(request);
            window.localStorage.setItem(debounceValue, JSON.stringify(request));
            setKeywordList(request);
          } catch (err) {
            console.error(err);
          }
        }
      };
      fetchData(debounceValue);
    } else {
      setKeywordList([]);
    }
  }, [inputValue, debounceValue]);

  const searchItems = keywordList?.map((item: any, idx) => {
    if (item.sickNm.trim().includes(inputValue)) {
      return (
        <Item
          className={`${
            idx === selected ? 'list__item--selected' : 'list__item'
          }`}
          key={idx}
        >
          {item.sickNm}
        </Item>
      );
    }
  });

  const noKeyword = <div>찾으시는 키워드가 없습니다</div>;

  if (inputValue === '') {
    return (
      <div>
        <input type="text" value={inputValue} onChange={onChange} />
        {inputValue}
      </div>
    );
  } else {
    return (
      <div>
        <input type="text" value={inputValue} onChange={onChange} />
        {inputValue}
        {keywordList.length < 1 ? noKeyword : undefined}
        {searchItems}
      </div>
    );
  }
};

export default Test;

const Item = styled.div`
  background-color: ${props =>
    props.className === 'list__item--selected' ? ' gray' : 'white'};
`;
