import axios, { AxiosResponse } from 'axios';
import React, { useState, useEffect, useCallback, useRef } from 'react';

import Nokeyword from './components/Nokeyword';
import SearchItem from './components/SearchItem';
import useDebounce from './hooks/useDebounce';
import useIncludeKeyword from './hooks/useIncludeKeyword';
import useInput from './hooks/useInput';

const Test = (): JSX.Element => {
  const [keywordList, setKeywordList] = useState<AxiosResponse[] | null>(null);
  const keyword = useInput();
  const { inputValue, onChange } = keyword;
  const [selected, setSelected] = useState<number>(0);
  const debounceValue: string = useDebounce(inputValue, 500);
  const localStorageData: string = useIncludeKeyword(debounceValue);
  useEffect(() => {
    listSearchMouse();
  }, []);
  const listSearchMouse = () => {
    const lastindex = keywordList?.length - 1;
    document.addEventListener('keyup', e => {
      if (e.key === 'ArrowUp') {
        selected === 1 ? null : setSelected(prev => prev - 1);
      } else if (e.key === 'ArrowDown') {
        selected === lastindex ? null : setSelected(prev => prev + 1);
      } else {
        return;
      }
    });
    return removeEventListener('keyup', () => {
      return null;
    });
  };

  useEffect(() => {
    if (debounceValue) {
      const fetchData = async (debounceValue: string) => {
        if (window.localStorage.getItem(debounceValue)) {
          const result = JSON.parse(window.localStorage.getItem(debounceValue));
          setKeywordList(result);
        } else if (localStorageData) {
          const filtered = JSON.parse(
            window.localStorage.getItem(localStorageData)
          ).filter((v: any) => v.sickNm.includes(debounceValue));
          setKeywordList(filtered);
        } else {
          try {
            const request = await axios
              .get('http://localhost:4000/sick', {
                params: { q: debounceValue },
              })
              .then(res => res.data);
            if (request.length === 0) setKeywordList(request);

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
    const startKeywordItem = item.sickNm.indexOf(inputValue);
    const boldText = item.sickNm.split(inputValue);
    return (
      <SearchItem
        rawData={item.sickNm}
        key={idx}
        startKeywordItem={startKeywordItem}
        keywordListLength={keywordList.length}
        boldText={boldText}
        inputValue={inputValue}
        idx={idx}
        selected={selected}
        setSelected={setSelected}
      />
    );
  });
  if (inputValue === '') {
    return (
      <div>
        <input type="text" value={inputValue} onChange={onChange} />
      </div>
    );
  } else {
    return (
      <div>
        <input type="text" value={inputValue} onChange={onChange} />
        <div>{inputValue}</div>
        {keywordList.length > 1 ? undefined : (
          <Nokeyword inputValue={inputValue} />
        )}
        {searchItems}
      </div>
    );
  }
};

export default Test;
