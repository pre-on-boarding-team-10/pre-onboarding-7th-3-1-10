import React from 'react';
import styled from 'styled-components';
interface ListProps {
  sickNm: string;
  searchValue: string;
}

const List = (props: ListProps): React.ReactElement => {
  const { sickNm, searchValue } = props;

  const checkWord = sickNm.replace(searchValue, `<Point>${searchValue}<Point>`);
  const splitedArr = checkWord.split('<Point>');

  console.log(splitedArr);

  return (
    <ListItem>
      <i className="fa-solid fa-magnifying-glass" />
      <span>
        {splitedArr[0]}
        <strong>{splitedArr[1]}</strong>
        {splitedArr[2]}
        {splitedArr[3]}
      </span>
    </ListItem>
  );
};

export default List;
const ListItem = styled.p`
  font-size: 20px;
  line-height: 35px;

  i {
    font-size: 15px;
    padding-right: 10px;
  }
  strong {
    font-weight: 800;
  }
`;
