import React, { useEffect } from 'react';
import styled from 'styled-components';

type props = {
  inputValue: string;
  idx: number;
  selected: number;
  boldText: string[];
  setSelected: any;
  keywordListLength: number;
  startKeywordItem: number;
  rawData: string;
};

const SearchItem = ({
  inputValue,
  idx,
  selected,
  boldText,
  setSelected,
  keywordListLength,
  startKeywordItem,
  rawData,
}: props) => {
  // useEffect(() => {
  //   listSearchMouse();
  // }, []);
  // const listSearchMouse = () => {
  //   const lastindex = keywordListLength - 1;
  //   document.addEventListener('keyup', e => {
  //     if (e.key === 'ArrowUp') {
  //       selected === 1 ? null : setSelected((prev: number) => prev - 1);
  //     } else if (e.key === 'ArrowDown') {
  //       selected === lastindex ? null : setSelected((prev: number) => prev + 1);
  //     } else {
  //       return;
  //     }
  //   });
  //   return removeEventListener('keyup', () => {
  //     return null;
  //   });
  // };
  // if (startKeywordItem === 0) {
  return (
    <div
      className={`${idx === selected ? 'list__item--selected' : 'list__item'}`}
      key={idx}
    >
      <span style={{ fontWeight: 'bold' }}>{rawData}</span>
      {boldText[1]}
    </div>
  );
  // } else if (startKeywordItem !== 0) {
  //   <div
  //     className={`${idx === selected ? 'list__item--selected' : 'list__item'}`}
  //     key={idx}
  //   >
  //     {boldText[0]}
  //     <span style={{ fontWeight: 'bold' }}>{rawData}</span>
  //     {boldText[1]}
  //   </div>;
  // }
};

export default SearchItem;

const Item = styled.div`
  background-color: ${props =>
    props.className === 'list__item--selected' ? ' gray' : 'white'};
`;
